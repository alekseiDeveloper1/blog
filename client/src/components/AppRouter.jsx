import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Create from "../pages/Create";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/:id" element={<PostPage/>}></Route>
            <Route path="/favorite" element={<Favorite/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
        </Routes>
    );
};

export default AppRouter;