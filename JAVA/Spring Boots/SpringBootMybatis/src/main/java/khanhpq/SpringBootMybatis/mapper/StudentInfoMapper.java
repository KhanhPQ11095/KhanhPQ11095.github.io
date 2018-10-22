package khanhpq.SpringBootMybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import khanhpq.SpringBootMybatis.model.StudentInfo;

public interface StudentInfoMapper {

	public List<StudentInfo> selectStudentInfoById(String studentId);
	
	public List<StudentInfo> selectStudentInfoByName(String studentName);
	
	public List<StudentInfo> selectAllStudentInfoStudent();
	
	public List<StudentInfo> selectStudentPaging(@Param("pageNum")int pageNum, @Param("contentNum") int contentNum);
	
	public int selectStudentCount();
}
