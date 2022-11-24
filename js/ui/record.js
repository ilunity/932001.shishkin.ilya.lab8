import { RecordInput } from './record-input.js';
import { RECORD_BUTTON_TYPES, RecordBtn } from './record-btn.js';

export class Record extends HTMLDivElement {
  #innerElements = {
    recordKeyInput: undefined,
    recordValueInput: undefined,
    topBtn: undefined,
    bottomBtn: undefined,
    crossBtn: undefined,
  };

  constructor( { handleTopBtn, handleBottomBtn } ) {
    super();

    this.className = 'record';
    this.#createContent({ handleTopBtn, handleBottomBtn });
  }

  #createContent( { handleTopBtn, handleBottomBtn } ) {
    this.#innerElements.recordKeyInput = new RecordInput();
    this.#innerElements.recordValueInput = new RecordInput();

    this.#innerElements.topBtn = new RecordBtn({ buttonType: RECORD_BUTTON_TYPES.ARROW_TOP });
    this.#innerElements.topBtn.addEventListener('click', () => {
      handleTopBtn(this);
    });

    this.#innerElements.bottomBtn = new RecordBtn({ buttonType: RECORD_BUTTON_TYPES.ARROW_BOTTOM });
    this.#innerElements.bottomBtn.addEventListener('click', () => {
      handleBottomBtn(this);
    });


    this.#innerElements.crossBtn = new RecordBtn({ buttonType: RECORD_BUTTON_TYPES.CROSS });
    this.#innerElements.crossBtn.addEventListener('click', () => {
      this.remove();
    });

    const innerElementsArray = Object.values(this.#innerElements);
    innerElementsArray.forEach(item => {
      this.append(item);
    });
  }

  getRecordObject() {
    const key = this.#innerElements.recordKeyInput.value;
    if (!key) return {};

    const value = this.#innerElements.recordValueInput.value;
    return { [key]: value };
  }
}

customElements.define('record-elem', Record, { extends: 'div' });
