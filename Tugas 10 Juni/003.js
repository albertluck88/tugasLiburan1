function soal3(param)
{
    var data = []
    var checkDouble = []
    var kumpulanHewan = {}
    for(var i = 0; i<param.length; i++){
        data.push(param[i].charAt(0))
    }
    data.sort()

    for(var j = 0; j<data.length; j++){
        if(data[j] !== data[j+1]){
            checkDouble.push(data[j])
        }
    }

    for(var k = 0; k < checkDouble.length; k++){
        var sementara = []
        for(var l =0; l < param.length; l++){
            if(checkDouble[k] === param[l].charAt(0)){
                sementara.push(param[l])
            }
        }
        kumpulanHewan.k= sementara
    }


return kumpulanHewan

}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

