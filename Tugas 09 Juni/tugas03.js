function soal3(param)
{
  var groups = []
  var angka = 1
  for(var i=0; i < param; i++){
    var group =[]
    for(var j =0; j < param; j++){
      group.push(angka++)
    }
    groups.push(group)
  }

  return groups
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/
console.log(soal3(4))

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/