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

const dashboardConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'arosaje_dashboard',
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error (arosaje_app) :', err);
  } else {
    console.log('Successful database connection to arosaje_app!');
  }
});

dashboardConnection.connect((err) => {
  if (err) {
    console.error('Database connection error (arosaje_dashboard) :', err);
  } else {
    console.log('Successful database connection to arosaje_dashboard!');
  }
});

app.post('/articles', (req, res) => {
  const { title, description, photo } = req.body;

  const newArticle = {
    title,
    description,
    photo,
    createdAt: new Date(),
  };

  connection.query('INSERT INTO articles SET ?', newArticle, (err, result) => {
    if (err) {
      console.error('Error while adding item to arosaje_app', err);
      res.status(500).json({ error: 'Error while adding item to arosaje_app' });
    } else {
      console.log('New article successfully added to arosaje_app with ID :', result.insertId);

    }
  });
});

app.post('/article', (req, res) => {
  const { title, description } = req.body;

  const newArticle = {
    title,
    description,
    createdAt: new Date(),
  };

  dashboardConnection.query('INSERT INTO articles SET ?', newArticle, (err, result) => {
    if (err) {
      console.error('Error while adding item to arosaje_dashboard', err);
      res.status(500).json({ error: 'Error while adding item to arosaje_dashboard' });
    } else {
      console.log('New article successfully added to arosaje_dashboard without photo and with ID :', result.insertId);
      res.status(200).json({ success: true });
    }
  });
});




 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
