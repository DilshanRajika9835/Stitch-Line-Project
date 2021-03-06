package lk.ijse.Stitchline.StitchLine.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StandradResponse {
    private String code;
    private String message;
    private Object data;
}
