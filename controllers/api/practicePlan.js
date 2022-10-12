
  
function create(req, res) {
// Baby step...
    res.json({
        practicePlan: {
        name: req.body.name,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime
        }
    });
}


module.exports = {
    create
};