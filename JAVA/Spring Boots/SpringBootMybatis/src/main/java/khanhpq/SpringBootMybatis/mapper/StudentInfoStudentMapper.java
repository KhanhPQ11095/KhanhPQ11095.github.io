package khanhpq.SpringBootMybatis.mapper;

import khanhpq.SpringBootMybatis.model.StudentInfoStudent;

public interface StudentInfoStudentMapper {

	public int getMaxId();
	
	public int insertStudent(StudentInfoStudent studentInfoStudent);
	
	public int insertStudentInfo(StudentInfoStudent studentInfoStudent);
	
	public int updateStudentInfo(StudentInfoStudent studentInfoStudent);
}
