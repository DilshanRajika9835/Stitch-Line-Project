package lk.ijse.Stitchline.StitchLine.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class CustomerDto {

    private String id;
    private String name;
    private String email;
    private String mobile;
    private String username;
    private String password;

}
