/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
  var hasilTambah = 0
  for(var i = 1; i <= param; i++){
    hasilTambah += i
  }


  var groups = ""

  for(var j = 1; j <= param; j++){
    group = ""
    if(j === hasilTambah / param){
      for(var k = 1; k <= param; k++){
        group += "*"
      }
    }else if(param % 2 === 0){

      return "invalid Input"

    }else{
     for(var l = 1; l <= param; l++){
       if(l === hasilTambah / param){
         group += "*"
       }else{
         group += " "
       }
     }
    }
    groups +=  group + "\n"
  }

var hitung = hasilTambah / param

return groups
}





console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input

 