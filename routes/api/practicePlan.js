const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practicePlan');

// POST /api/users
router.post('/', practicePlanCtrl.create);

router.get('/', practicePlanCtrl.show);

module.exports = router;
