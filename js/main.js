import { RecordsController } from './ui/records-controller.js';

const start = () => {
  const root = document.getElementById('root');

  const recordsController = new RecordsController();
  root.append(recordsController);
};

start();
