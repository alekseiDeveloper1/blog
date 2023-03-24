import React from 'react';
import PostItem from "./PostItem";
import {Container} from "react-bootstrap";

const PostList = () => {

    const posts = [
        {
            id: 1,
            title: 'title for post',
            data: '24.03.2023 20:21',
            desc: 'description for the interesting post',
            img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg'
        },
        {
            id: 2,
            title: 'title for post 2',
            data: '24.03.2023 20:21',
            desc: 'description for the interesting post 2',
            img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg'
        },
        {
            id: 3,
            title: 'title for post 3',
            data: '22.03.2023 20:21',
            desc: 'description for the interesting post 3',
            img: 'https://img.freepik.com/free-vector/flat-adventure-background_23-2149054484.jpg'
        },
        {
            id: 4,
            title: 'title for post 4',
            data: '21.03.2023 20:21',
            desc: 'description for the interesting post 4',
            img: 'https://img.freepik.com/premium-vector/landscape-forest-and-river-at-daytime_46176-156.jpg'
        },
        {
            id: 5,
            title: 'title for post 5',
            data: '23.03.2023 20:21',
            desc: 'description for the interesting post 5',
            img: 'https://img.freepik.com/free-vector/spring-landscape-scene_52683-56331.jpg'
        },
    ]

    return (
        <Container>
            {posts.map(post =>
                <PostItem key={post.id} prop={post} />
            )}
        </Container>
    );
};

export default PostList;