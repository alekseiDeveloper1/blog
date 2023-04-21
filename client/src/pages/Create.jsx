import React, {useState} from 'react';
import Header from "../components/Header";
import {Button, Container, Form} from "react-bootstrap";
import ServicePosts from "../service";

const Create = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addPost = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('desc', desc)
        formData.append('img', file)

        const post = ServicePosts.createPost(formData)
        console.log(post)
    }

    return (
            <>
                <Header />
                <Container>
                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={selectFile}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={addPost}
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>

    );
};

export default Create;
