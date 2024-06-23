// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Spinner from "../components/Spinner";
// import Course from "../components/Course";

// const CoursePage = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await fetch(`/api/courses/${id}`);
//         const data = await res.json();
//         setCourse(data);
//       } catch (error) {
//         console.log("error fetching courses", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourse();
//   }, []);

//   return loading ? <Spinner /> : <Course course={course}/>;

// };

// export default CoursePage;

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {toast} from 'react-toastify'

const CoursePage = ({removeCourse}) => {
  const course = useLoaderData();
  const navigate = useNavigate();
  const onDeleteClick =async (courseId) =>{
    const confirm = window.confirm('Are you sure you want to remove this course?')
    if(!confirm) return;
    removeCourse(courseId);
    toast.success('Successfully Deleted Course')
    navigate('/courses')
  }
  

  return (
    <>
 
      <div className="bg-gray-100 text-gray-900 mb-10 pb-10">   
        <div className="max-w-4xl mx-auto p-5 ">
          
          <section>
          <Link  className="flex items-center my-5 gap-1 font-medium   " to='/courses'> <IoIosArrowDropleftCircle className="size-6 "/> Back to Courses</Link>
          </section>

          <div className="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
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
                <p>{course.description}</p>
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
        <div className="flex flex-row justify-end gap-4 mr-[205px] ">
          <Link to={`/edit-course/${course.courseId}`} className="flex bg-blue-500 hover:bg-blue-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline justify-center items-center">Edit Course</Link>
          <Link onClick={()=> onDeleteClick(course.courseId)} className="flex bg-red-500 hover:bg-red-600 text-white font-bold  rounded-full h-10 w-32 focus:outline-none focus:shadow-outline  justify-center items-center">Remove Course</Link>
         
          </div>
      </div>
    </>
  );
};

const courseLoader = async ({ params }) => {
  const res = await fetch(`/api/courses/${params.id}`);
  const data = await res.json();
  return data;
};

export { CoursePage as default, courseLoader };
