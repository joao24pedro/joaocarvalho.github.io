import React, { useEffect, useRef, useState } from 'react';

const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return screenWidth;
  };

const Canvas = () => {
  const screenWidth = useScreenWidth();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = ({ nativeEvent }) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { offsetX, offsetY } = nativeEvent;
    const context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const { offsetX, offsetY } = nativeEvent;
    const context = canvas.getContext('2d');
    if (context) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  };
  
  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (context) {
      context.closePath();
      setIsDrawing(false);
    }
  };

  const screenWidthSpecial = screenWidth - 80;
  return (
    <canvas
      ref={canvasRef}
      width={screenWidthSpecial}
      height="200"
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      style={{ border: '2px solid black', background: '#c9ac83' }}
    />
  );
};

export default Canvas;