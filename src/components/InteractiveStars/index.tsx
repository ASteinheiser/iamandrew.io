import { useState, useEffect, useRef } from 'react';

import './interactive-stars.scss';

const HEIGHT_PERCENT = 0.8; // 80% height
const MAX_DISTANCE = 50; // default: 50
const BG_SPEED = 0; // default: 0
const DOT_SPEED = -10; // default: 0
const STAR_COUNT = 100; // default: 80
const DOT_DISTANCE = 2; // default: 2

interface Star {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  draw: () => void;
  move: () => void;
}

interface Dot {
  id: number;
  x: number;
  y: number;
  r: number;
  maxLinks: number;
  speed: number;
  a: number;
  aReduction: number;
  color: string;
  linkColor: string;
  dir: number;
  draw: () => void;
  link: () => void;
  move: () => void;
  die: () => void;
}

export const InteractiveStars = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);
  const [mouseMoving, setMouseMoving] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseMoveChecker, setMouseMoveChecker] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let WIDTH: number;
    let HEIGHT: number;
    const initStarsPopulation = STAR_COUNT;
    const dotsMinDist = DOT_DISTANCE;
    const params = {
      maxDistFromCursor: MAX_DISTANCE,
      dotsSpeed: DOT_SPEED,
      backgroundSpeed: BG_SPEED,
    };

    function setCanvasSize() {
      if (!canvas) return;
      WIDTH = document.documentElement.clientWidth;
      HEIGHT = document.documentElement.clientHeight * HEIGHT_PERCENT;

      canvas.setAttribute('width', WIDTH.toString());
      canvas.setAttribute('height', HEIGHT.toString());
    }

    function createStar(id: number, x: number, y: number): Star {
      const r = Math.floor(Math.random() * 2) + 1;
      const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      const color = 'rgba(255,255,255,' + alpha + ')';

      const draw = () => {
        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.shadowBlur = r * 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
      };

      const move = () => {
        y -= 0.15 + params.backgroundSpeed / 100;
        if (y <= -10) y = HEIGHT + 10;
        draw();
      };

      return { id, x, y, r, color, draw, move };
    }

    function createDot(id: number, x: number, y: number): Dot {
      const r = Math.floor(Math.random() * 5) + 3;
      const maxLinks = 2;
      const speed = 0.5;
      let a = 0.5;
      const aReduction = 0.005;
      const color = 'rgba(73,47,159,1)';
      const linkColor = 'rgba(124,124,124,' + a + ')';
      const dir = Math.floor(Math.random() * 140) + 200;

      const draw = () => {
        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.shadowBlur = r * 2;
        ctx.shadowColor = 'rgb(73,47,159)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
      };

      const link = () => {
        if (!ctx) return;
        if (id === 0) return;
        const previousDot1 = getPreviousDot(id, 1);
        const previousDot2 = getPreviousDot(id, 2);
        const previousDot3 = getPreviousDot(id, 3);
        if (!previousDot1) return;
        ctx.strokeStyle = linkColor;
        ctx.lineWidth = 2;
        ctx.moveTo(previousDot1.x, previousDot1.y);
        ctx.beginPath();
        ctx.lineTo(x, y);
        if (previousDot2) ctx.lineTo(previousDot2.x, previousDot2.y);
        if (previousDot3) ctx.lineTo(previousDot3.x, previousDot3.y);
        ctx.stroke();
        ctx.closePath();
      };

      const move = () => {
        a -= aReduction;
        if (a <= 0) {
          die();
          return;
        }
        x = x + Math.cos(degToRad(dir)) * (speed + params.dotsSpeed / 100);
        y = y + Math.sin(degToRad(dir)) * (speed + params.dotsSpeed / 100);

        draw();
        link();
      };

      const die = () => {
        setDots((prevDots) => prevDots.filter((dot) => dot.id !== id));
      };

      return {
        id,
        x,
        y,
        r,
        maxLinks,
        speed,
        a,
        aReduction,
        color,
        linkColor,
        dir,
        draw,
        link,
        move,
        die,
      };
    }

    function getPreviousDot(id: number, stepback: number): Dot | false {
      if (id === 0 || id - stepback < 0) return false;
      return dots[id - stepback] || false;
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      stars.forEach((star) => star.move());
      dots.forEach((dot) => dot.move());
      drawIfMouseMoving();
      requestAnimationFrame(animate);
    }

    function drawIfMouseMoving() {
      if (!mouseMoving) return;

      if (dots.length === 0) {
        const newDot = createDot(0, mouseX, mouseY);
        setDots([newDot]);
        newDot.draw();
        return;
      }

      const previousDot = getPreviousDot(dots.length, 1);
      if (!previousDot) return;

      const diffX = Math.abs(previousDot.x - mouseX);
      const diffY = Math.abs(previousDot.y - mouseY);

      if (diffX < dotsMinDist || diffY < dotsMinDist) return;

      const xVariation =
        (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
      const yVariation =
        (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
      const newDot = createDot(dots.length, mouseX + xVariation, mouseY + yVariation);
      setDots((prevDots) => [...prevDots, newDot]);
      newDot.draw();
      newDot.link();
    }

    function degToRad(deg: number): number {
      return deg * (Math.PI / 180);
    }

    function init() {
      setCanvasSize();
      if (!ctx) return;
      ctx.strokeStyle = 'white';
      ctx.shadowColor = 'white';
      const initialStars = Array.from({ length: initStarsPopulation }, (_, i) =>
        createStar(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT))
      );
      setStars(initialStars);
      ctx.shadowBlur = 0;
      animate();
    }

    init();

    const handleMouseMove = (e: MouseEvent) => {
      setMouseMoving(true);
      setMouseX(e.layerX);
      setMouseY(e.layerY);
      if (mouseMoveChecker) clearTimeout(mouseMoveChecker);
      setMouseMoveChecker(window.setTimeout(() => setMouseMoving(false), 100));
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dots, mouseMoveChecker, mouseMoving, mouseX, mouseY, stars]);

  return (
    <div className="interactive-stars-container">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};
