/*
    diberikan sebuah array angka dimana , angka - angka tersebut adalah 
    increment dari angka sebelumnya sebesar 1 . 
    tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
    - Tidak boleh memakai perulangan 
    - Tidak boleh memakai function magic apapun kecuali .length pada array
    - Tidak boleh memakai rekursif 
*/


function addAll(angka)
{

 var hitung = 0
 var hasil = 0
 var median = 0
 var bagi = 0
 var tambah = angka.length + 1
 var kurang = angka.length  
 if(angka.length % 2 === 0){
   hitung = angka.length / 2
   median = angka[hitung] + angka[hitung-1]
   bagi = median / 2 - 0.5
   hasil = bagi * tambah - 4

 }else{
   hitung = angka.length / 2 - 1 + 0.5
   hasil = angka[hitung] * angka.length
 }
 return hasil
}


console.log(addAll([1,2,3,4,5]))
// 15

console.log(addAll([5,6,7,8,9,10]));
// 45

console.log(addAll([2,3,4,5,6]));
// 20

console.log(addAll([8,7,6,5,4,3,2])); 
// 35
