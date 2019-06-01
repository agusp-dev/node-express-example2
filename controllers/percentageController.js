function calculatePercentage(req, res) {
    var value = req.query.value;
    var percentage = req.query.percentage;

    if (value == undefined || value < 1 || 
        percentage == undefined || percentage < 1 || percentage > 100) {
            res.send('Error: Params are incorrect!');
            return;
    }

    res.send('The ' + percentage + '% of ' + value + ' is ' + calculate(value, percentage));
}

function calculate(v, p) {
    return (p * v / 100);
}

module.exports = {
    calculatePercentage: calculatePercentage
};