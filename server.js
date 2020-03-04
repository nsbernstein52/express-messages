const express = require('express');
const app = express();
const bp = require('body-parser');
// const pool = require('pg')

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
// const pool = require('./db/pgconfig');
const pool = require('./db/pgconfig');

app.use(bp.json());

const port = 3000;

// addMessage
app.post('/api/messages', (req, res) => {
  pool.addMessage(req.body)
      .then(() => res.sendStatus(201));
});

// deleteMessage
app.delete('/api/messages/:msg_id', (req, res) => {
  pool.deleteMessage(req.params.msg_id)
      .then(() => res.sendStatus(201));
});

// getAllMessages
app.get('/api/messages', (req, res) => {
  pool.getAllMessages()
      .then(results => res.send(results));
    });

// getMessage
app.get('/api/messages/:msg_id', (req, res) => {
  pool.getMessage(req.params.msg_id)
      .then(results => res.send(results));
      console.log('gM: ', req.params, req.body)
});

// updateMessageMessage
app.get('/api/messages/:msg_id', (req, res) => {
  pool.putMessage(req.params.msg_message)
      .then(results => res.send(results));
});

// updateMessageName
app.put('/api/messages/:msg_is', (req, res) => {
  pool.putMessage(req.params.msg_name)
      .then(results => res.send(results));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

app.use((req, res, next) => {
  res.status(404).send('That route does not exist');
});

module.exports = app;
