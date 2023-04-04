import React from 'react';
import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";

const PostItem = ({prop}) => {
    const dispatch = useDispatch()

    const removePost = (id) => {
        dispatch({type: 'REMOVE_POST', id})
    }
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
                <Card.Link onClick={() => removePost(prop.id)}>Delete</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default PostItem;
