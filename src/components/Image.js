import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height }) => {
  return (
    <div className='image-container'>
      <img
        src={src}
        alt={alt || 'Image'}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired, // The source of the image (URL)
  alt: PropTypes.string,           // Alternative text for the image
  width: PropTypes.number.isRequired,  // Width in pixels
  height: PropTypes.number.isRequired, // Height in pixels
};

export default Image;


{/* implementation example

<Image
  src={localImage or online url} 
  alt="Example Image" 
  width={300} 
  height={200} 
/> 

*/}
