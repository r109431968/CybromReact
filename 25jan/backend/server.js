const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/students', studentRoutes);

mongoose
  .connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
