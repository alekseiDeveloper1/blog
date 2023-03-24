import React from 'react';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PostList from "../components/PostList";

const Home = () => {
    return (
        <>
            <Header />
            <NavBar />
            <PostList />
        </>
    );
};

export default Home;