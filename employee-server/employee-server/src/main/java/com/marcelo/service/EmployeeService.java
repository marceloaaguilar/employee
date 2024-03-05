package com.marcelo.service;

import com.marcelo.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import com.marcelo.entity.Employee;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

}

