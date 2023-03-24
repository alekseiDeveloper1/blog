import React from 'react';
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col md={3}><h1>Blog</h1></Col>
                    <Col md={9} className="d-flex justify-content-end align-items-center">
                        {/*<Link to='/'>Home</Link>*/}
                        {/*<Link to='/favorite'>Favorite</Link>*/}
                        <NavLink >Home</NavLink>
                        <NavLink className="ms-3">Favorite</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Header;