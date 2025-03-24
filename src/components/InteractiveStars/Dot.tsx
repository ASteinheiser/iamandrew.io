import { degreesToRadians } from './degreesToRadians';

const BASE_SPEED = 0.5;

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
  canvasContext: CanvasRenderingContext2D;
  canvasHeight: number;
  getPreviousDot: (id: number, stepback: number) => Dot | false;
  die(): void;
  draw(): void;
  link(): void;
  move(): void;
}

type DotConstructor = Omit<
  DotObject,
  | 'r'
  | 'maxLinks'
  | 'baseSpeed'
  | 'a'
  | 'aReduction'
  | 'linkColor'
  | 'dir'
  | 'draw'
  | 'link'
  | 'move'
>;

export class Dot implements DotObject {
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
  canvasContext: CanvasRenderingContext2D;
  canvasHeight: number;
  getPreviousDot: (id: number, stepback: number) => Dot | false;
  die: () => void;

  constructor({
    id,
    x,
    y,
    color,
    speed,
    canvasContext,
    canvasHeight,
    getPreviousDot,
    die,
  }: DotConstructor) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 5) + 3;
    this.maxLinks = 2;
    this.speed = BASE_SPEED + speed;
    this.a = 0.5;
    this.aReduction = 0.005;
    this.color = color;
    this.linkColor = 'rgba(124,124,124,' + this.a + ')';
    this.dir = Math.floor(Math.random() * 140) + 200;
    this.canvasContext = canvasContext;
    this.canvasHeight = canvasHeight;
    this.getPreviousDot = getPreviousDot;
    this.die = die;
  }

  draw(): void {
    this.canvasContext.fillStyle = this.color;
    this.canvasContext.shadowBlur = this.r * 2;
    this.canvasContext.shadowColor = 'rgb(73,47,159)';
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.canvasContext.closePath();
    this.canvasContext.fill();
  }

  link(): void {
    if (this.id === 0) return;
    const previousDot1 = this.getPreviousDot(this.id, 1);
    const previousDot2 = this.getPreviousDot(this.id, 2);
    const previousDot3 = this.getPreviousDot(this.id, 3);
    if (!previousDot1) return;
    this.canvasContext.strokeStyle = this.linkColor;
    this.canvasContext.lineWidth = 2;
    this.canvasContext.moveTo(previousDot1.x, previousDot1.y);
    this.canvasContext.beginPath();
    this.canvasContext.lineTo(this.x, this.y);
    if (previousDot2 !== false) this.canvasContext.lineTo(previousDot2.x, previousDot2.y);
    if (previousDot3 !== false) this.canvasContext.lineTo(previousDot3.x, previousDot3.y);
    this.canvasContext.stroke();
    this.canvasContext.closePath();
  }

  move(): void {
    this.a -= this.aReduction;
    if (this.a <= 0) {
      this.die();
      return;
    }
    this.linkColor = 'rgba(124,124,124,' + this.a + ')';
    this.x = this.x + Math.cos(degreesToRadians(this.dir)) * (this.speed / 100);
    this.y = this.y + Math.sin(degreesToRadians(this.dir)) * (this.speed / 100);

    this.draw();
    this.link();
  }
}
