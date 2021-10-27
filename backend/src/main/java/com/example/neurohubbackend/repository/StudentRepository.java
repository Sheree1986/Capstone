package com.example.neurohubbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.neurohubbackend.model.Student;


public interface StudentRepository extends JpaRepository<Student, Long> {

}
