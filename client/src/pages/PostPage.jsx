import React from 'react';
import {Card, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Header from "../components/Header";

const PostPage = () => {
    const params = useParams()
    const id = params.id - 1

    const post = useSelector(state => state.posts[id])

    const dispatch = useDispatch()

    const removePost = (id) => {
        dispatch({type: 'REMOVE_POST', id})
    }
    return (
        <>
            <Header />
            <Container>
                <Card className="mt-3" style={{width: "70%"}}>
                    <Card.Body>
                        <Card.Img variant="top center" style={{objectFit: "cover"}} height="200px"  src={post.img} />
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{post.data}</Card.Subtitle>
                        <Card.Text>
                            {post.desc}
                        </Card.Text>
                        <Card.Link href="#">Add Archive</Card.Link>
                        <Card.Link onClick={() => removePost(post.id)}>Delete</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default PostPage;
