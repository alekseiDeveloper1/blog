import React from 'react';
import PostItem from "./PostItem";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";

const PostList = () => {

    const posts = useSelector(state => state.posts)

    return (
        <Container>
            {posts.map(post =>
                <PostItem key={post.id} prop={post} />
            )}
        </Container>
    );
};

export default PostList;