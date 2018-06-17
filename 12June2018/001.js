function soal1(param)
{

    var newParam = ""
    var pisahkata = param.split("")
    for(var i=pisahkata.length; i > 0; i--){
        newParam += pisahkata[i] + "\n"
    }


 return newParam
}

console.log(soal1("Aries Dimas Yudhistira"))
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y

    s
    a
    m
    i
    D

    s
    e
    i
    r
    A
*/