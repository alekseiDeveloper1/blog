import React from 'react';
import {Container, ListGroup} from "react-bootstrap";

const NavBar = () => {

    const category = [
        {id: 1, title: 'All'},
        {id: 2, title: 'Archive'},
        {id: 3, title: 'My Posts'},
    ]

    return (
        <Container>
            <ListGroup className="mt-3" horizontal>
                {category.map(item =>
                    <ListGroup.Item key={item.id} style={{cursor: 'pointer'}}>{item.title}</ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    );
};

export default NavBar;