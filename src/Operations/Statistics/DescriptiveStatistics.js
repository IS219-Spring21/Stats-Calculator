//const Calculation = require('./Models/Calculation');
const Calculator = require('./src/Calculation');

class StatisticsOperations extends Calculator {

    Mean(values) {
        let addition = this.Sum(values); //let the addition equals to the function for Sum
        let n = values.length; //n is the numbers of values to be calculated for the mean. It calculates how many numbers there are.
        return this.Quotient(addition,n); //takes the "n" number of values and add them together.
                                          // Then divide it using the Quotient function
    }

    MeanDeviation(values) {

    }

    MeanAbsoluteDeviation(values) {

    }

    Median(values) {
        let median = 0;
        let n = values.length;
        values.sort();
        if(n % 2 === 0)
            median = (values[n/2-1] + values[n/2])/2;
        else
            this.median = values[(n-1)/2];
        return median;
        /*
        if(values.length == 0)
            return 0;
        values.sort(function(a,b){
            return this.Quotient(a,b);
        });
         */
    }

    Mode(values) {
       let modes = [], count = [], max = 0;
       for(let i = 0; i < values.length; i++){
           let n = values[i];
           count[n] = (count[n] || 0) + 1;
           if(count[n] > 0)
               max = count[n];
       }
       for (let i in count){
           if(count.hasOwnProperty(i)){
               if(count[i] === max)
                   modes.push(Number(i));
           }
       }
       return modes;
    }

    Variance(values) {
        let square = this.Power(values); //takes the power of all the values
        let addition = this.Sum(square); //takes all the values from square and add them
        let n = values.length;
        return this.Quotient(addition,n);
    }

    StandardDeviation(a,b) {

    }

    Quartiles(a,b) {

    }

    Skewness(a,b) {

    }

    SampleCorrelation(a,b) {

    }

    PopulationCorrelation(a,b) {

    }

    ZScore(a,b) {

    }
}

module.exports = StatisticsOperations;