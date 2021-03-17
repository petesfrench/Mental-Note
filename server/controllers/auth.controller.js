const config = require('../config/auth.config');
const db = require('../db');
const User = db.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });

    await user.save();
    res.send({ message: 'User was registered successfully!' });
  } catch (err) {
    console.error(`Error ${err}`); // eslint-disable-line no-console
    res.status(500).send({ message: err });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!'
      });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token
    });
  } catch (err) {
    console.error(`Error: ${err}`); //eslint-disable-line no-console
    res.status(500).send(err);
  }
};

module.exports = {
  register,
  login
};
