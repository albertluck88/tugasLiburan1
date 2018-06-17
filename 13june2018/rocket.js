function rocket(param)
{
   var hasil = []
   for(var i =1; i<=param; i++){

   if(param % 2 === 0){
    sementara1 = []
    for(var k=1; k <= param; k++){
        if(i === param /2 || i === param / 2 + 1) {
        if(k === param / 2 || k === param / 2 + 1){
            sementara1.push("*")
        }else{
            sementara1.push(" ")
        }

    }else{
        sementara1.push(" ")
    }


    }
    hasil.push(sementara1)


   }else{
    
        sementara = []
        for(var j=1; j<=param; j++){
            if(i === Math.round(param / 2)){
                
                if(j === Math.round(param/2)){
                    sementara.push("*")
                }else{
                    sementara.push(" ")
                }
              
            }else{
                sementara.push(" ")
            }
        }
        hasil.push(sementara)
    }
}
return hasil
}



console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/