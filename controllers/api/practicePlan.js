const Plan = require('../../models/practicePlan');
  
async function create(req, res) {
// Baby step...
    console.log(req.body)
    console.log(req)
    res.json({
        practicePlan: {
        name: req.body.name,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        }
    });
}

// Add the item to the cart
async function addToPlans(req, res) {
    const plan = await Plan.create(req.body);
    res.json(plan);
  }
  
module.exports = {
    create,
    addToPlans
};