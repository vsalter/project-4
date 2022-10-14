const express = require('express');
const router = express.Router();
const practicePlanCtrl = require('../../controllers/api/practicePlan');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', ensureLoggedIn, practicePlanCtrl.create);

router.get('/', ensureLoggedIn, practicePlanCtrl.show);

router.put('/:id', ensureLoggedIn, practicePlanCtrl.editPlan);

router.delete('/:id', ensureLoggedIn, practicePlanCtrl.deletePlan);

module.exports = router;
