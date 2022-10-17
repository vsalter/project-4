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

async function getPlan(req, res) {
    const plan = await Plan.findById(req.params.id);
    res.json(plan);
}

async function editPlan(req, res) {
    const plan = await Plan.findByIdAndUpdate({_id: req.params.id}, req.body);
    res.json(plan);
}

async function deletePlan(req, res) {
    const plan = await Plan.findByIdAndDelete({_id: req.params.id, user: req.user._id});
    res.json('DELETED');
}

async function completePractice(req, res){
    // const checkedGifts = await Recipient.findByIdAndUpdate(id);
    //how to find the recipient in the form (pass the user id)
    //this has the id- the entire recipient
    const checkOffPractice = await Plan.findById(req.params.id);
    checkOffPractice.complete = req.complete
    await checkOffPractice.save()
    console.log( `checkOffPractice.complete: ${checkOffPractice.complete}`)

    console.log( `checkOffPractice: ${req.complete}`)
    console.log(`req.id: ${req.params.id}`)
    //assign checkedGifts is true
    // req..body.___ is true

    res.json(checkOffPractice)
}
  
module.exports = {
    create,
    addToPlans,
    show,
    deletePlan,
    editPlan,
    getPlan,
    completePractice
};