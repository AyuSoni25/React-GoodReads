import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import BookDescription from "Pages/BookDescription";
import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import Shelf from "Pages/Shelf";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/shelf' element={<Shelf/>}></Route>
            <Route path='/book/description' element={<BookDescription/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    );
}