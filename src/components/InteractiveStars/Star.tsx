interface StarObject {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  backgroundSpeed: number;
  canvas: CanvasRenderingContext2D;
  canvasHeight: number;
  draw(): void;
  move(): void;
}

export class Star implements StarObject {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  backgroundSpeed: number;
  canvas: CanvasRenderingContext2D;
  canvasHeight: number;

  constructor({
    id,
    x,
    y,
    canvas,
    canvasHeight,
    backgroundSpeed,
  }: Omit<StarObject, 'r' | 'color' | 'draw' | 'move'>) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.backgroundSpeed = backgroundSpeed;
    this.r = Math.floor(Math.random() * 2) + 1;
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = 'rgba(255,255,255,' + alpha + ')';
    this.canvas = canvas;
    this.canvasHeight = canvasHeight;
  }

  draw(): void {
    this.canvas.fillStyle = this.color;
    this.canvas.shadowBlur = this.r * 2;
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.canvas.closePath();
    this.canvas.fill();
  }

  move(): void {
    this.y -= 0.15 + this.backgroundSpeed / 100;
    if (this.y <= -10) this.y = this.canvasHeight + 10;
    this.draw();
  }
}
