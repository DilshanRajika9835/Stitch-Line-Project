import React, { Component,useState } from 'react'
import logo from '../assert/admin.svg';
import boy from '../assert/boy.svg';
import ballon from '../assert/ballon.svg';
import order from '../assert/order.png';
import item from '../assert/item.png';
import customer from '../assert/customer.png';
import  {Link  } from 'react-router-dom'
import '../styles/HomeStyle.css';
import {Button,Card,Modal,Container,Row,Col,Table} from 'react-bootstrap';


export default class AdminPannel extends React.Component {
        constructor(props) {
            super(props)
         
            this.state = {
                useState:false,
                show:false,
                tableInData: [],
                widthArr: [40, 175, 10],
                tblhead: ['No', 'Remark', 'Income'],
                no:1
            }

            this.loadAllCustomer();
            const { history } = this.props;
            window.addEventListener("popstate", () => {
            history.go(1);
          });
        }
      
        handleClose(){
            console.log("handleClose")
            this.setState({
            show:false
            })
            console.log("handleClose"+this.state.show)
        }
        handleShow(){
         console.log("handleShow")
         this.setState({
            show:true
            })
            console.log("handleClose"+this.state.show)
        }
         
          loadAllCustomer(){
            fetch('http://192.168.8.112:8080/api/v1/admin/all', {
              method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => {
                const tableData = [];
                for (let j = 0; j < json.length; j++) {
                  const rowData = [];
                  rowData.push(j+1,json[j].name, json[j].email, json[j].mobile, json[j].password);
                  tableData.push(rowData);
                    
                }
                 this.setState({tableInData: tableData});  
                 console.log(this.state.tableInData.length) 
              })
              .catch(error=>{
                console.log(error) 
              } )
          }
    render() {
        let num=1;
        return (
            <div className="App">
            
            <header>
            <img src={logo} className="App-logo" alt="logo"  />
            <section style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
            <Card style={{ width: '18rem',margin:5 }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Customers</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary"  onClick={()=>this.handleShow()}>Customer</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:5 }}>
                <Card.Img variant="top" src={boy} />
                <Card.Body>
                    <Card.Title>Products</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Product</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:5 }}>
                <Card.Img variant="top" src={ballon} />
                <Card.Body>
                    <Card.Title>Orders</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Orders</Button>
                </Card.Body>
                </Card>
                </section>
            </header>
            <section>
        
        <Container>
          <Row >
          <Col xs={6} md={6}>
          <Modal show={this.state.show} onHide={()=>this.handleClose()} animation={false} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Registered Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <Table striped bordered hover  responsive>
          <thead >
            <tr >
              <th>No</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>password</th>
              
            </tr>
          </thead>
          <tbody id="tblcustomer">
          {this.state.tableInData.map(obj => {
              return(
                <tr>
                <td >{num++}</td>
                <td >{obj[1]}</td>
                <td >{obj[2]}</td>
                <td >{obj[3]}</td>
                <td >{obj[4]}</td>

                </tr>
              )
        
          })}
          </tbody>
        </Table>
               
                </Modal.Body>
                <Modal.Footer>
        
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
        
            </section>
 
            <Link to="/">Log Out</Link>
            </div>
        )
    }
}
