
import { useEffect, useRef } from 'react';

export const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 1}px;
          height: ${Math.random() * 4 + 1}px;
          background: ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'};
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float ${Math.random() * 20 + 10}s linear infinite;
          opacity: ${Math.random() * 0.8 + 0.2};
          box-shadow: 0 0 10px currentColor;
        `;
        container.appendChild(particle);
      }
    };

    // Create geometric shapes
    const createShapes = () => {
      const shapes = ['cube', 'triangle', 'circle', 'diamond'];
      
      for (let i = 0; i < 8; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        shape.className = `geometric-shape ${shapeType}`;
        
        const size = Math.random() * 60 + 20;
        const colors = ['#00ffff', '#ff00ff', '#ffff00', '#ff0080'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        shape.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: ${shapeType}-rotate ${Math.random() * 15 + 10}s linear infinite;
          opacity: 0.3;
        `;

        if (shapeType === 'cube') {
          shape.style.background = `linear-gradient(45deg, ${color}, transparent)`;
          shape.style.border = `2px solid ${color}`;
          shape.style.borderRadius = '8px';
        } else if (shapeType === 'triangle') {
          shape.style.width = '0';
          shape.style.height = '0';
          shape.style.borderLeft = `${size/2}px solid transparent`;
          shape.style.borderRight = `${size/2}px solid transparent`;
          shape.style.borderBottom = `${size}px solid ${color}`;
          shape.style.filter = `drop-shadow(0 0 10px ${color})`;
        } else if (shapeType === 'circle') {
          shape.style.background = `radial-gradient(circle, ${color}, transparent)`;
          shape.style.border = `2px solid ${color}`;
          shape.style.borderRadius = '50%';
        } else if (shapeType === 'diamond') {
          shape.style.background = color;
          shape.style.transform = 'rotate(45deg)';
          shape.style.border = `2px solid ${color}`;
          shape.style.filter = `drop-shadow(0 0 15px ${color})`;
        }

        container.appendChild(shape);
      }
    };

    createParticles();
    createShapes();

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, transparent 70%)',
      }}
    />
  );
};
