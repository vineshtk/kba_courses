import React, { useState } from 'react';

const Card = ({ course }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = course.description;
  if (!showFullDescription) {
    description = description.substring(0, 180) + "..."
  }

  return (
    <div className='bg-purple-100 rounded-md shadow-2xl flex flex-col justify-start p-5 sm:p-10 h-full'>
      <h2 className='font-bold text-md text-purple-900 mb-4'>{course.title}</h2>
      <img src="src/assets/rp.png" alt="course thumbnail" className='w-full h-40 object-cover mb-4' />
      <div >
        {description}
      </div>
      <div className='w-full flex justify-between'>
        <button onClick={() => setShowFullDescription((prevState) => (!prevState))} className='text-purple-500 hover:text-purple-700 mt-2 self-start'>
          {showFullDescription ? 'Less' : 'More'}
        </button>
        <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mt-4 self-start">Go To Course</a>
      </div>
    </div>
  );
};

export default Card;
