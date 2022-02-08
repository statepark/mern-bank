const mongoose = require('mongoose');

//this is our database abstraction layer
//we use mongoose which is a data modelling library for mongo.db and node.js
//the schema is where we set out what our data objects should look like
//we specify what data we can have, what it looks like ie. data types/number, string etc
//and any default values if no value if provided

//once the schema is created we can export this as a model
//to perform any CRUD operations we need to have a mongoose model

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a name'], //this is an error statement
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please add an email'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Please add a password'],
  },
  balance: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);

//further development
//make use of the unique property to validate

//look up uniqueVlaidator
