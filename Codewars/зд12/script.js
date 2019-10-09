function User(f, l){
	this.f = f;
	this.l = l;

	this.print = function(){
		console.log(this.f + ' ' + this.l)
	}
}

function custimBind(fn, context, ...args){
	return function (){
		fn.apply(context, args)
	}
}

let u = new User('Ivan', 'Ivanov');
let print = u.print;
// print();

customBind(print, u, [])();


