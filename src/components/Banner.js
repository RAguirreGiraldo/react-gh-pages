import React from 'react';
import Button from './Button';

function Banner(props) {
    return(
        <div>
            <div className="banner">
                <p>{props.title}</p>
                <div className="body-container">
                     
                    <div className="body-content">
                        <p>
                            {props.text}
                        </p>
                        <Button styles="button-blue" buttonText="Primary" />
                        <Button styles="button-white" buttonText="Secondary" />
                     </div>                       
                </div>
            </div>
        </div>        
    );
}

export default Banner;
