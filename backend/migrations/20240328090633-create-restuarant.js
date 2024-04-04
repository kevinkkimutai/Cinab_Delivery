'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restuarants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.TEXT
      },
      addressOne: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      addressTwo: {
        type: Sequelize.STRING
      },
      KraPin: {
        type: Sequelize.INTEGER
      },
      licence: {
        type: Sequelize.TEXT
      },
      contact: {
        type: Sequelize.STRING
      },
      weekdayOpening: {
        type: Sequelize.TIME
      },
      weekdayClossing: {
        type: Sequelize.TIME
      },
      saturdayOpening: {
        type: Sequelize.TIME
      },
      saturdayClossing: {
        type: Sequelize.TIME
      },
      sundayOpening: {
        type: Sequelize.TIME
      },
      sundayClossing: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restuarants');
  }
};