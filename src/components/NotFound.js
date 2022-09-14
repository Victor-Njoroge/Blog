import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
 const NotFound =()=>{
    return (
    <div className="not-found">
        <h1>404</h1>
        <h2>Page not found !</h2>
        <Link to="/">
            <Button variant="outline-primary">Go Back to Home page</Button>
        </Link>
    </div>
    )
 }
 export default NotFound;