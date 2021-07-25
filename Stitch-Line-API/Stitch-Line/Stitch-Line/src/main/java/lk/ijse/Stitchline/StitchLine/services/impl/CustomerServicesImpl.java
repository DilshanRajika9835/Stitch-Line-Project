package lk.ijse.Stitchline.StitchLine.services.impl;


import lk.ijse.Stitchline.StitchLine.dto.CustomerDto;
import lk.ijse.Stitchline.StitchLine.entity.Customer;
import lk.ijse.Stitchline.StitchLine.repo.CustomerRepo;
import lk.ijse.Stitchline.StitchLine.services.CustomerServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CustomerServicesImpl implements CustomerServices {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public CustomerDto addCustomer(CustomerDto dto) {
        final Customer customer = modelMapper.map(dto, Customer.class);
        final Customer save = customerRepo.save(customer);
        return modelMapper.map(save,CustomerDto.class);
    }



    @Override
    public CustomerDto findUser(String username, String password) {

        final Customer customer = customerRepo.findByUsernameAndPassword(username, password);
        return  modelMapper.map(customer, CustomerDto.class);

    }




}
