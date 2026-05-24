"use client";

import { useEffect, useRef } from "react";

const settings = {
  minWind: 0.5,
  maxWind: 3,
  minSize: 6,
  maxSize: 18,
  emitterY: 0.2,
  emitterSpread: 0.9,
  gravity: 0.3,
  turbulence: 0.5,
  rotationSpeed: 0,
  tumbleStrength: 0.3,
  staticTilt: 0,
  particleCount: 20,
  direction: 1 // 1 = left to right
};

const cache = {
  minSize: 0,
  maxSize: 0,
  minWind: 0,
  maxWind: 0,
  tiltRad: 0
};

function updateCache() {
  cache.minSize = Math.min(settings.minSize, settings.maxSize);
  cache.maxSize = Math.max(settings.minSize, settings.maxSize);
  cache.minWind = Math.min(settings.minWind, settings.maxWind);
  cache.maxWind = Math.max(settings.minWind, settings.maxWind);
  cache.tiltRad = (settings.staticTilt * Math.PI) / 180;
}

function createDefaultImage() {
  if (typeof document === 'undefined') return null;
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = 128;
  tempCanvas.height = 128;

  const tCtx = tempCanvas.getContext("2d");
  if (!tCtx) return null;

  tCtx.scale(2, 2);
  tCtx.beginPath();
  tCtx.moveTo(32, 5);
  tCtx.quadraticCurveTo(5, 32, 32, 59);
  tCtx.quadraticCurveTo(59, 32, 32, 5);

  tCtx.fillStyle = "#bfdbfe"; // subtle ice blue
  tCtx.fill();

  tCtx.strokeStyle = "#60a5fa";
  tCtx.lineWidth = 1;
  tCtx.stroke();

  tCtx.beginPath();
  tCtx.moveTo(32, 5);
  tCtx.lineTo(32, 59);
  tCtx.stroke();

  const img = new Image();
  img.src = tempCanvas.toDataURL();

  return img;
}

function rotateVector(x: number, y: number, z: number, ax: number, ay: number, az: number) {
  let cos = Math.cos(az);
  let sin = Math.sin(az);

  const x1 = x * cos - y * sin;
  const y1 = x * sin + y * cos;
  const z1 = z;

  cos = Math.cos(ay);
  sin = Math.sin(ay);

  const x2 = x1 * cos + z1 * sin;
  const y2 = y1;
  const z2 = -x1 * sin + z1 * cos;

  cos = Math.cos(ax);
  sin = Math.sin(ax);

  return {
    x: x2,
    y: y2 * cos - z2 * sin,
    z: y2 * sin + z2 * cos
  };
}

export function BannerParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let isUnmounted = false;

    updateCache();
    const particleImage = createDefaultImage();
    if (!particleImage) return;

    class Particle {
      x: number = 0;
      y: number = 0;
      width: number = 0;
      height: number = 0;
      windFactor: number = 0;
      vx: number = 0;
      vy: number = 0;
      waveOffset: number = 0;
      angleZ: number = 0;
      spinZ: number = 0;
      angleX: number = 0;
      angleY: number = 0;
      spinX: number = 0;
      spinY: number = 0;

      constructor(initOnScreen = false) {
        this.reset(initOnScreen);
      }

      reset(initOnScreen = false) {
        this.width = cache.minSize + Math.random() * (cache.maxSize - cache.minSize);
        this.height = this.width;

        const centerY = height * settings.emitterY;
        const spreadHeight = height * settings.emitterSpread;
        const minY = centerY - spreadHeight / 2;
        const maxY = centerY + spreadHeight / 2;

        this.y = minY + Math.random() * (maxY - minY);

        if (initOnScreen) {
          this.x = Math.random() * width;
        } else {
          this.x = settings.direction === -1
            ? width + this.width + Math.random() * width
            : -this.width - Math.random() * width;
        }

        const sizeFactor = (this.width - cache.minSize) / (cache.maxSize - cache.minSize || 1);

        this.windFactor = 1 - (sizeFactor * 0.5 + Math.random() * 0.5);
        this.windFactor = Math.max(0.1, Math.min(1, this.windFactor));

        this.vx = 0;
        this.vy = 0;

        this.waveOffset = Math.random() * Math.PI * 2;
        this.angleZ = Math.random() * Math.PI * 2;
        this.spinZ = (Math.random() - 0.5) * settings.rotationSpeed;
        this.angleX = 0;
        this.angleY = 0;
        this.spinX = (Math.random() - 0.5) * 0.1;
        this.spinY = (Math.random() - 0.5) * 0.1;
      }

      update() {
        const targetSpeed = cache.minWind + (cache.maxWind - cache.minWind) * this.windFactor;
        this.vx += (targetSpeed - this.vx) * 0.1;
        this.x += this.vx * settings.direction;

        const gravityMod = 1.5 - this.windFactor;
        this.vy += settings.gravity * 0.05 * gravityMod;

        const wave = Math.sin(this.x * 0.01 * settings.direction + this.waveOffset);
        this.vy += wave * settings.turbulence * 0.05;
        this.vy *= 0.98;

        this.y += this.vy;
        this.angleZ += this.spinZ + this.vx * 0.002;

        if (settings.tumbleStrength > 0) {
          this.angleX += this.spinX * settings.tumbleStrength;
          this.angleY += this.spinY * settings.tumbleStrength;
        }

        const buffer = 200;
        const outByX = settings.direction === -1 ? this.x < -buffer : this.x > width + buffer;

        if (outByX || this.y > height + buffer || this.y < -buffer) {
          this.reset(false);
        }
      }

      draw() {
        if (!ctx || !particleImage) return;
        const vecU = rotateVector(1, 0, 0, this.angleX, this.angleY + cache.tiltRad, this.angleZ);
        const vecV = rotateVector(0, 1, 0, this.angleX, this.angleY + cache.tiltRad, this.angleZ);

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.transform(vecU.x, vecU.y, vecV.x, vecV.y, 0, 0);
        
        // Add a slight opacity for visual blending
        ctx.globalAlpha = 0.45;
        ctx.drawImage(particleImage, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
      }
    }

    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < settings.particleCount; i++) {
        // Init half on screen for immediate effect, half off screen
        const initOnScreen = Math.random() > 0.5;
        const particle = new Particle(initOnScreen);
        particles.push(particle);
      }
    };

    const animate = () => {
      if (isUnmounted) return;
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    setTimeout(() => {
      if (isUnmounted) return;
      resize();
      initParticles();
      animate();
    }, 0);

    window.addEventListener("resize", resize);

    return () => {
      isUnmounted = true;
      window.removeEventListener("resize", resize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
    />
  );
}
