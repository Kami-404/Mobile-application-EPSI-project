const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sequelize = new Sequelize('arosaje_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'articles',
  timestamps: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json({ data: articles });
  } catch (err) {
    console.error('Error while fetching articles', err);
    res.status(500).json({ error: 'Error while fetching articles' });
  }
});

app.post('/articles', async (req, res) => {
  const { title, description, photo } = req.body;

  try {
    const newArticle = await Article.create({
      title,
      description,
      photo,
      createdAt: new Date(),
    });

    console.log('New article successfully added to arosaje_app with ID:', newArticle.id);
    res.status(201).json({ data: newArticle });
  } catch (err) {
    console.error('Error while adding item to arosaje_app', err);
    res.status(500).json({ error: 'Error while adding item to arosaje_app' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
