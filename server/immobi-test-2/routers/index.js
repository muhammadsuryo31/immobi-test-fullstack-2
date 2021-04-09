const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/expenses', controller.getExpense)

module.exports = router