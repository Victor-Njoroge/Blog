import React from 'react';
import {link} from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="navbar">
            <h2>BlogPost</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </div>
    );
}
export default Navbar;