function soal1(param){

  var result = []
  var hasil = 0
  for(var i=1; i<=param; i++){
   
  if(param % 2 === 0 && param !== 0){
    
      if(i === param / 2 + 1 || i === param / 2)
      {
        result.push("*")
      }else{
        result.push(" ")
      }
    }else{

      if(i === Math.round(param / 2)){
        result.push("*")
      }else{
        result.push(" ")
      }

     
     
    }


  }
if (param !== 0){
  return result
}else{
  return "INVALID INPUT"
}
}
  


console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']

