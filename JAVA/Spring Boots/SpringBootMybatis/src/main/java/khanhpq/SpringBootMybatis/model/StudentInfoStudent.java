package khanhpq.SpringBootMybatis.model;

public class StudentInfoStudent {
	private Integer studentId;

	private String studentName;

	private String studentCode;
	
	private Integer infoId;

    private String address;

    private Double averageScore;

    private String dateOfBirth;
    
    public StudentInfoStudent() {
	}

	public StudentInfoStudent(Integer studentId, String studentName, String studentCode, Integer infoId, String address,
			Double averageScore, String dateOfBirth) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentCode = studentCode;
		this.infoId = infoId;
		this.address = address;
		this.averageScore = averageScore;
		this.dateOfBirth = dateOfBirth;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getStudentCode() {
		return studentCode;
	}

	public void setStudentCode(String studentCode) {
		this.studentCode = studentCode;
	}

	public Integer getInfoId() {
		return infoId;
	}

	public void setInfoId(Integer infoId) {
		this.infoId = infoId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getAverageScore() {
		return averageScore;
	}

	public void setAverageScore(Double averageScore) {
		this.averageScore = averageScore;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	@Override
	public String toString() {
		return "StudentInfoStudent [studentId=" + studentId + ", studentName=" + studentName + ", studentCode="
				+ studentCode + ", infoId=" + infoId + ", address=" + address + ", averageScore=" + averageScore
				+ ", dateOfBirth=" + dateOfBirth + "]";
	}

}
