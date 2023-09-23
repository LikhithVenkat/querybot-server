const express = require('express')
const { AskQ } = require('../controllers/openaiController')
const router = express.Router()

router.post('/AnswerWithAPinchOfSalt', AskQ)

module.exports = router
