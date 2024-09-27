import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import {App} from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', ()=> {
      return {
        data: [
          {id: 1, title: 'Transaction 1', amount: 100, category: 'groceries', date: '2022-10-10'},
          {id: 2, title: 'Transaction 2', amount: 200, category: 'entertainment', date: '2022-10-11'},
          {id: 3, title: 'Transaction 3', amount: 300, category: 'transportation', date: '2022-10-12'},
          {id: 4, title: 'Transaction 4', amount: 500, category: 'transportation', date: '2023-03-12'},
        ]
      }
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
