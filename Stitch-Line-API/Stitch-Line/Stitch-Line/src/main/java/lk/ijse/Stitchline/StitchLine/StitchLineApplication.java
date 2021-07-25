package lk.ijse.Stitchline.StitchLine;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.convert.DefaultMongoTypeMapper;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;

import javax.annotation.PostConstruct;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class StitchLineApplication {
	@Autowired
	private MappingMongoConverter mappingMongoConverter;
	public static void main(String[] args) {
		SpringApplication.run(StitchLineApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}


	// remove _class
	@PostConstruct
	public void setUpMongoEscapeCharacterConversion() {
		mappingMongoConverter.setTypeMapper(new DefaultMongoTypeMapper(null));
	}


}
