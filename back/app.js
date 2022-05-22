const express = require('express');
const app = express();
const morgan = require('morgan')
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comments");
const postRoutes = require ("./routes/post");
const path = require('path');

var cors = require('cors');


app.use(morgan('dev'))

//middlware
app.use(cors())
app.use(express.json());

//les routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

module.exports = app;

