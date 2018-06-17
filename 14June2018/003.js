function soal3(param1)
{
    var angka = 1
    var tampung = []
    

    for(var i=0; i < param1; i++){
        group = []
        for(var j=1; j<=param1; j++){
            group.push(angka++)
        }
        tampung.push(group)
    }

    for(var j=1; j<tampung.length; j++){
        if(j === 1 || j % 3 === 0){
            tampung[j].sort(function(a, b){return a < b})
        }
    }

    

    return tampung

}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/



