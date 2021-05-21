let n;

function convertFahrToCelsius(n) {

    if (typeof(n) === "number") {
       return ((n-32) * 5 / 9).toFixed(4);

   } else {
    console.log(`${n} is not a valid number but a/an ${typeof(n)}`)
} 
} 



function checkYuGiOh(n) {
    try {
      let arr = [...new Array(Number(n))].map((_value, index) => {
        index++;
        
        const [_2, _3, _5] = ["yu", "gi", "oh"];
        
        if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
          return _2 + "-" + _3 + "-" + _5;
        
        else if (index % 2 === 0 && index % 3 == 0) 
        return _2 + "-" + _3;

        else if (index % 2 === 0 && index % 5 === 0) 
        return _2 + "-" + _5;
        
        else if (index % 3 === 0 && index % 5 === 0) 
        return _3 + "-" + _5;
        
        else if (index % 2 === 0) return _2;
        else if (index % 3 === 0) return _3;
        else if (index % 5 === 0) return _5;
        
        return index;
      });
      return arr;
    } catch (err) {
      return `'${n}' is an invalid parameter`;
    }
  }