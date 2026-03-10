import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['rgba(99, 102, 241, 0.5)', 'rgba(45, 212, 191, 0.5)', 'rgba(59, 130, 246, 0.5)']; // Indigo, Teal, Blue

    let mouse = {
      x: null,
      y: null,
      radius: 350, // Much larger interaction radius for mass movement
      vx: 0,
      vy: 0,
      lastX: null,
      lastY: null
    };

    const handleMouseMove = (event) => {
      // Calculate mouse velocity for scattering effect
      if (mouse.lastX !== null && mouse.lastY !== null) {
        mouse.vx = event.x - mouse.lastX;
        mouse.vy = event.y - mouse.lastY;
      }
      mouse.lastX = event.x;
      mouse.lastY = event.y;
      
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.vx = 0;
      mouse.vy = 0;
      mouse.lastX = null;
      mouse.lastY = null;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        // Keep track of where they originally spawned
        this.baseX = x;
        this.baseY = y;
        this.size = size;
        this.color = color;
        this.density = (Math.random() * 30) + 1;
        
        // Physics variables for smooth movement
        this.vx = 0;
        this.vy = 0;
        this.friction = 0.88; // Slightly less friction for more fluid bubble movement
        this.spring = 0.015;  // Slower snap back
      }

      draw() {
        ctx.beginPath();
        // Draw the outer bubble
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        // Make lines thicker for visibility
        ctx.lineWidth = this.size > 8 ? 2 : 1;
        ctx.stroke();
        
        // Setup inner subtle fill for larger bubbles
        if (this.size > 5) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2, false);
          // Very faint inner fill using the same rgb values but much lower alpha
          let bgFill = this.color.replace('0.5)', '0.05)').replace('0.6)', '0.05)');
          ctx.fillStyle = bgFill;
          ctx.fill();
        }
      }

      update() {
        let isAttracting = false;
        
        // Mouse interaction logic
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            isAttracting = true;
            
            // Attract towards cursor
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            // The closer it is to the cursor, the stronger the pull
            const force = (maxDistance - distance) / maxDistance;
            
            // Pull bubbles towards the cursor (slightly weaker so they don't clump instantly)
            this.vx += forceDirectionX * force * 1.5;
            this.vy += forceDirectionY * force * 1.5;
            
            // If mouse is moving fast, calculate a scatter force
            const mouseSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
            if (mouseSpeed > 3) {
                // Scatter pushes them in the direction the mouse is moving strongly
                this.vx += mouse.vx * force * 0.25;
                this.vy += mouse.vy * force * 0.25;
            }
          }
        }
        
        // If not being attracted by the cursor, gently pull back to original position
        if (!isAttracting) {
           let dx = this.baseX - this.x;
           let dy = this.baseY - this.y;
           
           // Apply spring force back to base position
           this.vx += dx * this.spring * 0.1;
           this.vy += dy * this.spring * 0.1;
        }

        // Apply friction to slow them down smoothly
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Apply velocities to position
        this.x += this.vx;
        this.y += this.vy;

        this.draw();
      }
    }

    const init = () => {
      particles = [];
      // Slightly reduce density based on user feedback (divisor from 2500 -> 4000)
      const numberOfParticles = (canvas.width * canvas.height) / 4000; 
      
      // More varied and opaque colors for better visibility of thin strokes
      const bubbleColors = ['rgba(99, 102, 241, 0.6)', 'rgba(45, 212, 191, 0.6)', 'rgba(59, 130, 246, 0.6)', 'rgba(168, 85, 247, 0.5)'];
      
      for (let i = 0; i < numberOfParticles; i++) {
        // Larger sizes for bubbles
        let size = (Math.random() * 8) + 2; 
        
        // Occasionally make a very large bubble
        if (Math.random() > 0.95) size = (Math.random() * 15) + 8;
        
        let x = (Math.random() * canvas.width);
        let y = (Math.random() * canvas.height);
        let color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        particles.push(new Particle(x, y, size, color));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};

export default ParticleBackground;
