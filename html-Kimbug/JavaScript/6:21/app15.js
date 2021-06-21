const calculator = {
    add: function(a, b){
        return a +b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a ,b){
        return a/b;
    },
    powerOff: function(a, b){
        return a**b;
    },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult,10);
const multiplyResult = calculator.multiply(minusResult, 10);
const divideResult = calculator.divide(multiplyResult, addResult);
const powerOffResult = calculator.powerOff(divideResult, minusResult);

console.log(addResult);