const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');

const register = async (req, res, next) => {
  try {
    const { name, email, password, role, bankAccNum } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      role,
      bankAccNum,
    });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { id, password } = req.body;
    const user = await User.findByPk(id);

    if (!user) throw new Error('INVALID_USER');

    const isMatch = comparePassword(password, user.password);
    if (!isMatch) throw new Error('INVALID_USER');

    const payload = { id: user.id, email: user.email, role: user.role };
    const access_token = signToken(payload);

    res.status(200).json({
      message: 'Login Success',
      access_token: access_token,
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    next(err);
  }
};

const getUserDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!user) throw new Error('DATA_NOT_FOUND');

    res.status(200).json({
      message: 'User detail successfully fetched',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, role, bankAccNum } = req.body;
    const user = await User.findByPk(id);

    if (!user) throw new Error('DATA_NOT_FOUND');

    const updatedUser = await user.update({
      name,
      email,
      role,
      bankAccNum,
    });

    res.status(200).json({
      message: 'User successfully updated',
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  register,
  getUserDetail,
  editUser,
};
