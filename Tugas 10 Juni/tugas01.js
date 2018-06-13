/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 
*/
function soal1(param)
{
    var group =[]
   for(var i = 1; i <= param; i++){
       if( i === 1 ){
           group.push("!")
       }else if( i === 2){
           group.push("@")
       }else if( i === 3){
           group.push("#")
       }else if( group[i-2] === "#"){
           group.push("!")
       }else if( group[i-2] === "!"){
           group.push("@")
       }else if( group[i-2] === "@"){
           group.push("#")
       }
   }
   if(param !== 0){
       return group
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