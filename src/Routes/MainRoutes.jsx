import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    );
}