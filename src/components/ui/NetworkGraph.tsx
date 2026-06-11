import { useEffect, useRef } from "react";

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Track mouse position
    const mouse: { x: number | null; y: number | null } = {
      x: null,
      y: null,
    };

    // Particle representation
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Float speed
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce boundaries
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -1;
        } else if (this.x > width) {
          this.x = width;
          this.vx *= -1;
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy *= -1;
        } else if (this.y > height) {
          this.y = height;
          this.vy *= -1;
        }

        // Attraction to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 1800;
            this.vx += (dx / dist) * force * 0.2;
            this.vy += (dy / dist) * force * 0.2;
          }
        }

        // Limit velocity to keep it calm and organic
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = 0.8;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }
      }

      draw(color: string) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    // Populate particles
    const particleCount = 55;
    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Main animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Dynamically handle resizing and initial layout size determination
      const rect = canvas.getBoundingClientRect();
      if (rect.width !== width || rect.height !== height) {
        const needsInit = width === 0 || height === 0;
        width = rect.width;
        height = rect.height;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (needsInit && width > 0 && height > 0) {
          initParticles();
        }
      }

      // Extract current theme colors dynamically
      const computed = getComputedStyle(canvas);
      const primaryColor = computed.getPropertyValue("--rose").trim() || "#D9637E";
      const inkColor = computed.getPropertyValue("--ink").trim() || "#1a1512";

      ctx.clearRect(0, 0, width, height);

      // 1. Update and Draw particles
      particles.forEach((p) => {
        p.update();
        ctx.globalAlpha = 0.75;
        p.draw(primaryColor);
      });

      // 2. Draw connections between close particles
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.strokeStyle = inkColor;
            ctx.globalAlpha = alpha * 0.07; // Very soft connections
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw connections from mouse to nearby particles
      if (mouse.x !== null && mouse.y !== null) {
        const mouseRadius = 140;
        particles.forEach((p) => {
          const dx = mouse.x! - p.x;
          const dy = mouse.y! - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const alpha = 1 - dist / mouseRadius;
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = alpha * 0.12; // slightly more visible than node-to-node
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x!, mouse.y!);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const targetElement = canvas.parentElement || canvas;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    targetElement.addEventListener("mousemove", handleMouseMove);
    targetElement.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      targetElement.removeEventListener("mousemove", handleMouseMove);
      targetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-graph" />;
}
