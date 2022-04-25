const router = require('express').Router();
const userRouter = require('./userRouter');
const reimbRouter = require('./reimbursementRouter');

router.use('/users', userRouter);
router.use('/reimbursements', reimbRouter);

module.exports = router;
