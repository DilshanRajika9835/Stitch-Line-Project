
import './App.css';
import {BrowserRouter as Router,Switch,Route, Link,Redirect} from "react-router-dom";
import { Navbar,Nav,Container } from 'react-bootstrap';
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'
import HomePage from './component/HomePage'
import AdminPage from './component/AdminPannel'
import TableLoad from './component/TableLoad'
import { history } from './component/history';

function App() {
  return (
    
    <Router history={history}>
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/adminpage" component={AdminPage} />
        <Redirect from="*" to="/" />
    </Switch>
</Router>

  
  );
}

export default App;
