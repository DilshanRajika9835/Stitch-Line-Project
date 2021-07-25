package lk.ijse.Stitchline.StitchLine.Controller;

import lk.ijse.Stitchline.StitchLine.dto.CustomerDto;
import lk.ijse.Stitchline.StitchLine.services.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin

public class AdminController {
    @Autowired
    private AdminServices adminServices;

    @GetMapping("/api/v1/admin/all")
    public List<CustomerDto> getAllCustomer(){
        return adminServices.getAllCustomer();
    }


}
