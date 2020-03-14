package com.cts.pojo;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="sectors")

public class Sectors {
	@Id
	int id;
	String brief;
	String sectorName;
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getSectorName() {
		return sectorName;
	}

	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}

	
	
	@Override
	public String toString() {
		return "Sectors [id=" + id + ", brief=" + brief + ", sectorName=" + sectorName + "]";
	}
	
	
}
