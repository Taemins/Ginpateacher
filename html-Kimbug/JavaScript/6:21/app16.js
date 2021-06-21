const calculator = {
    add: function(a, b){
        return a + b;
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
 console.log(addResult);