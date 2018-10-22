package khanhpq.SpringBootMybatis.model;

public class StudentInfo {

	private Integer infoId;
	
	private Student student;

    private String address;

    private Double averageScore;

    private String dateOfBirth;
    
    private int limit;
    
    private int offset;
    
    public StudentInfo() {
	}

	public StudentInfo(Integer infoId, Student student, String address, Double averageScore, String dateOfBirth) {
		super();
		this.infoId = infoId;
		this.student = student;
		this.address = address;
		this.averageScore = averageScore;
		this.dateOfBirth = dateOfBirth;
	}

	public StudentInfo(int limit, int offset) {
		super();
		this.limit = limit;
		this.offset = offset;
	}

	public Integer getInfoId() {
		return infoId;
	}

	public void setInfoId(Integer infoId) {
		this.infoId = infoId;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
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
	
	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	@Override
	public String toString() {
		return "StudentInfo [infoId=" + infoId + ", student=" + student + ", address=" + address + ", averageScore="
				+ averageScore + ", dateOfBirth=" + dateOfBirth + "]";
	}
    
}
