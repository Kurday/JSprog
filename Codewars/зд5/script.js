function spongeMeme(str){
	let res = '';
	for (var i = 0; i < str.length; i++) {
		res += (i%2) ? str[i].toLowerCase() : str[i].toUpperCase();
	}
	return res;
}

console.log(spongeMeme('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem, esse, nobis enim quisquam maiores earum tempore voluptates cumque quidem, laudantium est illo eius. Iure, ad a atque obcaecati perspiciatis.')); 