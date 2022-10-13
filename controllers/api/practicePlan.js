const Plan = require('../../models/practicePlan');
  
function create(req, res) {
// Baby step...
    console.log(req.body)
    console.log(req)
    // res.json({
    //     practicePlan: {
    //     name: req.body.name,
    //     date: req.body.date,
    //     startTime: req.body.startTime,
    //     endTime: req.body.endTime
    //     }
    // });
}


module.exports = {
    create
};