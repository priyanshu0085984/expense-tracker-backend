const express = require('express');
const router = express.Router();
const homeController = require('./../controller/homeController');

router.route('/')
        .get(homeController.collect)
        .post(homeController.Add)

router.route('/:id')
        .delete(homeController.del)

module.exports = router;