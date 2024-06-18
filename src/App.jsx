import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/CourseCards'
import ViewAllCourses from './components/ViewAllCourses'

const App = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <ViewAllCourses />
        </>
    )
}

export default App