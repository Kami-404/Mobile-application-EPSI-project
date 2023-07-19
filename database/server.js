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

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error while querying users:', err);
      res.status(500).json({ error: 'Error while querying users' });
    } else {
      if (results.length > 0) {
        res.status(200).json({ success: true, user: results[0] });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});

app.post('/signup', (req, res) => {
  const {
    username, password, firstName, lastName, age, phoneNumber, email, address, postalCode, city,
  } = req.body;

  const newUser = {
    username, password, firstName, lastName, age, phoneNumber, email, address, postalCode, city,
  };

  connection.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error while inserting new user:', err);
      res.status(500).json({ error: 'Error while inserting new user' });
    } else {
      console.log('New user successfully inserted with ID :', result.insertId);
      res.status(200).json({ success: true });
    }
  });
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

      dashboardConnection.query('INSERT INTO articles SET ?', newArticle, (err, result) => {
        if (err) {
          console.error('Error while adding item to arosaje_dashboard', err);
          res.status(500).json({ error: 'Error while adding item to arosaje_dashboard' });
        } else {
          console.log('New article successfully added to arosaje_dashboard with ID :', result.insertId);
          res.status(200).json({ success: true });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
