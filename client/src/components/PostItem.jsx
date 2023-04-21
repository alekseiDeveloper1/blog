import React from 'react';
import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const PostItem = ({prop}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const removePost = (id) => {
        dispatch({type: 'REMOVE_POST', id})
    }

    const addArchive = (id) => {
        dispatch({type: 'ADD_ARCHIVE', id})
    }
    return (
        <Card className="mt-3" style={{width: "70%"}}>
            <Card.Body>
                <Card.Img
                    onClick={() => navigate('/' + prop.id)}
                    variant="top center"
                    style={{objectFit: "cover"}}
                    height="200px"
                    src={'http://localhost:5000' + '/' + prop.img}
                />
                <Card.Title>{prop.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{prop.data}</Card.Subtitle>
                <Card.Text>
                    {prop.desc}
                </Card.Text>
                <Card.Link onClick={() => addArchive(prop.id)}>Add Archive</Card.Link>
                <Card.Link onClick={() => removePost(prop.id)}>Delete</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default PostItem;
