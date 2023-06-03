import React from 'react';
import '../style/index.css';

function Button(props){
    return (
        <button className={props.styles}>
            {props.buttonText}
        </button>
    )
}

export default Button;