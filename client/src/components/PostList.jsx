import React, {useEffect} from 'react';
import PostItem from "./PostItem";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ServicePosts} from "../service";

const PostList = () => {

    const service = new ServicePosts()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchFn = async () => {
            const data = await service.getPosts()
            dispatch({type: 'LOAD_POSTS', data})
        }
        fetchFn()
    }, [])

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
