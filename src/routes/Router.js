import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage" 
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"

export const Router = () => {


    return(
        <BrowserRouter>
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/profile/:name" element={<ProfilePage/>} />
            <Route path="/login/:name" element={<LoginPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
        </BrowserRouter>

    )
}