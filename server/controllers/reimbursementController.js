const { Reimbursement } = require('../models');

const fs = require('fs');

const createReimb = async (req, res, next) => {
  try {
    const { dateOfPurchase, description, amount, status, UserId, receipt } =
      req.body;
    const { id } = req.userLogin;

    console.log(
      '🚀 ~ file: reimbursementController.js ~ line 12 ~ createReimb ~ req.body',
      req.body
    );
    console.log(
      '🚀 ~ file: reimbursementController.js ~ line 15 ~ createReimb ~ req.file',
      req.file
    );

    if (!req.file) return res.send('Please upload a file');

    let fileType = req.file.mimetype.split('/');
    let newFIleName = req.file.filename + '.' + fileType[1];
    console.log(
      '🚀 ~ file: reimbursementController.js ~ line 16 ~ createReimb ~ newFIleName',
      newFIleName
    );

    fs.rename(
      `./uploads/${req.file.filename}`,
      `./uploads/${newFIleName}`,
      function () {
        console.log('File has been renamed');
      }
    );

    const reimbursement = await Reimbursement.create({
      dateOfPurchase,
      description,
      amount,
      receipt: newFIleName,
      status: 'on progress',
      UserId: id,
    });

    res.status(201).json({
      message: 'Reimbursement created successfully',
      reimbursement,
    });
  } catch (err) {
    next(err);
  }
};

const getReimb = async (req, res, next) => {
  try {
    const reimbursementList = await Reimbursement.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!reimbursementList) throw new Error('DATA_NOT_FOUND');

    res.status(200).json({
      message: 'Reimbursement successfully fetched',
      data: reimbursementList,
    });
  } catch (err) {
    next(err);
  }
};

const getReimbDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reimbursement = await Reimbursement.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!reimbursement) throw new Error('DATA_NOT_FOUND');

    res.status(200).json({
      message: 'Reimbursement detail successfully fetched',
      data: reimbursement,
    });
  } catch (err) {
    next(err);
  }
};

const editReimb = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dateOfPurchase, description, amount, receipt } = req.body;

    const findReimb = await Reimbursement.findByPk(id);

    if (!findReimb) throw new Error('DATA_NOT_FOUND');

    const reimbursementUpdate = await Reimbursement.update(
      {
        dateOfPurchase,
        description,
        amount,
        receipt,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    res.status(202).json({
      message: 'Reimbursement has been edited',
      data: reimbursementUpdate,
    });
  } catch (err) {
    next(err);
  }
};

const editReimbStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const findReimb = await Reimbursement.findByPk(id);

    if (!findReimb) throw new Error('DATA_NOT_FOUND');

    const reimbursementPatch = await Reimbursement.update(
      {
        status,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    res.status(202).json({
      message: 'Reimbursement status has been edited',
      data: reimbursementPatch,
    });
  } catch (err) {
    next(err);
  }
};

const deleteReimb = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findReimb = await Reimbursement.findByPk(id);

    if (!findReimb) throw new Error('DATA_NOT_FOUND');

    const reimbursementDelete = await Reimbursement.destroy({
      where: {
        id,
      },
    });

    res.status(202).json({
      message: 'Reimbursement has been deleted',
      data: reimbursementDelete,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createReimb,
  getReimb,
  getReimbDetail,
  editReimb,
  editReimbStatus,
  deleteReimb,
};
