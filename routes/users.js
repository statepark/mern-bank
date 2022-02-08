const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  deleteUser,
} = require('../controllers/userController');

//express acts as a layer of abstraction over node
//it routes http requests
//connects the methods that we are bringing in from the controller folder
//to our routes

//slash represents '/api/v1/users'
//this is specified by app.use('/api/v1/users' in server.js)
router.route('/').get(getUsers).post(addUser);

router.route('/:id').delete(deleteUser);

module.exports = router;
