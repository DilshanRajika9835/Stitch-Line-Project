package lk.ijse.Stitchline.StitchLine.Controller;


import lk.ijse.Stitchline.StitchLine.dto.CustomerDto;
import lk.ijse.Stitchline.StitchLine.exception.NotFoundException;
import lk.ijse.Stitchline.StitchLine.services.CustomerServices;
import lk.ijse.Stitchline.StitchLine.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CustomerController {
@Autowired
private CustomerServices customerServices;
@PostMapping("/api/v1/save")
        public ResponseEntity saveCustomer(@RequestBody CustomerDto dto){
        if (dto.getUsername().trim().length() <= 0) {
                throw new NotFoundException("Customer id cannot be empty");
        }
        final CustomerDto customerDto = customerServices.addCustomer(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", customerDto), HttpStatus.CREATED);

}
        @GetMapping("/api/v1/find")
        public CustomerDto findUser(@RequestHeader String username ,@RequestHeader String password){
                return customerServices.findUser(username,password);
        }

}
