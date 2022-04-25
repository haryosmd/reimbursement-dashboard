const reimbRouter = require('express').Router();
const reimbController = require('../controllers/reimbursementController');
const { Authentication } = require('../middlewares/auth');
const receiptUpload = require('../middlewares/multer');

reimbRouter.post(
  '/',
  Authentication,
  receiptUpload,
  reimbController.createReimb
);
reimbRouter.get('/', reimbController.getReimb);
reimbRouter.get('/:id', reimbController.getReimbDetail);
reimbRouter.put('/:id', reimbController.editReimb);
reimbRouter.patch('/:id', reimbController.editReimbStatus);
reimbRouter.delete('/:id', reimbController.deleteReimb);

module.exports = reimbRouter;
