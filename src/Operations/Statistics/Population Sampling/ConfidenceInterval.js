function ZScore(percentile){ //TEMPORARY z-score function until group's is done! (AKA Untested!!)
    if (percentile < 0.5) return -ZScore(1-percentile);

    if (percentile > 0.92) {
        if (percentile === 1) return Infinity;
        let r = Math.sqrt(-Math.log(1-percentile));
        return (((2.3212128*r+4.8501413)*r-2.2979648)*r-2.7871893)/
            ((1.6370678*r+3.5438892)*r+1);
    }
    percentile -= 0.5;
    let r = percentile*percentile;
    return percentile*(((-25.4410605*r+41.3911977)*r-18.6150006)*r+2.5066282)/
        ((((3.1308291*r-21.0622410)*r+23.0833674)*r-8.4735109)*r+1);
}

function Mean(elements){ //TEMPORARY mean function until group's is done! (AKA Untested!!)
    let sum = 0;
    elements.forEach(function (number){
        sum += number;
    })
    return sum/elements.length;
}

function StandardDev(elements){
    let mean = Mean(elements);
    let squaredDiffs = [];
    elements.forEach(function (number){
        squaredDiffs.push(Math.pow(number-mean,2));
    });
    let meanSquared = Mean(squaredDiffs);
    return Math.sqrt(meanSquared);
}

module.exports = function ConfidenceInterval(elements, confidencePercentile){
    let zScore = ZScore(confidencePercentile);
    let n = elements.length;
    let s = StandardDev(elements);
    let mean = Mean(elements);

    let lowerBound = mean - (zScore * s / Math.sqrt(n));
    let upperBound = mean + (zScore * s / Math.sqrt(n));

    return [lowerBound, upperBound];
};