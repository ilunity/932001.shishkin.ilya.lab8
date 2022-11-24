import { Record } from './record.js';

export class RecordsContainer extends HTMLDivElement {
  constructor() {
    super();

    this.className = 'records-controller__container';
  }

  addRecord() {
    const newRecord = new Record({
      handleTopBtn: this.shiftRecordTop,
      handleBottomBtn: this.shiftRecordBottom,
    });
    this.append(newRecord);
  }

  shiftRecordTop( node ) {
    const previousRecord = node.previousSibling;
    if (!previousRecord) return;

    node.after(previousRecord);
  }

  shiftRecordBottom( node ) {
    const nextRecord = node.nextSibling;
    if (!nextRecord) return;

    node.before(nextRecord);
  }

  getRecordsObject() {
    const records = this.children;

    const resultData = {};
    for (let record of records) {
      const recordData = record.getRecordObject();
      Object.assign(resultData, recordData);
    }

    return resultData;
  }
}

customElements.define('records-container', RecordsContainer, { extends: 'div' });
