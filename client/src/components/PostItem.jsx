import React from 'react';
import {Card} from "react-bootstrap";

const PostItem = ({prop}) => {
    return (
        <Card className="mt-3" style={{width: "70%"}}>
            <Card.Body>
                <Card.Img variant="top center" style={{objectFit: "cover"}} height="200px"  src={prop.img} />
                <Card.Title>{prop.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{prop.data}</Card.Subtitle>
                <Card.Text>
                    {prop.desc}
                </Card.Text>
                <Card.Link href="#">Add Archive</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default PostItem;