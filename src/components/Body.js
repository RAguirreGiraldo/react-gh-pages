import React from 'react';
import Banner from './Banner';
import BodyContent from './BodyContent';
import Button from './Button';

function Body() {
    return(
        <div className="banner-container">
            <div className="banner">
                <Banner message="Enjoy Our gallery" />
            </div>
            <div className="body-container">
                <div className="body-content">
                    <BodyContent />
                    <Button />
                </div>
            </div>
            </div>        
    );
}

export default Body;
