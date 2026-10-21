import { useEffect, useRef } from 'react';

/** Small, requestAnimationFrame-managed ambient particle canvas behind the hero.
 * Pauses when hidden, respects reduced-motion, and cancels animation on unmount.
 */
export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = containerRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;
    let width = 0;
    let height = 0;
    let previous = 0;
    let visible = true;
    let particles: { x: number; y: number; radius: number; speed: number; alpha: number }[] = [];

    const init = () => {
      width = host.clientWidth;
      height = host.clientHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const count = Math.min(78, Math.max(25, Math.round((width * height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.35 + 0.5,
        speed: Math.random() * 0.14 + 0.035,
        alpha: Math.random() * 0.28 + 0.12,
      }));
      draw(0);
    };

    const draw = (delta: number) => {
      ctx.clearRect(0, 0, width, height);
      const dark = document.documentElement.classList.contains('dark');
      for (const p of particles) {
        if (!reduceMotion.matches) {
          p.y -= p.speed * delta * 0.06;
          if (p.y < -4) { p.y = height + 4; p.x = Math.random() * width; }
        }
        ctx.beginPath();
        ctx.fillStyle = dark ? `rgba(179,189,254,${p.alpha + 0.13})` : `rgba(90,100,180,${p.alpha + 0.07})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = (timestamp: number) => {
      if (!visible || document.hidden || reduceMotion.matches) return;
      if (timestamp - previous > 32) {
        const delta = Math.min(timestamp - previous, 50);
        draw(delta);
        previous = timestamp;
      }
      raf = requestAnimationFrame(animate);
    };
    const stop = () => cancelAnimationFrame(raf);
    const start = () => {
      stop();
      if (visible && !document.hidden && !reduceMotion.matches) raf = requestAnimationFrame(animate);
      else draw(0);
    };
    const onChange = () => { previous = 0; start(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    const resize = new ResizeObserver(() => { init(); start(); });
    observer.observe(host);
    resize.observe(host);
    reduceMotion.addEventListener('change', onChange);
    document.addEventListener('visibilitychange', onChange);
    init();
    start();
    return () => {
      stop();
      observer.disconnect();
      resize.disconnect();
      reduceMotion.removeEventListener('change', onChange);
      document.removeEventListener('visibilitychange', onChange);
    };
  }, []);

  return <div ref={containerRef} className="particle-field" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
