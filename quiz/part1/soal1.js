//proxytia
let nama= "", peran= ""

if (nama ===""){
    console.log("nama wajib diisi!");
}

//sistem peran
if (peran ===""){
    console.log("pilih peran mu untuk memulai game")
}
 
else if  (peran ==="ksatria"){
    console.log("halo ksatria ,kamu dapat menyerang dengan senjatamu!")
}

else if  (peran ==="tabib"){
    console.log("halo tabib,kamu akan membantu temanmu yang terluka")
}

else if  (peran ==="penyihir"){
    console.log("halo penyihir,ciptakan keajaiban yang membantu kemenanganmu")
}

else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}