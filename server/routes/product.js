const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.json([
        {
            "name": "unicycles",
            "average_unit_price": 100,
            "unit_sold": 34,
            "revenue_total": 3400
        },
        {
            "name": "weather vanes",
            "average_unit_price": 15,
            "unit_sold": 67,
            "revenue_total": 1005
        },
        {
            "name": "catapults",
            "average_unit_price": 200,
            "unit_sold": 5,
            "revenue_total": 1000
        },
        {
            "name": "harpoons",
            "average_unit_price": 50,
            "unit_sold": 5,
            "revenue_total": 250
        },
        {
            "name": "wheelbarrows",
            "average_unit_price": 40,
            "unit_sold": 78,
            "revenue_total": 3120
        },
        {
            "name": "yo-yos",
            "average_unit_price": 13,
            "unit_sold": 3000,
            "revenue_total": 39000
        },
        {
            "name": "blowguns",
            "average_unit_price": 45,
            "unit_sold": 34,
            "revenue_total": 1530
        },
        {
            "name": "snow globes",
            "average_unit_price": 10,
            "unit_sold": 5,
            "revenue_total": 50
        },
        {
            "name": "didgeridoos",
            "average_unit_price": 30,
            "unit_sold": 300,
            "revenue_total": 9000
        },
        {
            "name": "lava lamps",
            "average_unit_price": 20,
            "unit_sold": 78,
            "revenue_total": 1560
        }
    ]);
});

module.exports = router;
