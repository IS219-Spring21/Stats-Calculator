const Math = require("mathjs");

/**
 * @return {number}
 */
function StandardDeviation(values) {
    return Math.sqrt(Math.variance(values));
}
module.exports = StandardDeviation;
