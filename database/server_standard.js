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

const User = sequelizeApp.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
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
    console.log('Connection to the database arosaje_app successfully !');
    await sequelizeApp.sync();
  } catch (error) {
    console.error('Unable to connect to the database arosaje_app:', error);
  }
})();

(async () => {
  try {
    await sequelizeApp.authenticate();
    console.log('Connection to the database arosaje_app successfully !');
    await sequelizeApp.sync();
  } catch (error) {
    console.error('Unable to connect to the database arosaje_app:', error);
  }
})();

(async () => {
  try {
    await sequelizeDashboard.authenticate();
    console.log('Connection to the database arosaje_dashboard successfully !');
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

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users });
  } catch (err) {
    console.error('Error while fetching users', err);
    res.status(500).json({ error: 'Error while fetching users' });
  }
});

app.post('/users', async (req, res) => {
  const { username, password, firstName, lastName, age, phoneNumber, email, address, postalCode, city } = req.body;

  try {
    const newUser = await User.create({
      username,
      password,
      firstName,
      lastName,
      age,
      phoneNumber,
      email,
      address,
      postalCode,
      city,
    });

    console.log('New user successfully added to arosaje_app with ID:', newUser.id);

    res.status(201).json({ data: newUser });
  } catch (err) {
    console.error('Error while adding user to arosaje_app', err);
    res.status(500).json({ error: 'Error while adding user to arosaje_app' });
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
