export class TextBtn extends HTMLButtonElement {
  constructor( { title } ) {
    super();

    this.className = 'btn';
    this.textContent = title;
  }
}

customElements.define('text-button', TextBtn, { extends: 'button' });
