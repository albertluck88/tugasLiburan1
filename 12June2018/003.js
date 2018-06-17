function soal3(param)
{
    var group = {}
    var under20 = []
    var over20 = []
    for(var i=0; i<param.length; i++){
        if(param[i][1] < 20){
            under20.push(param[i][0])
        }else{
            over20.push(param[i][0])
        }
        
    }
    group.under20 = under20
    group.over20 = over20

    return group
  
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/