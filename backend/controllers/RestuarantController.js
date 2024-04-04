const { Restuarant } = require("../models");

const RestuarantController = {
    // Get all restaurants
    getRestaurants: async (req, res) => {
        try {
            const restaurants = await Restuarant.findAll();
            if (restaurants.length === 0) {
                return res.status(404).json({ error: "No restaurants found" });
            }
            return res.status(200).json(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },

    // Get a single restaurant by ID
    getRestaurantById: async (req, res) => {
        const { id } = req.params;
        try {
            const restaurant = await Restuarant.findByPk(id);
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            return res.status(200).json({ data: restaurant });
        } catch (error) {
            console.error("Error fetching restaurant by ID:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    // Create a new restaurant
    createRestaurant: async (req, res) => {
        const { name, location, addressOne, status, logo, addressTwo, KraPin, licence, contact, weekdayOpening, weekdayClossing, saturdayOpening, saturdayClossing, sundayOpening, sundayClossing } = req.body;
        try {
            const newRestaurant = await Restuarant.create({
                name,
                location,
                addressOne,
                status,
                logo,
                addressTwo,
                KraPin,
                licence,
                contact,
                weekdayOpening,
                weekdayClossing,
                saturdayOpening,
                saturdayClossing,
                sundayOpening,
                sundayClossing,
            });
            return res.status(201).json(newRestaurant);
        } catch (error) {
            console.error("Error creating restaurant:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    // Update a restaurant by ID
    updateRestaurant: async (req, res) => {
        const { id } = req.params;
        const { name, location, addressOne, status, logo, addressTwo, KraPin, licence, contact, weekdayOpening, weekdayClossing, saturdayOpening, saturdayClossing, sundayOpening, sundayClossing } = req.body;
        try {
            const restaurant = await Restuarant.findByPk(id);
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            const updatedRestuarant = await restaurant.update({
                name,
                location,
                addressOne,
                status,
                logo,
                addressTwo,
                KraPin,
                licence,
                contact,
                weekdayOpening,
                weekdayClossing,
                saturdayOpening,
                saturdayClossing,
                sundayOpening,
                sundayClossing,
            });
            return res.status(200).json(updatedRestuarant);
        } catch (error) {
            console.error("Error updating restaurant:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },
    // Delete a restaurant by ID
    deleteRestaurant: async (req, res) => {
        const { id } = req.params;
        try {
            const restaurant = await Restuarant.findByPk(id);
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            await restaurant.destroy();
            return res.status(200).json({ message: "Restaurant deleted successfully" });
        } catch (error) {
            console.error("Error deleting restaurant:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};

module.exports = RestuarantController;
