import React from 'react';
import Banner from './Banner';
import BodyContent from './BodyContent';

function Body() {
    return(
        <div className="banner-container">
            <div className="banner">
                <Banner message="Enjoy Our gallery" />
            </div>
            <div className="body-container">
                <div className="body-content">
                    <BodyContent />
                </div>
            </div>
            </div>        
    );
}

export default Body;

/* 
        <div className="banner-container">
            <div className="banner">
                <Banner message = "Enjoy Our galery"/>
            </div>            
            <div className="content-container">
                <BodyContent />
            </div>
        </div>*/ 