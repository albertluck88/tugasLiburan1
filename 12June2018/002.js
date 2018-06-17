/*
   STORE alphabet with String "abcdefghijklmnopqrstuvwxyz"
   STORE arrayAlpha with any value
   FOR 

    
*/

function soal2(param)
{
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var pisahkata = alphabet.split("")
    var kali = param * param
    var angka = 0
    var group = []
    for(var o=0; o < pisahkata.length; o++){
        angka++
    }
    for(var i=0; i<param; i++){
        sementara = []
        for(var j=0; j<param; j++){
        
             sementara.push(angka++)
        
        }
        group.push(sementara)
    }
  return group
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input