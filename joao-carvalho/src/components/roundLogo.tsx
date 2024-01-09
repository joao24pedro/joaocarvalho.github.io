import React from 'react'

interface RoundLogoProps {
    path: string; // path to the logo
    size: number; // size of the logo
  }
  
  const RoundLogo: React.FC<RoundLogoProps> = ({ path, size }) => {
    const logoStyle = {
      width: `${size}px`, // Set width of logo
      height: `${size}px`, // Set height of logo
      borderRadius: '50%', // Make the logo round
      objectFit: 'cover' as const, // Ensure the image covers the area without distortion
      display: 'block', // To prevent inline default spacing
      overflow: 'hidden' // In case of overflow, hide it
    };
  
    return <img src={path} alt="Round Logo" style={logoStyle} />;
  };
  
  export default RoundLogo;