package lk.ijse.Stitchline.StitchLine.services;


import lk.ijse.Stitchline.StitchLine.dto.CustomerDto;


public interface CustomerServices {
    CustomerDto addCustomer(CustomerDto dto);
    CustomerDto findUser(String username, String password);

}
