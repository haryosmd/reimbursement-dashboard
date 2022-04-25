'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reimbursement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reimbursement.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  }
  Reimbursement.init(
    {
      dateOfPurchase: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          notNull: {
            msg: 'Date of Purchase is required',
          },
          notEmpty: {
            msg: 'Date of Purchase is required',
          },
        },
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: {
            msg: 'Description is required',
          },
          notEmpty: {
            msg: 'Description is required',
          },
        },
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: 'Amount is required',
          },
          notEmpty: {
            msg: 'Amount is required',
          },
        },
      },
      receipt: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Receipt is required',
          },
          notEmpty: {
            msg: 'Receipt is required',
          },
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: 'Status is required',
          },
          notEmpty: {
            msg: 'Status is required',
          },
        },
      },
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: 'UserId is required',
          },
          notNull: {
            msg: 'UserId is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Reimbursement',
    }
  );
  return Reimbursement;
};
