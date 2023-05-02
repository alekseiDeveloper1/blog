import React from 'react';
import {Card, Container} from "react-bootstrap";
import { useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import ServicePosts from "../service";

const PostPage = () => {
    const params = useParams()
    const id = params.id

    const post = useSelector(state => state.posts.find((post) => {
        return post['_id'] === id
    }))

    const onRemovePost = async (id) => {
        const data = await ServicePosts.removePost(id)
        console.log(data)
    }
    return (
        <>
            <Header />
            <Container>
                <Card className="mt-3" style={{width: "70%"}}>
                    <Card.Body>
                        <Card.Img
                            variant="top center"
                            style={{objectFit: "cover"}}
                            height="200px"
                            src={'http://localhost:5000/' + post.img} />
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{post.data}</Card.Subtitle>
                        <Card.Text>
                            {post.desc}
                        </Card.Text>
                        <Card.Link href="#">Add Archive</Card.Link>
                        <Card.Link onClick={() => onRemovePost(post._id)}>Delete</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default PostPage;
