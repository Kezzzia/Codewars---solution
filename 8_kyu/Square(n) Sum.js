// Complete the square sum method so that it squares each number passed into it and then sums the results together.

// For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    var arr = [];
    for(var i = 0; i < numbers.length; i++){
      arr.push(numbers[i]*numbers[i]);
    } 
      var result = 0;
    for(j = 0; j < arr.length; i++){
      result = result + result[j];
    }
    return result;
  }
  // не проверял решение.