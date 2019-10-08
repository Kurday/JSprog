function User(f, l){
	this.f = f;
	this.l = l;

	this.print = function(){
		console.log(this.f + ' ' + this.l)
	}
}

let u = new User('Ivan', 'Ivanov');

let print = u.print;

print();


