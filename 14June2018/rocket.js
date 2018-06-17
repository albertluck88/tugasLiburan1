function rocket(param)
{
   var group = []
   var angka = 0
   for(var i=0; i<param; i++){
       sementara = []
    for(var j=0; j<param; j++){
        tampung = []
        for(var a = 0; a < param; a++){
            if( i === a){
                tampung.push(a)
                tampung.push(j)
            }
        }
        sementara.push(tampung)
    }

      group.push(sementara)
   }


return group
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/