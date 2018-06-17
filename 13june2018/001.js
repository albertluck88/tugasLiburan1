function soal1(param)
{
   var newParam = []
   for(var i=1; i <= param; i++){
       if(i % 4 == 0 && i !== 28){
           newParam.push("Fizz")
       }else if(i % 7 === 0 && i !== 28){
           newParam.push("Buzz")
       }else if(i === 28){
           newParam.push("FizzBuzz")
       }else{
           newParam.push(" ")
       }
   }
   return newParam
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']


