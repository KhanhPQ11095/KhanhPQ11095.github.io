package khanhpq.SpringBootMybatis.mapper;

import khanhpq.SpringBootMybatis.model.User;

public interface UserMapper {

	public User checkUser(String userName, String password);
}
