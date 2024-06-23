import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Spinner from "./Spinner";
// import courses from '../courses.json';

const CourseCards = ({ isHome = false }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.log("error fetching courses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const courseList = isHome ? courses.slice(0, 3) : courses;
  return (
    <>
      <h2 className="text-3xl font-bold text-purple-950  my-7 text-center">
        {isHome ? "Popular Courses" : "Browse All Courses"}
      </h2>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10 mb-20">
          {courseList.map((course) => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </>
  );
};

export default CourseCards;
