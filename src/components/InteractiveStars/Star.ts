interface StarObject {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  backgroundSpeed: number;
  canvasContext: CanvasRenderingContext2D;
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
  canvasContext: CanvasRenderingContext2D;
  canvasHeight: number;

  constructor({
    id,
    x,
    y,
    canvasContext,
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
    this.canvasContext = canvasContext;
    this.canvasHeight = canvasHeight;
  }

  draw(): void {
    this.canvasContext.fillStyle = this.color;
    this.canvasContext.shadowBlur = this.r * 2;
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.canvasContext.closePath();
    this.canvasContext.fill();
  }

  move(): void {
    this.y -= 0.15 + this.backgroundSpeed / 100;
    if (this.y <= -10) this.y = this.canvasHeight + 10;
    this.draw();
  }
}
