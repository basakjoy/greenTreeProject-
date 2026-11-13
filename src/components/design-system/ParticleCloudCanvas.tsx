'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleCloudCanvasProps {
  className?: string;
  particleCount?: number;
}

/**
 * Particle Cloud Canvas
 * Full-bleed animated particle visualization:
 * Renders thousands of #1f58f2 dots on the #0d0d0f background.
 * Dots cluster into organic wave-like formations creating depth and movement.
 * Occupies 100% viewport height behind hero text. No border, no radius.
 */
export const ParticleCloudCanvas: React.FC<ParticleCloudCanvasProps> = ({
  className = '',
  particleCount = 1800,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle state representation
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      alpha: number;
      angle: number;
      speed: number;
      clusterWeight: number;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(particleCount, Math.floor((width * height) / 600));

      for (let i = 0; i < count; i++) {
        // Organic clustering using sinusoidal wave distributions
        const u = Math.random();
        const v = Math.random();
        const waveX = u * width;
        const waveCenterY = height * 0.5 + Math.sin(u * 5) * (height * 0.22);
        const spreadY = (v - 0.5) * height * 0.6;
        const y = waveCenterY + spreadY;

        particles.push({
          x: waveX,
          y: y,
          baseX: waveX,
          baseY: y,
          size: Math.random() < 0.85 ? Math.random() * 1.5 + 0.8 : Math.random() * 2.6 + 1.2,
          alpha: Math.random() * 0.75 + 0.25,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.008 + 0.003,
          clusterWeight: Math.random() * 20 + 5,
        });
      }
    };

    initParticles();

    // Mouse tracking for subtle organic interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Fill with Carbon #0d0d0f background
      ctx.fillStyle = '#0d0d0f';
      ctx.fillRect(0, 0, width, height);

      // Render Electric Cobalt #1f58f2 dots
      ctx.fillStyle = '#1f58f2';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        // Wave oscillation
        const waveOffset = Math.sin(time + p.baseX * 0.003) * p.clusterWeight;
        const secondaryWave = Math.cos(time * 0.8 + p.baseY * 0.004) * (p.clusterWeight * 0.5);

        // Distance from mouse
        const dx = mouseX - p.baseX;
        const dy = mouseY - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;
        let repelX = 0;
        let repelY = 0;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 18;
          repelX = -(dx / dist) * force;
          repelY = -(dy / dist) * force;
        }

        const currX = p.baseX + repelX + Math.cos(p.angle) * 4;
        const currY = p.baseY + waveOffset + secondaryWave + repelY;

        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + p.angle));
        ctx.beginPath();
        ctx.arc(currX, currY, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ backgroundColor: '#0d0d0f' }}
      aria-hidden="true"
    />
  );
};

export default ParticleCloudCanvas;

