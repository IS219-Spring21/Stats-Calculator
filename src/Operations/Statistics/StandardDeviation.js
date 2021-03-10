const Math = require('mathjs');
//const Root = require("../Root");

/**
 * @return {number}
 */
function StandardDeviation(values) {
    return Math.sqrt(Math.variance(values));
}
module.exports = StandardDeviation;