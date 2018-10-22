package khanhpq.SpringBootMybatis.mapper;

import khanhpq.SpringBootMybatis.model.Student;

public interface StudentMapper {
	
	public String insertStudent(Student student);

	public String deleteStudentById(Student student);

}
