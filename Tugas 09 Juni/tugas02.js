function soal2(param)
{

  var result = []
  for(var i=0; i < param.length; i++){
    result.push(Object.create({}))
    if(i === 0){

      for(var j = 0; j < param[i].length; j++){

        if([i][j] === 0){

          result[i].firstName = param[i][j]
          result[i].lastName = param[i][j+1]
          result[i].Hobbies = param[i][j+2]
          result[i].Profesiion = param[i][j+3]
 
          }

        }

      }else{
        for(var k = 0; k < param[i].length; k++){

          if([i][k] === 1){
  
            result[i].firstName = param[i][k]
            result[i].lastName = param[i][k+1]
            result[i].Hobbies = param[i][k+2]
            result[i].Profesiion = param[i][k+3]
          }
      }

    }

  


}
return result
}






console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]
*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));