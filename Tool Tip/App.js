import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '5px',
            borderRadius: '3px',
            zIndex: '999',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div style={{ textAlign: 'center',marginTop: '50px'}}>
      <h2 style={{marginLeft:'20px'}}>Hover over the elements to see tooltips</h2>
      <Tooltip text="Tooltip for Button 1">
        <button>Button 1</button>
      </Tooltip>
      <Tooltip text="Tooltip for Link 2">
        <a href="#">Link 2</a>
      </Tooltip>
      <Tooltip text="Tooltip for Span 3">
        <span>Span 3</span>
      </Tooltip>
      <Tooltip text="Tooltip for Image 4">
        <img src="https://via.placeholder.com/100" alt="Image 4" />
      </Tooltip>
      <Tooltip text="Tooltip for Div 5">
        <div style={{ width: '100px', height: '50px', backgroundColor: 'skyblue' }}>Div 5</div>
      </Tooltip>
    </div>
  );
}

export default App;
