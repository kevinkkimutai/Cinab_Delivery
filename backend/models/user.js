const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {

    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING,
      },
      passport: {
        type: DataTypes.STRING
      },
      DrivingLicence: {
        type: DataTypes.STRING
      },

      otp: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Invalid email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [4, 100],
            msg: "Password must be at least 4 characters long",
          },
        },
      },
      contact: {
        type: DataTypes.STRING
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      refreshToken: {
        type: DataTypes.TEXT,
      },
      isVerified: {
        type: DataTypes.BOOLEAN
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
