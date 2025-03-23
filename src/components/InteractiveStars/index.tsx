import { useEffect, useRef } from 'react';

import './interactive-stars.scss';

const HEIGHT_PERCENT = 0.8; // 80% height
const MAX_DISTANCE = 50; // default: 50
const BG_SPEED = 0; // default: 0
const DOT_SPEED = -10; // default: 0
const STAR_COUNT = 100; // default: 80
const DOT_DISTANCE = 2; // default: 2

// Constructor interfaces
interface StarConstructor {
  new(id: number, x: number, y: number): StarObject;
  prototype: StarObject;
}

interface DotConstructor {
  new(id: number, x: number, y: number): DotObject;
  prototype: DotObject;
}

export function InteractiveStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    function Star(this: StarObject, id: number, x: number, y: number) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 2) + 1;
      const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = 'rgba(255,255,255,' + alpha + ')';
    }

    Star.prototype.draw = function (this: StarObject) {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Star.prototype.move = function (this: StarObject) {
      this.y -= 0.15 + params.backgroundSpeed / 100;
      if (this.y <= -10) this.y = HEIGHT + 10;
      this.draw();
    };

    function Dot(this: DotObject, id: number, x: number, y: number) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 5) + 3;
      this.maxLinks = 2;
      this.speed = 0.5;
      this.a = 0.5;
      this.aReduction = 0.005;
      this.color = 'rgba(73,47,159,1)';
      this.linkColor = 'rgba(124,124,124,' + this.a + ')';

      this.dir = Math.floor(Math.random() * 140) + 200;
    }

    Dot.prototype.draw = function (this: DotObject) {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.shadowColor = 'rgb(73,47,159)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Dot.prototype.link = function (this: DotObject) {
      if (this.id === 0) return;
      const previousDot1 = getPreviousDot(this.id, 1);
      const previousDot2 = getPreviousDot(this.id, 2);
      const previousDot3 = getPreviousDot(this.id, 3);
      if (!previousDot1) return;
      ctx.strokeStyle = this.linkColor;
      ctx.lineWidth = 2;
      ctx.moveTo(previousDot1.x, previousDot1.y);
      ctx.beginPath();
      ctx.lineTo(this.x, this.y);
      if (previousDot2 !== false) ctx.lineTo(previousDot2.x, previousDot2.y);
      if (previousDot3 !== false) ctx.lineTo(previousDot3.x, previousDot3.y);
      ctx.stroke();
      ctx.closePath();
    };

    function getPreviousDot(id: number, stepback: number): DotObject | false {
      if (id === 0 || id - stepback < 0) return false;
      const dot = dots[id - stepback];
      if (dot !== null && dot !== undefined) return dot;
      return false;
    }

    Dot.prototype.move = function (this: DotObject) {
      this.a -= this.aReduction;
      if (this.a <= 0) {
        this.die();
        return;
      }
      this.color = 'rgba(73,47,159,1)';
      this.linkColor = 'rgba(124,124,124,' + this.a + ')';
      this.x = this.x + Math.cos(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);
      this.y = this.y + Math.sin(degToRad(this.dir)) * (this.speed + params.dotsSpeed / 100);

      this.draw();
      this.link();
    };

    Dot.prototype.die = function (this: DotObject) {
      dots[this.id] = null;
      delete dots[this.id];
    };

    if (canvasRef.current === null) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let WIDTH: number;
    let HEIGHT: number;
    let mouseMoving = false;
    let mouseMoveChecker: ReturnType<typeof setTimeout>;
    let mouseX: number;
    let mouseY: number;
    const stars: StarObject[] = [];
    const initStarsPopulation = STAR_COUNT;
    const dots: (DotObject | null)[] = [];
    const dotsMinDist = DOT_DISTANCE;
    const params = {
      maxDistFromCursor: MAX_DISTANCE,
      dotsSpeed: DOT_SPEED,
      backgroundSpeed: BG_SPEED,
    };

    // Cast constructors to their appropriate types
    const StarConstructor = Star as unknown as StarConstructor;
    const DotConstructor = Dot as unknown as DotConstructor;

    setCanvasSize();
    init();

    function setCanvasSize() {
      WIDTH = document.documentElement.clientWidth;
      HEIGHT = document.documentElement.clientHeight * HEIGHT_PERCENT;

      canvas.setAttribute('width', WIDTH.toString());
      canvas.setAttribute('height', HEIGHT.toString());
    }

    function init() {
      ctx.strokeStyle = 'white';
      ctx.shadowColor = 'white';
      for (let i = 0; i < initStarsPopulation; i++) {
        stars[i] = new StarConstructor(
          i,
          Math.floor(Math.random() * WIDTH),
          Math.floor(Math.random() * HEIGHT)
        );
      }
      ctx.shadowBlur = 0;
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (const i in stars) {
        if (stars[i]) stars[i].move();
      }
      for (const j in dots) {
        if (dots[j]) dots[j].move();
      }
      drawIfMouseMoving();
      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseMoving = true;
      mouseX = e.layerX;
      mouseY = e.layerY;
      clearInterval(mouseMoveChecker);
      mouseMoveChecker = setTimeout(function () {
        mouseMoving = false;
      }, 100);
    };

    function drawIfMouseMoving() {
      if (!mouseMoving) return;

      if (dots.length === 0) {
        dots[0] = new DotConstructor(0, mouseX, mouseY);
        dots[0].draw();
        return;
      }

      const previousDot = getPreviousDot(dots.length, 1);
      if (!previousDot) return;

      const prevX = previousDot.x;
      const prevY = previousDot.y;

      const diffX = Math.abs(prevX - mouseX);
      const diffY = Math.abs(prevY - mouseY);

      if (diffX < dotsMinDist || diffY < dotsMinDist) return;

      let xVariation = Math.random() > 0.5 ? -1 : 1;
      xVariation = xVariation * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
      let yVariation = Math.random() > 0.5 ? -1 : 1;
      yVariation = yVariation * Math.floor(Math.random() * params.maxDistFromCursor) + 1;

      const newDotIndex = dots.length;
      dots[newDotIndex] = new DotConstructor(newDotIndex, mouseX + xVariation, mouseY + yVariation);

      const latestDot = dots[dots.length - 1];
      if (latestDot) {
        latestDot.draw();
        latestDot.link();
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="interactive-stars-container">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}

interface StarObject {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  draw: () => void;
  move: () => void;
}

interface DotObject {
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

const degToRad = (deg: number) => {
  return deg * (Math.PI / 180);
};
