import React, { useRef, useEffect } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      initParticles();
    };

    class Particle {
      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.6;
        // Silver and purple tints
        this.colorType = Math.random() > 0.4 ? 'purple' : 'silver';
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        if (this.colorType === 'purple') {
          ctx.fillStyle = 'rgba(245, 105, 255, 0.45)';
        } else {
          ctx.fillStyle = 'rgba(226, 232, 240, 0.55)';
        }
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const density = Math.floor((canvas.width * canvas.height) / 11000);
      const count = Math.min(Math.max(density, 35), 140);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            const alpha = 0.18 - dist / 750;
            ctx.strokeStyle = `rgba(245, 105, 255, ${Math.max(0, alpha)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 190) {
          ctx.beginPath();
          const mAlpha = 0.45 - mdist / 450;
          ctx.strokeStyle = `rgba(192, 132, 252, ${Math.max(0, mAlpha)})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Draw mouse cursor glow
      if (mouse.x > 0 && mouse.y > 0) {
        // Inner white/silver dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fill();

        // Outer neon purple pulse ring
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 105, 255, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
    />
  );
}
