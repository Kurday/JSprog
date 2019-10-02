// function arr(row){
// 	var str = new Array(col);
// 	var col = new Array();



// 	var n = 0;
// 	var m = 0;


// 	for(var i = 1; i < row; i++){
// 		str[n] = i;
// 		n++;
// 		for(var j = 1; j < 2; j++)
// 		{	
// 			col[m] = j;
// 			m++;
// 		}
// 	}

// 	console.log();
// }

// arr(5);







// function matrix(rows){
//   var arr = [];
//   var col = 1;
//   var num = 1;
//   var sum = 0;
//   for(var i=0; i < rows; i++){


//     arr.push([]);
//     arr[i].push( new Array());


//     for(var j=0; j < col; j++){

//       arr[i][j] = num;
//       num = num+2;
//       col = i+1;
//     }


//   }

//   return arr;
// }

// console.log(matrix(5))


function rowSumOddNumbers(rows){
  var arr = [];
  var col = 1;
  var num = 1;
   var suma= 0;
  
  

  
  
  for(var i=0; i < rows; i++){


    arr.push([]);
    arr[i].push( new Array());


    for(var j=0; j < col; j++){
      arr[i][j] = num; //столбцу массива назначаем значение
      num = num+2; //увеличиваем это значение что бы следующее было нечетным
      col = i+1;  // Делает нашу пирамидку прибавляя к следующей строчке одну ячейку
    }
  }


 

 for (var m = 0; m < rows; m++) {
    console.log(arr[rows][j]);
    // suma = suma + arr[rows][j];
  }
 



  return arr;
}

// function rowSumOddNumbers(arr,rows){
 
//  var suma= 0;
//  for (var j = 0; j < rows+1; j++) {
//     // console.log(arr[i][j]);
//     suma = suma + arr[rows][j];
//   }
//   return suma
// }



console.log(rowSumOddNumbers(5));



