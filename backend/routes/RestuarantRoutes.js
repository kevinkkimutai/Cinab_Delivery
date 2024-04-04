const express = require('express');
const router = express.Router();
const RestuarantController = require('../controllers/RestuarantController');

// Get all restaurants
router.get('/restaurants', RestuarantController.getRestaurants);

// Get a single restaurant by ID
router.get('/restaurants/:id', RestuarantController.getRestaurantById);

// Create a new restaurant
router.post('/restaurants', RestuarantController.createRestaurant);

// Update a restaurant by ID
router.put('/restaurants/:id', RestuarantController.updateRestaurant);

// Delete a restaurant by ID
router.delete('/restaurants/:id', RestuarantController.deleteRestaurant);

module.exports = router;
