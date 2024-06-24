import React, { useRef, useEffect } from 'react';

const SheepGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error("Context not found");
      return;
    }

    canvas.width = 1000;
    canvas.height = 800;

    const sheepImg = new Image();
    sheepImg.src = 'https://files.softicons.com/download/animal-icons/cute-animals-icons-by-archigraphs/ico/BritishSheep_Archigraphs.ico'; // Update this path with your sheep image
    sheepImg.onload = () => {
      console.log("Sheep image loaded");
      draw();
    };

    sheepImg.onerror = () => {
      console.error("Sheep image failed to load");
    };

    interface Sheep {
      x: number;
      y: number;
      gravity: number;
      lift: number;
      velocity: number;
    }

    const sheep: Sheep = {
      x: 50,
      y: 50,
      gravity: 0.15,
      lift: -6,
      velocity: 0
    };

    document.addEventListener('keydown', () => {
      sheep.velocity = sheep.lift;
    });

    interface Pipe {
      x: number;
      y: number;
      width: number;
      height: number;
      gap: number;
    }

    const pipes: Pipe[] = [];
    pipes[0] = { x: canvas.width, y: 0, width: 50, height: 200, gap: 250 };

    function resetGame() {
      sheep.x = 50;
      sheep.y = 150;
      sheep.velocity = 0;
      pipes.length = 0;
      pipes.push({ x: canvas.width, y: 0, width: 50, height: 200, gap: 250 });
    }

    function draw() {
      ctx.fillStyle = '#70c5ce'; // Blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < pipes.length; i++) {
        ctx.fillStyle = '#228B22'; // Green color for pipes
        ctx.fillRect(pipes[i].x, pipes[i].y, pipes[i].width, pipes[i].height);
        ctx.fillRect(pipes[i].x, pipes[i].y + pipes[i].height + pipes[i].gap, pipes[i].width, canvas.height - pipes[i].y - pipes[i].height - pipes[i].gap);

        pipes[i].x--;

        if (pipes[i].x === 125) {
          pipes.push({
            x: canvas.width,
            y: Math.floor(Math.random() * (canvas.height - pipes[i].gap)),
            width: 50,
            height: Math.floor(Math.random() * (canvas.height / 2)),
            gap: 150
          });
        }

        if (pipes[i].x === sheep.x && (sheep.y < pipes[i].y + pipes[i].height || sheep.y + sheepImg.height > pipes[i].y + pipes[i].height + pipes[i].gap)) {
          resetGame(); // Restart the game
        }

        if (pipes[i].x === sheep.x) {
          // Increase score here if needed
        }
      }

      ctx.drawImage(sheepImg, sheep.x, sheep.y);

      sheep.velocity += sheep.gravity;
      sheep.y += sheep.velocity;

      if (sheep.y + sheepImg.height >= canvas.height || sheep.y < 0) {
        resetGame(); // Restart the game
      }

      requestAnimationFrame(draw);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default SheepGame;
