package com.example.neurohubbackend.service;

import java.util.List;

import com.example.neurohubbackend.model.Student;

public interface StudentService {
Student saveStudent(Student student);
List<Student> getAllStudents();
Student getStudentById(long StudentId);
Student updateStudent(Student student, long id);
void deleteStudent(long id);
}
