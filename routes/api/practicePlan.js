const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practicePlan');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', ensureLoggedIn, practicePlanCtrl.create);

router.get('/', ensureLoggedIn, practicePlanCtrl.show);

router.get('/:id', ensureLoggedIn, practicePlanCtrl.editPlan);

router.get('/:id', ensureLoggedIn, practicePlanCtrl.deletePlan);

module.exports = router;
