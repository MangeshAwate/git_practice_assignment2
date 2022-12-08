function palindrome(str){
	bag="";
	for(i=0;i<str.length;i++){
		bag=bag+str[i];
	}
	bagr="";
	for(j=str.length;j>0;j++){
		bagr=bagr+str[i];
	}
	if(bag==bagr){
		return false;	
	}
	else{
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
