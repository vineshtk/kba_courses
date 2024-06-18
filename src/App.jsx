import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'
const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(

            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/courses' element={<CoursesPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App