var rect = require('./rectangle');
var rectFunc = rect.rectangle;
function solveRect(x,y) {
	rectFunc(x,y,(err,rectangle)=>{
		if(err){
			console.log("error: "+ err.message);
		}
		else{
			console.log("perimeter is "+ rectangle.perimeter()+" & area is "+ rectangle.area());
		}
	})
	
};
solveRect(2,2);
solveRect(-1,2);