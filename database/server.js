const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'arosaje_app',
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error :', err);
  } else {
    console.log('Successful database connection!');
  }
});

app.post('/articles', (req, res) => {
  const { title, description, photo } = req.body;

  const sql = 'INSERT INTO articles (title, description, photo, createdAt) VALUES (?, ?, ?, ?)';
  const values = [title, description, photo, new Date()];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error while adding item', err);
      res.status(500).json({ error: 'Error while adding item' });
    } else {
      console.log('New article successfully added!');
      res.status(200).json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
