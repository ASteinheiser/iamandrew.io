import { Component } from 'react';

// import TypingText from '../TypingText';

import './interactive-stars.scss';

const HEIGHT_PERCENT = 0.8; // 80% height
const MAX_DISTANCE = 50; // default: 50
const BG_SPEED = 0; // default: 0
const DOT_SPEED = -10; // default: 0
const STAR_COUNT = 100; // default: 80
const DOT_DISTANCE = 2; // default: 2

export default class InteractiveStars extends Component {
  componentDidMount() {
    function Star(id: number, x: number, y: number) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 2) + 1;
      const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = 'rgba(255,255,255,' + alpha + ')';
    }

    Star.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Star.prototype.move = function () {
      this.y -= 0.15 + params.backgroundSpeed / 100;
      if (this.y <= -10) this.y = HEIGHT + 10;
      this.draw();
    };

    function Dot(id: number, x: number, y: number) {
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

    Dot.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.shadowColor = 'rgb(73,47,159)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Dot.prototype.link = function () {
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

    function getPreviousDot(id: number, stepback: number) {
      if (id === 0 || id - stepback < 0) return false;
      if (typeof dots[id - stepback] !== 'undefined') return dots[id - stepback];
      else return false; //getPreviousDot(id - stepback);
    }

    Dot.prototype.move = function () {
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

    Dot.prototype.die = function () {
      dots[this.id] = null;
      delete dots[this.id];
    };

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    let WIDTH,
      HEIGHT,
      mouseMoving = false,
      mouseMoveChecker,
      mouseX,
      mouseY,
      stars = [],
      initStarsPopulation = STAR_COUNT,
      dots = [],
      dotsMinDist = DOT_DISTANCE,
      params = {
        maxDistFromCursor: MAX_DISTANCE,
        dotsSpeed: DOT_SPEED,
        backgroundSpeed: BG_SPEED,
      };

    setCanvasSize();
    init();

    function setCanvasSize() {
      WIDTH = document.documentElement.clientWidth;
      HEIGHT = document.documentElement.clientHeight * HEIGHT_PERCENT;

      canvas.setAttribute('width', WIDTH);
      canvas.setAttribute('height', HEIGHT);
    }

    function init() {
      ctx.strokeStyle = 'white';
      ctx.shadowColor = 'white';
      for (let i = 0; i < initStarsPopulation; i++) {
        stars[i] = new Star(
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
        stars[i].move();
      }
      for (const j in dots) {
        dots[j].move();
      }
      drawIfMouseMoving();
      requestAnimationFrame(animate);
    }

    function mouseMove(e) {
      mouseMoving = true;
      mouseX = e.layerX;
      mouseY = e.layerY;
      clearInterval(mouseMoveChecker);
      mouseMoveChecker = setTimeout(function () {
        mouseMoving = false;
      }, 100);
    }

    this.mouseMove = mouseMove;

    this.refs.canvas.addEventListener('mousemove', this.mouseMove);

    function drawIfMouseMoving() {
      if (!mouseMoving) return;

      if (dots.length === 0) {
        dots[0] = new Dot(0, mouseX, mouseY);
        dots[0].draw();
        return;
      }

      const previousDot = getPreviousDot(dots.length, 1);
      const prevX = previousDot.x;
      const prevY = previousDot.y;

      const diffX = Math.abs(prevX - mouseX);
      const diffY = Math.abs(prevY - mouseY);

      if (diffX < dotsMinDist || diffY < dotsMinDist) return;

      let xVariation = Math.random() > 0.5 ? -1 : 1;
      xVariation = xVariation * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
      let yVariation = Math.random() > 0.5 ? -1 : 1;
      yVariation = yVariation * Math.floor(Math.random() * params.maxDistFromCursor) + 1;
      dots[dots.length] = new Dot(dots.length, mouseX + xVariation, mouseY + yVariation);
      dots[dots.length - 1].draw();
      dots[dots.length - 1].link();
    }

    function degToRad(deg) {
      return deg * (Math.PI / 180);
    }
  }

  componentWillUnmount() {
    this.refs.canvas.addEventListener('mousemove', this.mouseMove);
  }

  render() {
    return (
      <div id={this.props.name} className="interactive-stars-container">
        <canvas id="canvas" ref="canvas" />

        {/* <TypingText /> */}
      </div>
    );
  }
}
