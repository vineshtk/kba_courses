// Cards.js
import React from 'react';
import Card from './CourseCard';
import courses from '../courses.json';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
            {courses.map((course) => (
                <Card key={course.id} course={course} />
            ))}
        </div>
    );
};

export default Cards;
