function sumOfOther (arr){
    var result = arr.reduce(function(sum, current) {
        return sum + current;
      }, 0);
      var res = arr.map(function(number) {
        return result- number;
      });
      return res;
  }

  module.exports = sumOfOther;