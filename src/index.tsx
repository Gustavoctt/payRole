import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models:{
    transaction: Model,
    users: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Compra de bebidas',
          amount: 100,
          user: 'Gustavo'
        },
        {
          id: 2,
          title: 'Ingressos',
          amount: 80,
          user: 'Pedro'
        }
      ],
      users: [
        {
          id: 1,
          name: 'Gustavo'
        },
        {
          id: 2,
          name: 'Marcos'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })

    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('users', data);
    })

    this.get('transactions', (schema) => {
      return schema.db.transactions;
    })

    this.get('users', (schema) => {
      return schema.db.users;
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
