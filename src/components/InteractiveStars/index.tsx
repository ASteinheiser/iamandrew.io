import { useEffect, useRef } from 'react';

import { Dot } from './Dot';
import { Star } from './Star';
import './interactive-stars.scss';

const HEIGHT_PERCENT = 0.8; // 80% height
const STAR_COUNT = 100; // default: 80
const BG_SPEED = 0; // default: 0
const DOT_SPEED = -10; // default: 0
const MIN_DISTANCE = 2; // default: 2
const MAX_DISTANCE = 50; // default: 50
const DOT_COLOR = 'rgba(73,47,159,1)';

export function InteractiveStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current === null) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let WIDTH: number;
    let HEIGHT: number;
    let mouseMoving = false;
    let mouseMoveChecker: ReturnType<typeof setTimeout>;
    let mouseX: number;
    let mouseY: number;
    const stars: Star[] = [];
    const dots: (Dot | null)[] = [];

    const getPreviousDot = (id: number, stepback: number): Dot | false => {
      if (id === 0 || id - stepback < 0) return false;
      const dot = dots[id - stepback];
      if (dot !== null && dot !== undefined) return dot;
      return false;
    };

    const killDot = (id: number) => {
      dots[id] = null;
      delete dots[id];
    };

    const resizeCanvas = () => {
      WIDTH = document.documentElement.clientWidth;
      HEIGHT = document.documentElement.clientHeight * HEIGHT_PERCENT;

      canvas.setAttribute('width', WIDTH.toString());
      canvas.setAttribute('height', HEIGHT.toString());
    };

    const init = () => {
      resizeCanvas();

      ctx.strokeStyle = 'white';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 0;

      for (let i = 0; i < STAR_COUNT; i++) {
        stars[i] = new Star({
          id: i,
          x: Math.floor(Math.random() * WIDTH),
          y: Math.floor(Math.random() * HEIGHT),
          canvasContext: ctx,
          canvasHeight: HEIGHT,
          backgroundSpeed: BG_SPEED,
        });
      }

      animate();
    };

    const handleResize = () => {
      resizeCanvas();

      dots.length = 0;
      stars.length = 0;

      for (let i = 0; i < STAR_COUNT; i++) {
        stars[i] = new Star({
          id: i,
          x: Math.floor(Math.random() * WIDTH),
          y: Math.floor(Math.random() * HEIGHT),
          canvasContext: ctx,
          canvasHeight: HEIGHT,
          backgroundSpeed: BG_SPEED,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (const i in stars) stars[i]?.move();
      for (const j in dots) dots[j]?.move();

      drawIfMouseMoving();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseMoving = true;
      mouseX = e.layerX;
      mouseY = e.layerY;

      clearInterval(mouseMoveChecker);
      mouseMoveChecker = setTimeout(() => {
        mouseMoving = false;
      }, 100);
    };

    const drawIfMouseMoving = () => {
      if (!mouseMoving) return;

      if (dots.length === 0) {
        dots[0] = new Dot({
          id: 0,
          x: mouseX,
          y: mouseY,
          color: DOT_COLOR,
          speed: DOT_SPEED,
          canvasContext: ctx,
          canvasHeight: HEIGHT,
          getPreviousDot,
          die: () => killDot(0),
        });
        dots[0].draw();
        return;
      }

      const previousDot = getPreviousDot(dots.length, 1);
      if (!previousDot) return;

      const prevX = previousDot.x;
      const prevY = previousDot.y;

      const diffX = Math.abs(prevX - mouseX);
      const diffY = Math.abs(prevY - mouseY);

      if (diffX < MIN_DISTANCE || diffY < MIN_DISTANCE) return;

      let xVariation = Math.random() > 0.5 ? -1 : 1;
      xVariation = xVariation * Math.floor(Math.random() * MAX_DISTANCE) + 1;
      let yVariation = Math.random() > 0.5 ? -1 : 1;
      yVariation = yVariation * Math.floor(Math.random() * MAX_DISTANCE) + 1;

      const newDotIndex = dots.length;
      dots[newDotIndex] = new Dot({
        id: newDotIndex,
        x: mouseX + xVariation,
        y: mouseY + yVariation,
        color: DOT_COLOR,
        speed: DOT_SPEED,
        canvasContext: ctx,
        canvasHeight: HEIGHT,
        getPreviousDot,
        die: () => killDot(newDotIndex),
      });

      const latestDot = dots[dots.length - 1];
      if (latestDot) {
        latestDot.draw();
        latestDot.link();
      }
    };

    init();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="interactive-stars-container">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}
