function soal1(param){

    var result = []
  
    var hasil = 0    
    for(var i=0;i<=param;i++)
    {
      hasil = hasil + i
    }
  
    if(param % 2 === 0 && param !== 0){
      for(var j = 1; j <= param; j++){
        if(j === hasil % param + 1 || j === hasil % param)
        {
          result.push("*")
        }else{
          result.push(" ")
        }
      }
  
      }else if(param === 0 ){
        return "invalid input"
  
      }else{
        for(var k=1;k<=param;k++){
          if(k === Math.floor(hasil / param)){
            result.push("*")
          }else{
            result.push(" ")
          }
        }
      }
  return result
    }
    
  
  
  // test case
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
  