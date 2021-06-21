const calculator = {
    add: function(a, b){
        console.log(a +b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    multiply: function(a,b){
        console.log(a*b);
    },
    divide: function(a ,b){
        console.log(a/b);
    },
    powerOff: function(a, b){
        console.log(a**b);
    },
};

calculator.add(3, 5);
calculator.minus(6, 1);
calculator.multiply(7, 8);
calculator.divide(9, 3);
calculator.powerOff(3, 3);