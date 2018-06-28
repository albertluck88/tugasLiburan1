function createPyramid(num){

	var hasil = ""
	var angka = 5
		for(var j=1; j<=angka; j++){
			sementara = "" 	
			if(j % 2 !== 0){
			for(var a=0; a<num; a++){
				for(var k=0; k<(angka-j)/2; k++){
					sementara += " " 
				}
			for(var k=0; k<j; k++){
				sementara += "*" 
			}
			for(var k=0; k<(angka-j)/2; k++){
				sementara += " " 
			}
			
			}
			hasil += sementara + "\n"
		}
		
		}
return hasil
}


console.log(createPyramid(1));
/*

	  *
	 ***
	*****

*/



console.log(createPyramid(2));
 /*

 	  *   *
	 *** ***
 	*********

 */


 console.log(createPyramid(5));

 /*
 	  *   *   *   *   *  
 	 *** *** *** *** *** 
 	*********************

 */