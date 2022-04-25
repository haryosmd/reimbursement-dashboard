const errorHandler = (err, req, res, next) => {
  console.log(err, '.......Error');
  let code = 500;
  let msg = 'Internal Server Error';
  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.message === 'INVALID_USER') {
    code = 401;
    msg = 'Invalid email or password';
  } else if (err.message === 'DATA_NOT_FOUND') {
    code = 404;
    msg = 'Data Not found';
  } else if (err.message === 'FORBIDDEN') {
    code = 403;
    msg = 'Forbidden to access source';
  } else if (err.message === 'PASSWORD_REQUIRED') {
    code = 400;
    msg = 'Must input password';
  } else if (err.message === 'EMAIL_REQUIRED') {
    code = 400;
    msg = 'Must input email';
  } else if (
    err.message === 'INVALID_TOKEN' ||
    err.message === 'jwt malformed' ||
    err.name === 'JsonWebTokenError'
  ) {
    code = 401;
    msg = 'You are not authorized';
  }
  res.status(code).json({ message: msg });
};

module.exports = errorHandler;
