const TYPE_SPEED = 2000;

const TextType = function (el: HTMLElement, toRotate: string[]) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = TYPE_SPEED;
  this.text = '';
  this.tick();
  this.isDeleting = false;
};

TextType.prototype.tick = function () {
  const i = this.loopNum % this.toRotate.length;
  const fullText = this.toRotate[i];

  if (this.isDeleting) {
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    this.text = fullText.substring(0, this.text.length + 1);
  }

  this.el.innerHTML = this.text;

  const self = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.text === fullText) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    self.tick();
  }, delta);
};

export default TextType;
