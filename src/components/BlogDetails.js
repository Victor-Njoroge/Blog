import React from "react";
import {useParams,useHistory} from "react-router-dom"
import useFetchData from "./useFetchData";
import Button from "react-bootstrap/Button"
const BlogDetails = () => {
    const {id}=useParams();
    const {myBlogs, Error, loading}=useFetchData('http://localhost:8000/blogs/' +id);
    const history= useHistory();
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/' + myBlogs.id,{
            method: 'DELETE'
    }).then(()=>{
        history.push('/');
    })
    };
    return (  
        <div className="blog-details">
             {loading && <div>Loading...</div>}
             {Error &&<div>{Error}</div>}
             {myBlogs &&(
                <article>
                    <h5>{myBlogs.title}</h5>
                    <p>Done by: {myBlogs.author}</p>
                    <div>{myBlogs.body}</div>
                    <Button variant="outline-danger" onClick={handleDelete}>DELETE</Button>
                </article>
             )}
        </div>
    );
}
 
export default BlogDetails;