import React from "react"
import '../App.css'
import {Link} from 'react-router-dom';


function Header(props)
{
    return(
        <div>
            <ul>
                <center>
                    React App
                </center>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            <hr/>
        </div>
    )
}


export default Header