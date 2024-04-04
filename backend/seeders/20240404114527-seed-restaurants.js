'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const restaurants = [
      {
        name: 'Restaurant A',
        status: 'open',
        logo: 'https://example.com/logo1.png',
        location: 'City A',
        addressOne: '123 Main Street',
        addressTwo: 'Apt 101',
        KraPin: 123456,
        weekdayOpening: '09:00:00',
        weekdayClossing: '21:00:00',
        saturdayOpening: '10:00:00',
        saturdayClossing: '22:00:00',
        sundayOpening: '11:00:00',
        sundayClossing: '20:00:00',
        licence: 'ABC-123-XYZ',
        contact: '123-456-7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Restaurant B',
        status: 'closed',
        logo: 'https://example.com/logo2.png',
        location: 'City B',
        addressOne: '456 Oak Avenue',
        addressTwo: 'Suite 202',
        KraPin: 654321,
        weekdayOpening: '10:00:00',
        weekdayClossing: '20:00:00',
        saturdayOpening: '11:00:00',
        saturdayClossing: '21:00:00',
        sundayOpening: '12:00:00',
        sundayClossing: '19:00:00',
        licence: 'XYZ-456-ABC',
        contact: '987-654-3210',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more restaurants as needed
    ];

    await queryInterface.bulkInsert('Restuarants', restaurants, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Restuarants', null, {});
  }
};
