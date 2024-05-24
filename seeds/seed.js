/* require('dotenv').config({ path: '../.env' });
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  console.log("Database Name:", process.env.DB_NAME);
  console.log("Database User:", process.env.DB_USER);
  console.log("Database Password:", process.env.DB_PASSWORD);
  console.log("Database Host:", process.env.DB_HOST);
  console.log("Database Port:", process.env.DB_PORT);

  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: Math.floor(Math.random() * postData.length) + 1,
    });
  }

  process.exit(0);
};

seedDatabase();
 */