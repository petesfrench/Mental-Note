const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./db');

const PORT = process.env.SEVRER_PORT || 5000;
const HOST = process.env.SERVER_HOST || 'localhost';

var corsOptions = {
  orgigin: `http://${HOST}:${PORT}`
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my app!' });
});

app.listen(PORT, () => {
  console.log(`Serving is running on ${HOST}:${PORT}`);
  db.mongoose
    .connect(db.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`Connection error ${err}`);
      process.exit();
    });
});
