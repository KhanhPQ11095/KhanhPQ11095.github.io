package khanhpq.SpringBootMybatis.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import khanhpq.SpringBootMybatis.mapper.StudentInfoMapper;
import khanhpq.SpringBootMybatis.mapper.StudentInfoStudentMapper;
import khanhpq.SpringBootMybatis.mapper.StudentMapper;
import khanhpq.SpringBootMybatis.mapper.UserMapper;
import khanhpq.SpringBootMybatis.model.Paging;
import khanhpq.SpringBootMybatis.model.Student;
import khanhpq.SpringBootMybatis.model.StudentInfo;
import khanhpq.SpringBootMybatis.model.StudentInfoStudent;
import khanhpq.SpringBootMybatis.model.User;

@Controller
public class SpringMyBatisController {

	@Autowired
	SqlSessionFactory sqlSessionFactory;

	/*
	 * Mapping (/) trả về trang 'index' - Màn hình Log In.
	 * Kiểm tra user, điều kiện nếu password khác với password trên database thì báo lỗi
	 *     truyền cho 'message' show view form Login và trả về lại trang 'index' - Màn hình Log In.
	 * Ngược lại nếu password giống sẽ trả về đường dẫn show list phân trang 10 records.
	 * Tại trang studentListAdmin thao tác Insert, Update hoặc Delete
	 */
	@RequestMapping("/")
	public String index() {
		return "index";
	}

	@RequestMapping(value = { "/login-form" }, method = RequestMethod.POST)
	public String loginForm(Model model, @RequestParam("userName") String userName,	@RequestParam("password") String password, HttpSession httpSession) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		try {
			UserMapper userMapper = (UserMapper) sqlSession.getMapper(UserMapper.class);
			User user = userMapper.checkUser(userName, password);
			if (!user.getPassword().equals(password)) {
				model.addAttribute("message", "Wrong 'Username' Or 'Password'");
			} else {
				httpSession.setAttribute("userName", user);
				return "redirect:list?pageNum=1&contentNum=10";
			}
		} catch (Exception e) {
			model.addAttribute("message", "Wrong 'Username' Or 'Password'");
		} finally {
			sqlSession.close();
		}
		return "index";
	}
	
	// Lấy data tất cả Sinh Viên
	public List<StudentInfo> getAllStudent() {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		StudentInfoMapper studentMapper = sqlSession.getMapper(StudentInfoMapper.class);
		List<StudentInfo> studentInfos = studentMapper.selectAllStudentInfoStudent();
		
		sqlSession.close();
		
		return studentInfos;
	}

	@RequestMapping("/studentListAdmin")
	public String index(ModelMap modelMap) {
		modelMap.addAttribute("studentInfo", new StudentInfo());
		modelMap.addAttribute("studentInfos", getAllStudent());
		
		return "students/studentListAdmin";
	}

	// Lấy data Sinh viên dựa theo Sinh viên ID
	public List<StudentInfo> getStudent(String studentId) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		StudentInfoMapper studentMapper = sqlSession.getMapper(StudentInfoMapper.class);
		List<StudentInfo> studentInfos = studentMapper.selectStudentInfoById(studentId);
		
		sqlSession.close();
		
		return studentInfos;
	}

	@RequestMapping("/getStudent")
	public String editRecord(ModelMap modelMap, @RequestParam("studentId") String studentId) {
		List<StudentInfo> studentInfos = getStudent(studentId);
		modelMap.addAttribute("studentInfos", studentInfos);
		
		return "students/updateStudent";
	}

	// Mapping trả về trang Insert Sinh Viên
	@RequestMapping("/insertStudent")
	public String insert() {
		return "students/insertStudent";
	}

	/*
	 * Từ trang insertStudent, điền thông tin sinh viên vào form
	 * Sau khi submit Insert sẽ action '/form-insert'
	 * Dữ liệu Sinh viên sẽ được insert vào bảng Student và bảng StudentInfo
	 *     và trả về đường dẫn show list phân trang 10 records với thông tin Sinh viên vừa được insert.
	 */
	@RequestMapping(value = { "/form-insert" }, method = RequestMethod.POST)
	public String insertRecord(@ModelAttribute(name = "student") StudentInfoStudent studentInfoStudent, ModelMap modelMap) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		StudentInfoStudentMapper studentInfoStudentMapper = sqlSession.getMapper(StudentInfoStudentMapper.class);
		try {
			int nextId = studentInfoStudentMapper.getMaxId() + 1;
			studentInfoStudent.setStudentId(nextId);
			studentInfoStudentMapper.insertStudent(studentInfoStudent);
			studentInfoStudentMapper.insertStudentInfo(studentInfoStudent);
			sqlSession.commit();
		} catch (Exception e) {
			sqlSession.rollback();
			return "students/insertStudent";
		} finally {
			sqlSession.close();
		}
		modelMap.addAttribute("studentInfos", getAllStudent());
		return "redirect:list?pageNum=1&contentNum=10";
	}

	/*
	 * Nhấn vào delete trên trang studentListAdmin, submit sẽ get ID Sinh viên tại thời điểm nhấn delete,
	 *    dựa vào ID Sinh viên đã get để xóa tất cả thông tin về Sinh viên có ID tại thời điểm nhấn delete
	 *    và trả về đường dẫn show list phân trang 10 records với thông tin Sinh viên vừa được xóa đã mất.
	 */
	@RequestMapping("/delete")
	public String delete(ModelMap modelMap, @RequestParam("studentId") int studentId) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		StudentMapper studentMapper = sqlSession.getMapper(StudentMapper.class);
		try {
			Student student = new Student();
			student.setStudentId(studentId);
			studentMapper.deleteStudentById(student);
			sqlSession.commit();
		} catch (Exception e) {
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		modelMap.addAttribute("studentInfo", new StudentInfo());
		modelMap.addAttribute("studentInfos", getAllStudent());
		return "redirect:list?pageNum=1&contentNum=10";
	}

	/*
	 * Nhấn vào update trên trang studentListAdmin, submit sẽ get ID Sinh viên tại thời điểm nhấn update,
	 *     dựa vào ID Sinh viên đã get tại thời điểm nhấn update, sẽ show thông tin Sinh viên sẽ được update lên form
	 * Sau khi chỉnh sửa thông tin Sinh viên và nhấn Update, submit Update sẽ action form 'form-update'
	 * Dữ liệu Sinh viên sẽ được update vào bảng Student và bảng StudentInfo
	 *     và trả về đường dẫn show list phân trang 10 records với thông tin Sinh viên đã được update.
	 */
	@RequestMapping(value = { "/updateStudent" }, method = RequestMethod.GET)
	public String updateList(ModelMap modelMap) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		try {
			StudentInfoMapper studentMapper = sqlSession.getMapper(StudentInfoMapper.class);
			List<StudentInfo> studentInfos = studentMapper.selectAllStudentInfoStudent();
			modelMap.addAttribute("studentInfos", studentInfos);
		} finally {
			sqlSession.close();
		}
		return "students/updateStudent";
	}

	@RequestMapping(value = { "/form-update" }, method = RequestMethod.POST)
	public String updateRecord(@ModelAttribute(name = "student") StudentInfoStudent studentInfoStudent, ModelMap modelMap) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		StudentInfoStudentMapper studentInfoStudentMapper = sqlSession.getMapper(StudentInfoStudentMapper.class);
		try {
			studentInfoStudentMapper.updateStudentInfo(studentInfoStudent);
			sqlSession.commit();
		} catch (Exception e) {
			sqlSession.rollback();
		} finally {
			sqlSession.close();
		}
		modelMap.addAttribute("studentInfos", getAllStudent());
		return "redirect:list?pageNum=1&contentNum=10";
	}

	// Tìm kiếm Sinh viên dựa vào Name hoặc Id
	public List<StudentInfo> getStudentByName(String studentName) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		StudentInfoMapper studentInfoMapper = sqlSession.getMapper(StudentInfoMapper.class);
		List<StudentInfo> studentInfos = studentInfoMapper.selectStudentInfoByName(studentName);
		
		sqlSession.close();
		
		return studentInfos;
	}

	/*
	 * Nhập ID hoặc Name Sinh viên cần tìm kiếm
	 * Thông tin vừa nhập sẽ được get, trả về trang studentListAdmin
	 */
	@RequestMapping("/form-search")
	public String searchRecord(ModelMap modelMap, @RequestParam("studentName") String studentName) {
		List<StudentInfo> studentInfos = getStudentByName(studentName);
		modelMap.addAttribute("studentInfos", studentInfos);
		return "students/studentListAdmin";
	}

	// Phân trang show list 10 records
	@RequestMapping(value = { "/list" }, method = { RequestMethod.POST, RequestMethod.GET })
	public String list(HttpServletRequest request) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		StudentInfoMapper studentInfoMapper = sqlSession.getMapper(StudentInfoMapper.class);

		Paging paging = new Paging();
		String pageNum = request.getParameter("pageNum");
		String contentNum = request.getParameter("contentNum");
		int cPageNum = Integer.parseInt(pageNum);
		int cContentNum = Integer.parseInt(contentNum);

		paging.setTotalCount(studentInfoMapper.selectStudentCount());
		paging.setPageNum(cPageNum - 1);
		paging.setContentNum(cContentNum);
		paging.setCurrentBlock(cPageNum);
		paging.setLastBlock(paging.getTotalCount());

		paging.prevnext(cPageNum);
		paging.setStartPage(paging.getCurrentBlock());
		paging.setEndPage(paging.getLastBlock(), paging.getCurrentBlock());

		List<StudentInfo> selectStudentPaging = new ArrayList<>();
		selectStudentPaging = studentInfoMapper.selectStudentPaging(paging.getPageNum() * 10, paging.getContentNum());

		request.setAttribute("studentInfos", selectStudentPaging);
		request.setAttribute("page", paging);

		sqlSession.close();
		
		return "students/studentListAdmin";
	}

}
