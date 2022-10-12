const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practicePlan');

// POST /api/users
router.post('/', practicePlanCtrl.create);

module.exports = router;
