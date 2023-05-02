import React from 'react';
import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import ServicePosts from "../service";

const PostItem = ({prop}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onRemovePost = async (id) => {
        const data = await ServicePosts.removePost(id)
        console.log(data)
    }

    const addArchive = (id) => {
        dispatch({type: 'ADD_ARCHIVE', id})
    }
    return (
        <Card className="mt-3" style={{width: "70%"}}>
            <Card.Body>
                <Card.Img
                    onClick={() => navigate('/' + prop._id)}
                    variant="top center"
                    style={{objectFit: "cover"}}
                    height="200px"
                    src={'http://localhost:5000/' + prop.img}
                />
                <Card.Title>{prop.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{prop.data}</Card.Subtitle>
                <Card.Text>
                    {prop.desc}
                </Card.Text>
                <Card.Link onClick={() => addArchive(prop._id)}>Add Archive</Card.Link>
                <Card.Link onClick={() => onRemovePost(prop._id)}>Delete</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default PostItem;
