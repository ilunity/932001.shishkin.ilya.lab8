import { RecordsContainer } from './records-container.js';
import { TextBtn } from './text-btn.js';

export class RecordsController extends HTMLDivElement {
  #innerElements = {
    container: undefined,
    addBtn: undefined,
    saveBtn: undefined,
    outputWindow: undefined,
  };

  constructor() {
    super();

    this.className = 'records-controller';
    this.#createContent();
  }

  #createContent() {
    this.#innerElements.container = new RecordsContainer();

    this.#innerElements.addBtn = new TextBtn({ title: 'Добавить элемент' });
    this.#innerElements.addBtn.addEventListener('click', () => {
      this.#innerElements.container.addRecord();
    });

    this.#innerElements.saveBtn = new TextBtn({ title: 'Сохранить' });
    this.#innerElements.saveBtn.addEventListener('click', () => this.#saveObjects());

    this.#innerElements.outputWindow = document.createElement('div');


    const innerElementsArray = Object.values(this.#innerElements);
    innerElementsArray.forEach(item => {
      this.append(item);
    });
  }

  #saveObjects() {
    const recordsObject = this.#innerElements.container.getRecordsObject();
    const recordsJSON = JSON.stringify(recordsObject);

    this.#innerElements.outputWindow.textContent = recordsJSON;
  }
}

customElements.define('records-controller', RecordsController, { extends: 'div' });
