import React from "react";
import{Button, Form} from 'react-bootstrap'
import { useState } from "react";
import{ useHistory } from "react-router-dom"
const Create=()=>{
    const history=useHistory();
    const [data, setData] = useState({
        title:"",
        body:"",
        author:"",
    });
    const handleChange= (e)=>{
        const{name, value} = e.target;
        setData((prev)=>{
            return{...prev,[name]: value};
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),

        }).then(()=>{
            console.log("Successfully added");
            history.push('/');
        })
    }
    return(
        <div className="create">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="blog_title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" required placeholder="Enter title" onChange={handleChange} name="title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="body_post">
                    <Form.Label>Enter Post</Form.Label>
                    <Form.Control as="textarea" placeholder="type blog..." row={3} onChange={handleChange} name="body"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>author</Form.Label>
                    <Form.Control type="text" placeholder="author blog" onChange={handleChange} name="author"/>
                </Form.Group>
                <Button variant="primary" type="submit" >Save Blog</Button>
            </Form>
        </div>
    )
}
export default Create;