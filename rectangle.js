rectangle = (a,b,callback)=>{
	if(a<=0 || b<=0){
		callback(new Error("data invalid"),null)
	} else{
		callback(null, {
	
 perimeter: () => (2*(a+b)),
  area:() => (a*b)

		});
	}
}
module.exports.rectangle = rectangle;
