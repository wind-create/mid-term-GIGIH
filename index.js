require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const videoRoutes = require('./routes/videos');

const mongoString = process.env.DATABASE_URL;
const port = 3000;

// Connect to MongoDB
mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json());

// Routes user
app.use('/users', userRoutes);
// Routes product
app.use('/products', productRoutes);
// Routes video
app.use('/videos', videoRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});