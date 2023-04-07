import React from 'react';
import Header from "../components/Header";
import {Card, Container} from "react-bootstrap";
import {useSelector} from "react-redux";

const Archive = () => {
    const posts = useSelector((state) => state.archive)
    return (
        <>
            <Header />
            <Container>
                {posts.map((post =>
                    <Card key={post.id} className="mt-3" style={{width: "70%"}}>
                        <Card.Body>
                            <Card.Img variant="top center" style={{objectFit: "cover"}} height="200px"  src={post.img} />
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.data}</Card.Subtitle>
                            <Card.Text>
                                {post.desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}

            </Container>
        </>
    );
};

export default Archive;
