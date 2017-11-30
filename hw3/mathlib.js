module.exports = function (){
    return {
      add: function(num1, num2) { 
          let sum = num1+num2;
          return sum;
           // add code here 
      },
      multiply: function(num1, num2) {
        let sum = num1*num2;
        return sum;
           // add code here 
      },
      square: function(num) {
        var square = num*num;
        return square;
           // add code here 
      },
      random: function(num1, num2) {
          let random = Math.random(num1, num2);
          return random;
           // add code here
      }
    }
  };