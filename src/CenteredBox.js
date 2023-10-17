import React from 'react';

const centeredBoxStyle = {
  width: '300px', // Adjust the width as needed
  height: '150px', // Adjust the height as needed
  backgroundColor: '#f0f0f0', // Background color of the box
  border: '1px solid #ccc', // Border styles
  textAlign: 'center', // Center-align the text horizontally
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};


const playButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
};


const CenteredBox = ({ onButtonClick }) => {
  return (
    <div style={centeredBoxStyle}>
      <p> Welcomes to AI TIC TAC TOE</p>
      <p> Developed by Samuel Trujillo </p>
      <button style={playButtonStyle} onClick={onButtonClick}>Play</button>
    </div>
  );
}

export default CenteredBox;
