package lk.ijse.Stitchline.StitchLine.services.impl;

import lk.ijse.Stitchline.StitchLine.dto.CustomerDto;
import lk.ijse.Stitchline.StitchLine.entity.Customer;
import lk.ijse.Stitchline.StitchLine.repo.CustomerRepo;
import lk.ijse.Stitchline.StitchLine.services.AdminServices;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class AdminServicesImpl implements AdminServices {
    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<CustomerDto> getAllCustomer() {
        final List<Customer> all = customerRepo.findAll();
        return modelMapper.map(all,new TypeToken<List<CustomerDto>>(){}.getType());
    }


}
