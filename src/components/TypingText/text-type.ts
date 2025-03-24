const BASE_TYPE_SPEED = 200; // default: 200ms
const TYPE_SPEED_VARIANCE = 100; // default: 100ms
const WAIT_START = 500; // default: 500ms
const WAIT_END = 2000; // default: 2000ms
const DELETE_MULTIPLIER = 2; // default: 2x

interface TextTypeObject {
  element: HTMLElement;
  wordRotation: string[];
  loopNum: number;
  text: string;
  isDeleting: boolean;
  tick(): void;
}

export class TextType implements TextTypeObject {
  element: HTMLElement;
  wordRotation: string[];
  loopNum: number;
  text: string;
  isDeleting: boolean;

  constructor({
    element,
    wordRotation,
  }: Omit<TextTypeObject, 'loopNum' | 'speed' | 'text' | 'isDeleting' | 'tick'>) {
    this.element = element;
    this.wordRotation = wordRotation;
    this.loopNum = 0;
    this.text = '';
    this.isDeleting = false;
    this.tick();
  }

  tick(): void {
    const index = this.loopNum % this.wordRotation.length;
    const fullText = this.wordRotation[index];

    if (this.isDeleting) {
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      this.text = fullText.substring(0, this.text.length + 1);
    }

    this.element.innerHTML = this.text;

    let delta = BASE_TYPE_SPEED - Math.random() * TYPE_SPEED_VARIANCE;

    if (this.isDeleting) {
      delta /= DELETE_MULTIPLIER;
    }

    if (!this.isDeleting && this.text === fullText) {
      delta = WAIT_END;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = WAIT_START;
    }

    setTimeout(() => this.tick(), delta);
  }
}
