const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sequelizeApp = new Sequelize('arosaje_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const ArticleApp = sequelizeApp.define('ArticleApp', {
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

const sequelizeDashboard = new Sequelize('arosaje_dashboard', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const ArticleDashboard = sequelizeDashboard.define('ArticleDashboard', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
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
    await sequelizeApp.authenticate();
    console.log('Connection to the database arosaje_app has been established successfully.');
    await sequelizeApp.sync();
  } catch (error) {
    console.error('Unable to connect to the database arosaje_app:', error);
  }
})();

(async () => {
  try {
    await sequelizeApp.authenticate();
    console.log('Connection to the database arosaje_app has been established successfully.');
    await sequelizeApp.sync();
  } catch (error) {
    console.error('Unable to connect to the database arosaje_app:', error);
  }
})();

(async () => {
  try {
    await sequelizeDashboard.authenticate();
    console.log('Connection to the database arosaje_dashboard has been established successfully.');
    await sequelizeDashboard.sync();
  } catch (error) {
    console.error('Unable to connect to the database arosaje_dashboard:', error);
  }
})();

app.get('/articles', async (req, res) => {
  try {
    const articlesApp = await ArticleApp.findAll();
    const articlesDashboard = await ArticleDashboard.findAll();

    const allArticles = {
      arosaje_app: articlesApp,
      arosaje_dashboard: articlesDashboard,
    };

    res.json({ data: allArticles });
  } catch (err) {
    console.error('Error while fetching articles', err);
    res.status(500).json({ error: 'Error while fetching articles' });
  }
});


app.post('/articles', async (req, res) => {
  const { title, description, photo } = req.body;

  try {
    const newArticleApp = await ArticleApp.create({
      title,
      description,
      photo,
      createdAt: new Date(),
    });
    const newArticleDashboard = await ArticleDashboard.create({
      title,
      description,
      photo,
      createdAt: new Date(),
    });

    console.log('New article successfully added to arosaje_app with ID:', newArticleApp.id);
    console.log('New article successfully added to arosaje_dashboard with ID:', newArticleDashboard.id);

    res.status(201).json({ data: newArticleApp });
  } catch (err) {
    console.error('Error while adding item to arosaje_app and arosaje_dashboard', err);
    res.status(500).json({ error: 'Error while adding item to arosaje_app and arosaje_dashboard' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
