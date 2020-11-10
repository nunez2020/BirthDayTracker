if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./server/db/config');

const express = require('express');
const path = require('path');
const app = express();

const birthdayRouter = require('./server/routes/birthdays');

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
 if (process.env.NODE_ENV === 'production') {
  }
}

app.use(express.json());
app.use(birthdayRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});