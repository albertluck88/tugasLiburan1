function soal2(param)
{

  var result = []
  for(var i=0; i < param.length; i++){
    
    if(i === 0){
      result.push(Object.create({}))  
        if([i][0] === 0){
         result[i].firstName = param[i][0]
          result[i].lastName = param[i][i+1]
          result[i].Hobbies = param[i][i+2]
          result[i].Profesiion = param[i][i+3]
        }
      }else{

          if([i][1] === 1){
            result[i].firstName = param[i][0]
            result[i].lastName = param[i][i+1]
            result[i].Hobbies = param[i][i+2]
            result[i].Profesiion = param[i][i+3]
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