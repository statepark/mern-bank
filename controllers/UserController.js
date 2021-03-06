const User = require('../models/userSchema');

//the controller folder is where we have built the methods that
//use the model to interact with our database

//@desc Get all users
//@route GET /api/v1/users
//access Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find(); //uses mongoose find method to read the data
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
//@desc   Add user
//@route  POST /api/v1/users
//@access Public
exports.addUser = async (req, res, next) => {
  try {
    const { name, email, password, balance } = req.body;

    const user = await User.create(req.body); //uses mongoose create method to add data

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

//@desc   Delete transaction
//@route  DELETE /api/v1/users/:id
//@access Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id); //uses mongoose method findById to find specific data

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await user.remove(); //uses mongoose remove method to delete data
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
