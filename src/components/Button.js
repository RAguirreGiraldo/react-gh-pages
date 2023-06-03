import React from 'react';
import '../style/index.css';

function Button(props){
    return (
        <button className = {props.IsloggedIn ? "button-red" : "button-blue"}>
            {props.IsloggedIn ? " Logout" : "Login"}
        </button>
    )
}

export default Button;