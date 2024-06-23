import React from "react";

const Course = ({course}) => {
  return (
    <>
      <div className="bg-gray-100 text-gray-900 mb-10 pb-10">
        <div className="max-w-4xl mx-auto p-5 ">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Course Thumbnail"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-3xl font-bold text-purple-800">
                  {course.title}
                </h1>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-2xl text-red-500 font-semibold mr-4">
                  {course.price}
                  </span>
                  <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Description
                </h2>
                <p>
                {course.description}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Prerequisites
                </h2>
                <ul className="list-disc list-inside">
                  <li>Basic understanding of blockchain technology</li>
                  <li>Familiarity with programming languages</li>
                  <li>Internet access</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                  Features
                </h2>
                <ul className="list-disc list-inside">
                  <li>40 hours of content</li>
                  <li>Certificate of completion</li>
                  <li>Access to community forums</li>
                  <li>Downloadable resources</li>
                  <li>24/7 support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
