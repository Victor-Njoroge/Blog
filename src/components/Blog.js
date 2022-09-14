//import { useEffect } from 'react';
//import {useState} from'react';
import React from 'react'
import useFetchData from './useFetchData'
import BlogList from './BlogList'
const Blog=()=>{
   const {myBlogs,loading,Error} = useFetchData('http://localhost:8000/blogs');
    return(
        <div className="Blog">
            {myBlogs && <BlogList blog={myBlogs}/>}
            {loading && <div>Loading...</div>}
        {Error &&<div>{Error}</div>}
           
        </div>
    );

}

export default Blog;