
  function make(...arg){
    var result=0;
    var ar=[];
    ar=ar.concat(arg);
  
    return function f(...arg) {
      if (typeof arg[0]=="function"){
         result = ar.reduce(function(s, current) {
          return arg[0](s,current);
        }, 0);
  return result;
      }
      ar=ar.concat(arg);
      return f;
    }

    
    }
    module.exports = make;