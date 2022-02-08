const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

//connects to dotenv config file
dotenv.config({ path: './config/config.env' });

//connects to database by calling the DB funciton in the config file
connectDB();

//brings in users route file
const users = require('./routes/users');

//initializes app to use express
const app = express();

//bring in middleware
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//mounts the router
app.use('/api/v1/users', users);

//prepares for deployment  //looks
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('/*', (
    // needed to add / before * to fix in app routing issues
    req,
    res //attempt to fix navigation added / in front of *
  ) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

//a port varaible that looks for a port in the environment ie. in heroku || or locally uses 5000
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
