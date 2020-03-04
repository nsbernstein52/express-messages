const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages',
  user: 'postgres',
  password: 'Psa2020s'
});

// INSERT INTO table_name (column_names ...) VALUES ('val1', val2', ...) 
const addMessage = (messages) => {
  let values = [messages.msg_name, messages.msg_message]
  return pool.query('INSERT INTO messages (msg_name, msg_message) VALUES($1, $2)', values)
      .then(() => true);
};

// DELETE FROM table_name WHERE condition; ???
const deleteMessage = (msg_id) => {
  let value = [msg_id]
  return pool.query('DELETE FROM messages WHERE msg_id = VALUE ($1)', value)
      .then(() => true)
};

// SELCT * FROM table_name
const getAllMessages = () => {
  return pool.query('SELECT * FROM messages')
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
};

// SELCT * FROM table_name WHERE value = column
const getMessage = (msg_id) => {
  let values = [msg_id]
  return pool.query(`SELECT * FROM messages WHERE $1 = msg_id`, values)
    .then(res => res.rows)
};

// UPDATE table SET column = <newVal> WHERE condition; ???
const updateMessageMessage = (msg_id, newMessage) => {
  let values = [msg_id, newMessage]
  return pool.query('UPDATE messages SET msg_message = VALUES($2) WHERE msg_id = VALUES ($1)', values)
      .then(() => true)
};

// UPDATE table SET column = <newVal> WHERE condition; ???
const updateMessageName = (msg_id,  newName) => {
  let values = [msg_id, newName]
  return pool.query('UPDATE messages SET msg_name = VALUES($2) WHERE msg_id = VALUES ($1)', values)
      .then(() => true)
};

module.exports = {
  pool,
  addMessage,
  deleteMessage,
  getAllMessages,
  getMessage,
  updateMessageMessage,
  updateMessageName
}

// module.exports = pool;