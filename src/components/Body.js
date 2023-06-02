import React from 'react';
import Banner from './Banner';

function Body() {
    return(
        <div className='body-container'>
            <div className="banner-container">
                <Banner message = "Enjoy Our galery"/>
            </div>            
            <div className='body-content'>

            </div>
        </div>
    );
}

export default Body;