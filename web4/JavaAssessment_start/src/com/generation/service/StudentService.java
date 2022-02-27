package com.generation.service;

import com.generation.model.Course;
import com.generation.model.Student;

import java.util.*;

public class StudentService
{
    private final Map<String, Student> students = new HashMap<>();

    // add students to student HashMap
    public void subscribeStudent( Student student )
    {
        students.put( student.getId(), student );
    }

    public Student findStudent( String studentId )
    {
        //TODO
        // return null;
        return this.students.get(studentId);
    }

    public boolean showSummary()
    {
        //TODO
        // return false;
        StringBuilder studentSummary = new StringBuilder();
        if (students.size() > 0) {
            for (Student student : this.students.values()) {
                studentSummary.append(student).append(" Enrolled Courses: ");
                student.getEnrolledCourses().forEach(studentSummary::append);
            }
            System.out.println(studentSummary);
        }
        else {
            System.out.println("Invalid");
        }
        return false;
    }

    public void enrollToCourse( String studentId, Course course )
    {
        //TODO
        this.students.get(studentId).enrollToCourse(course);

    }
}
