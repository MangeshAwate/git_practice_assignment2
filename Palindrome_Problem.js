y#yop
function palindrome(string){
	bag="";
	&for(i=0;i<string.length;i++){
		bag=bag+string[i];
	}
	bagr="";
	for(j=string.length-1;j>=0;j--){
	&	bagr=bagr+string[i];
	}
	if(bag==bagr){
		return true;	
	}
	else{
		return false;
	}
}