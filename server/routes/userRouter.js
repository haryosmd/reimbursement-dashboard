const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/:id', userController.getUserDetail);
userRouter.put('/:id', userController.editUser);

module.exports = userRouter;
