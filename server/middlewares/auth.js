const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

const Authentication = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw new Error('INVALID_TOKEN');
    const payload = verifyToken(access_token);
    const user = await User.findByPk(payload.id);
    if (!user) throw new Error('INVALID_USER');

    req.userLogin = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};

const Authorization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idUserLoign = req.userLogin.id;
    if (id !== idUserLoign) throw new Error('UNAUTHORIZED');

    const user = await User.findByPk(id);
    if (!user) throw new Error('INVALID_USER');

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { Authentication, Authorization };
