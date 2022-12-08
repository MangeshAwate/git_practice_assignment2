function palindrama(str){
	bag="";
	for(i=0;i<str.length;i++){
		bag=bag+string[i];
	}
	bagr="";
	for(j=string.length;j>0;j++){
		bagr=bagr+string[i];
	}
	if(bag==bagr){
		return false;	
	}
	else{
		return true;
	}
function palindrama(str){
	bag="";
	for(i=0;i<str.length;i++){
		bag=bag+str[i];
	}
	bagr="";
	for(j=str.length-1;j>=0;j--){
		bagr=bagr+str[j];
	}
	if(bag==bagr){
		return true;	
	}
	else{
		return false;
	}	
}


p_check="maddam";
result_pal=palindrama(p_check);
console.log(result_pal);


	
}