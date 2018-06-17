function persegi(param1,param2)
{
  var group = ""
    if(param1 !== 0 || param2 !== 0 ){
 for(var i = 1; i <= param2; i++){
    sementara = ""
    for(var j =1; j <= param1; j++){
        if(i === 1 || i === param2 ){
            sementara += "#"
        }else{
            simpan = ""
            if(j === 1 || j === param1){
                simpan += "#"
            }else{
                simpan += " "
            }
            sementara += simpan
        }
    }
    group += sementara + "\n"
    }
}else{
    group += "INVALID VALUE"
}

        return group
  
}


console.log(persegi(5,7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 

