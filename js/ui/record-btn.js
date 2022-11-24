export const RECORD_BUTTON_TYPES = {
  ARROW_TOP: 'arrow-top',
  ARROW_BOTTOM: 'arrow-bottom',
  CROSS: 'cross',
};

export class RecordBtn extends HTMLButtonElement {
  constructor( { buttonType } ) {
    super();

    this.className = 'btn record__btn';
    this.#defineType(buttonType);
  }

  #defineType( buttonType ) {
    this.classList.add(`record__btn_${buttonType}`);
  }

}

customElements.define('record-button', RecordBtn, { extends: 'button' });
