package lk.ijse.Stitchline.StitchLine.repo;


import lk.ijse.Stitchline.StitchLine.entity.Customer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CustomerRepo extends MongoRepository<Customer,Integer> {
    Customer findByUsernameAndPassword(String username,String password);
}
