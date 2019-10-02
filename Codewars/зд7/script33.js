function arr(row){
	var oddNumbers = new Array();
	var n = 0;
	

	for(var i = 1; i < row; i++){
		
			oddNumbers[n] = i;
        
        n++;
    }


console.log(oddNumbers);
}

arr(23);