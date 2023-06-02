import React from 'react';

function Banner(props) {
    return(
        <div className= "banner">
            <p>{props.message}</p>
        </div>
    );
}

export default Banner;