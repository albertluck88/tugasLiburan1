// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
   var groups = []

   if(param.length % 2 === 0){
        var bagi = param.length / 2 
        for(var i = 1; i <= bagi; i++){
            sementara = []    
            for(var j=0; j < param.length; j++){
                
                if(j === i-1 || j === param.length - i){
                    sementara.push(param[j])
                }
                
            }
            groups.push(sementara)
        }
       
    }else if(param.length % 2 !== 0){
        var bagi2 = param.length /2 + 0.5
        for(var a = 1; a <= bagi2; a++){
            sementara2 = []
            for(var b = 0; b < param.length; b++){
                if(b === a-1 || b === param.length - a){
                    sementara2.push(param[b])
                }
            }
            groups.push(sementara2)
        }

        for(var c = 0; c < groups.length; c++){
            if(groups[c][1] === undefined){
                sementara2.push("INSTRUKTUR")
            }
        }
        
    }

     return groups
}



console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/
console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]
