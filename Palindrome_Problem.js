function palindrome(str){
	bag="";
	for(i=0;i<str.length;i++){
		bag=bag+str[i];
	}
	bagr="";
	for(j=str.length-1;j>=0;j--){
		bagr=bagr+str[i];
	}
	if(bag==bagr){
		return true;	
	}
	else{
		return false;
	}	
}

p_check="maddam";
result_pal=palindrome(p_check);
console.log(result_pal);


	
}
