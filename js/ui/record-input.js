export class RecordInput extends HTMLInputElement {
  constructor() {
    super();

    this.className = 'record__input';
    this.value = '';
  }
}

customElements.define('record-input', RecordInput, { extends: 'input' });
