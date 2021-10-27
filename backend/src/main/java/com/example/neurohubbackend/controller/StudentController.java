package com.example.neurohubbackend.controller;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.neurohubbackend.model.Student;
/*import com.example.neurohubbackend.repository.StudentRepository;*/
import com.example.neurohubbackend.service.StudentService;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@RequestMapping("/api/students")
public class StudentController {


	private StudentService studentService;
	
	public StudentController(StudentService studentService) {
		super();
		this.studentService = studentService;
	}
	// this is the class that builds the student REST API
	//http://localhost:8082/api/students
	@PostMapping()
	public ResponseEntity<Student> saveStudent(@RequestBody Student student){
		return new ResponseEntity<Student>(studentService.saveStudent(student), HttpStatus.CREATED);
				
	
	}
	
	// this builds the GetMapping for all students REST API
	//http://localhost:8082/api/students/1
	 @GetMapping()
	 public List<Student> getAllStudents(){ 
		  return studentService.getAllStudents();

		  
	  }
	// this builds the method to get student by id REST API
	//http://localhost:8082/api/students/1
	@GetMapping("{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable("id")long studentId){
		return new ResponseEntity<Student>(studentService.getStudentById(studentId), HttpStatus.OK); 
	}
	
	//this build the method to update the student REST API
	@PutMapping("{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable("id") long id
	                  	,@RequestBody Student student){
		return new ResponseEntity<Student>(studentService.updateStudent(student, id), HttpStatus.OK);
	}
	//this build the method to delete the student REST API
	//http://localhost:8082/api/students/1
	@DeleteMapping("{id}") 
	public ResponseEntity<String> deleteStudent(@PathVariable("id") long id){
			
	// action will delete the student from the Database
          	studentService.deleteStudent(id);
			return new ResponseEntity<String>("Student information succussfully deleted from the Database.", HttpStatus.OK);
}	
	}


	

