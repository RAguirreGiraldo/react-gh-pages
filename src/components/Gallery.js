import React from 'react';

function Gallery(props) {
    return(
      <div className="image-gallery">        
        {props.landscapes.map(landscape => (
            <div key={landscape.id} className='image-container'>
                <img className='image' src={landscape.image} alt={landscape.description} />
            </div>
        ))}
      </div>
    );
}

export default Gallery;
