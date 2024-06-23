import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css'; // Assuming you are using a separate CSS file

const CustomButton = ({
  width = '100px',
  height = '40px',
  backgroundColor = 'purple',
  color = 'white',
  title = 'Button'
}) => {
  const buttonStyle = {
    width,
    height,
    backgroundColor,
    color,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <button className="custom-button" style={buttonStyle}>
      {title}
    </button>
  );
}

CustomButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
};

export default CustomButton;

// .custom-button:hover {
//   background-color: white;
//   color: purple;
// }
