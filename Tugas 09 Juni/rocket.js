/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 
*/
function soal1(param)
{
    var groups = []
    for(var i = 1; i <= param; i++){

      if(param !== 0){
      if( i === 1){
        groups.push("!")
      }else if( i === 2){
        groups.push("@")
      }else if( i === 3){
        groups.push("#")
      }else if(groups[i-2] === "#"){
        groups.push("!")
      }else if(groups[i-2] === "!"){
        groups.push("@")
      }else if(groups[i-2] === "@"){
        groups.push("#")
      }
    }
    
    }
    if(param !== 0){
    return groups
    }else{
      return "INVALID INPUT"
    }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input