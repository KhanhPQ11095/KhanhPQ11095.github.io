package khanhpq.SpringBootMybatis;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("khanhpq.SpringBootMybatis.mapper")
@EnableAutoConfiguration
@SpringBootApplication
public class SpringBootMybatis1Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMybatis1Application.class, args);
	}
}
