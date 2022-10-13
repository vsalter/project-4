const Plan = require('../../models/practicePlan');
  
async function create(req, res) {
// Baby step...
    console.log(req.body)
    console.log(req)
    req.body.user = req.user._id;
    console.log('req.body', req.body);
    const newPlan = new Plan(req.body);
    await newPlan.save();
    res.json(newPlan)
    // res.json({
    //     practicePlan: {
    //     name: req.body.name,
    //     date: req.body.date,
    //     startTime: req.body.startTime,
    //     endTime: req.body.endTime,
    //     }
    // });
}

async function show(req, res) {
    const getPlans = await Plan.find({});
    res.json(getPlans);
}

async function addToPlans(req, res) {
    const plan = await Plan.create(req.body);
    res.json(plan);
  }
  
module.exports = {
    create,
    addToPlans,
    show
};