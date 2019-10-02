// Решение 1


// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }


//Решение 2
console.log(rowSumOddNumbers(3));

function rowSumOddNumbers(n) {
  if(n==1)
    return 1;
    
  var prevRowSum = 0;
  var numRow = [];
  var oddNumbers = [];
  var sumResult = 0;
  
  // Get all odd numbers up to current row
  for(x=1;x<=n;x++)
  {
    if(x==1)
    {
      prevRowSum = 1;
      numRow.push(prevRowSum);
    } else {
      numRow.push(prevRowSum + x);
      prevRowSum = prevRowSum + x;
    }
  }
  
  // save all odd numbers up to Row
  for (var x=1; x < numRow[numRow.length-1]*2; x+=2)
    oddNumbers.push(x);
  
  // Reverse the Array
  oddNumbers.reverse();
  
  // Add all Odd numbers on that Row
  for(var p=0;p<n;p++)
    sumResult += oddNumbers[p];
  
  return sumResult;
}

//Решение 3
 var oddNumbers = [];
  
  // Print total consectutive odd numbers in row N
  //console.log("total: " + numRow.length);
  //for (i=0; i<numRow.length; i++)
  //{
    //console.log("row: " + i + " " + numRow[i]);
  //}
  
  //console.log("num of total odd numbers: " + numRow[numRow.length-1]);
  var counter = 0;
  var sumResult = 0;
  // save all odd numbers up to Row
  for (var x=1; x < numRow[numRow.length-1]*2 ; x+=2)
  {
    oddNumbers.push(x);
    //console.log(x);
  }
  
  // Reverse the Array
  oddNumbers.reverse();
  // Add all Odd numbers on that Row
  for(var p=0;p<n;p++)
  {
    //console.log(oddNumbers[p]);
    sumResult += oddNumbers[p];
  }
  
  return sumResult;
}



// Решение 4
function rowSumOddNumbers(n) {
  var sum = 0;
  for (var i = 1, j = 1; i <= n; i++) {
      for (var x = 0; x < i; x++, j+=2) {
          if (i === n)
              sum += j;
      }
  }
  return sum;
}

//решение 5
function rowSumOddNumbers(n=2) {
  var sum = 0, arr = [],t,find,i, term1=0, term2=0;
  for (t=n;t>0;t--) term1 = term1+t;
   term2 = term1*2;
  for(find=1;find<=term2;find++){
    if(find%2!=0)   arr.push(find);
  }
  for(i=arr.length;i>arr.length-n;i--)
    sum += arr[i-1];
  return sum;
  }



//решение 6
      function rowSumOddNumbers(n) {
        let result = [], temp = [], k = 1, l = 1;
        for (let i = 0; i < n; i++) { // rows
            for (let j = 0; j <= k; j++, l++) {
                if (l % 2 !== 0) temp.push(l);
            }
            result.push(temp);
            temp = [];
            k+=2;
        }
        return result[result.length-1].reduce((a,b) => { return a+b; });
    }