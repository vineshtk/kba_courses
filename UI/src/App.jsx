import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";

import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import CoursePage, { courseLoader } from "./pages/CoursePage";
import AddCoursePage from "./pages/AddCoursePage";
import EditCoursePage from "./pages/EditCoursePage";

const App = () => {
  
  // login
  const loginSubmit = async (loginDetails) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });
    return ;
  };


  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    // return;
    console.log(res)
  };


  // add course
  const addCourse = async (newCourse) => {
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
    return;
  };

  //   remove course
  const removeCourse = async (id) => {
    const res = await fetch(`/api/courses/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //   update course
  const updateCourse = async (course) => {
    const res = await fetch(`/api/courses/${course.courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage loginSubmit={loginSubmit} />} />
          <Route path="/sign-up" element={<SignupPage signupSubmit={signupSubmit} />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/courses/:id"
            element={<CoursePage removeCourse={removeCourse} />}
            loader={courseLoader}
          />

          <Route
            path="/edit-course/:id"
            element={<EditCoursePage updateCourseSubmit={updateCourse} />}
            loader={courseLoader}
          />

          <Route
            path="/add-course"
            element={<AddCoursePage addCourseSubmit={addCourse} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
