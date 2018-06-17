function soal2(param)
{
    var hasil = []
    var batas = Math.round(param / 2)

    if(param % 2 !== 0){
        for(var i=1; i <= batas; i++){
            sementara = []
            if(i === 1 ){
                for(var k=1; k <= param; k++){
                
                    if(k === Math.round(param / 2)){
                    sementara.push("*")
                    }else{
                    sementara.push(" ")
                    }
                
                }
            }else if(i % 2 === 0){
                for(var a=1; a<= param; a++){

                    if(a === 1 || a === param){
                    sementara.push(" ")
                    }else{
                    sementara.push("*")
                    }
                }
            }else if(i % 3 === 0){
                for(var b=1; b<= param; b++){
                    sementara.push("*")
                }
            }
            hasil.push(sementara)
        }
    }else if(param === 3){

        for(var i=1; i <= param; i++){
            sementara = []
            if(i === 1 ){
                for(var k=1; k <= param; k++){
                
                    if(k === Math.round(param / 2)){
                    sementara.push("*")
                    }else{
                    sementara.push(" ")
                    }
                
                }
            }else if(i % 3 === 0){
                for(var b=1; b<= param; b++){
                    sementara.push("*")
                }
            }
            hasil.push(sementara)
        }

    }else{
        return "INVALID INPUT"
    }

    return hasil
    
}

console.log(soal2(5))
/*

  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input