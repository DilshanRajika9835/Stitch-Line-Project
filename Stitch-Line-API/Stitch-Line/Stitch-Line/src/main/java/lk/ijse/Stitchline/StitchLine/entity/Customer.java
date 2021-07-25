package lk.ijse.Stitchline.StitchLine.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Document(collection = "Customer")
public class Customer {
    @Id
    private String id;
    private String name;
    private String email;
    private String mobile;
    private String username;
    private String password;
}
