package com.generation.model;

import com.generation.service.CourseService;
import com.generation.service.StudentService;
import org.w3c.dom.ls.LSOutput;

import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

public class Student
    extends Person
    implements Evaluation
{

    float PASS_MIN_GRADE = 3.0f;
    private Map<Course, Double> enrolledCourse;

    private double courseGrade(Course course) {
        return this.enrolledCourse.get(course);
    }

    public Student( String id, String name, String email, Date birthDate )
    {
        super( id, name, email, birthDate );
        this.enrolledCourse = new HashMap<>();
    }

    public void enrollToCourse( Course course )
    {
        //TODO
        this.enrolledCourse.put(course, 0.0);
    }

    @Override
    public List<Course> findPassedCourses() {
        //TODO
        // return null;
        if (this.enrolledCourse.size() > 0) {
            List<Course> passedCourse = new ArrayList<>();

            for (Course course : this.enrolledCourse.keySet()) {
                if (this.enrolledCourse.get(course) >= PASS_MIN_GRADE) {
                    passedCourse.add(course);
                }
            }
            return passedCourse;
        }
        return null;
    };

    public Course findCourseById( String courseId ) {
        //TODO
        // return null;
        for (Course course: this.enrolledCourse.keySet()) {
            if (course.getCode().equals(courseId)) {
                return course;
            }
        }
        return null;
    }

    @Override
    public List<Course> getEnrolledCourses()
    {
        //TODO
        // return null;
        if (this.enrolledCourse.size() > 0) {
            List<Course> enrolledCourse = new ArrayList<>();
            for (Course course : this.enrolledCourse.keySet()) {
                enrolledCourse.add(course);
            }
            return enrolledCourse;
        }
        return null;
    }

    @Override
    public String toString()
    {
        return "Student {" + super.toString() + "}";
    }

}
