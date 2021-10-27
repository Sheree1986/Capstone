package com.example.neurohubbackend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.neurohubbackend.exception.ResourceNotFoundException;
import com.example.neurohubbackend.model.Student;
import com.example.neurohubbackend.repository.StudentRepository;
import com.example.neurohubbackend.service.StudentService;


@Service
public class StudentServiceImpl implements StudentService{
	
	private StudentRepository studentRepository;
	
	
	public StudentServiceImpl(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}

	@Override
	public Student saveStudent(Student student) {

		return studentRepository.save(student);
	}
	
	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Student getStudentById(long id) {
		Optional<Student> student = studentRepository.findById(id);
		if(student.isPresent()) {
			return student.get();
		} else {
			throw new ResourceNotFoundException("Student", "Id", id);
		}
		
		
}

	@Override
	public Student updateStudent(Student student, long id) {
		
		
		// this is to check if the id or student exist is the Database or needed to be added.
		
		Student existingStudent = studentRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Student", "Id", id));
		
	existingStudent.setFirstName(student.getFirstName());
	existingStudent.setLastName(student.getLastName());
	existingStudent.setEmail(student.getEmail());
	existingStudent.setAccommodation1(student.getAccommodation1());
	existingStudent.setAccommodation2(student.getAccommodation2());
	existingStudent.setAccommodation3(student.getAccommodation3());
	// this is to save existing student to the Database
	
	studentRepository.save(existingStudent);
		return existingStudent;
	}
	
	@Override
	public void deleteStudent(long id) {
		
	// this check if student exist in the Database
		
		studentRepository.findById(id).orElseThrow(() -> 
			new ResourceNotFoundException("Student", "id", id));
		studentRepository.deleteById(id);
	}	
}