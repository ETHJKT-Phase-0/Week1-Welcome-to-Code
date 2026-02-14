let nama ="";
let peran= "penyihir";

if (nama === "" ){
    console.log("wajib isi nama")
    if(peran === "tabib" || peran === "Tabib"){
        console.log ( "hallo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka")
    }else if(peran === "kesatria" || peran === "Kesatria" || peran === "Ksatria" || peran === "ksatria"){
        console.log("hallo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
    }else if (peran === "penyihir" || peran === "Penyihir"){
        console.log("hallo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
    }else{
        console.log("wajib isi peran atau jadi bot")
    }

}

