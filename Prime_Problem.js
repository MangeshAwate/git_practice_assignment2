num=3;

function c_prime(integer){

	let count=0;
	for(i=1;i<=num;i++){
		if(num%i==0){
			count++;
		}
	}
	if(count==2){
		return true;
	}
	return false;
}

let res=c_prime(num);
if(res==true){
	console.log("prime");
}
else{
	console.log("Not prime");
}