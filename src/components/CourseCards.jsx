
import React from 'react';
import CourseCard from './CourseCard';
import courses from '../courses.json';

const CourseCards = ({isHome=false}) => {
    const courseList = isHome ? courses.slice(0, 3) : courses
    return (
        <>
        <h2 className="text-3xl font-bold text-purple-950  my-10 text-center">{isHome ? 'Popular Courses' : 'Browse All Courses'}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-10 mb-20'>
            {courseList.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
        </>
    );
};

export default CourseCards;
