// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)



let nama = "daffa", peran = "Ksatria";
    
    if(nama.length> 0){
        console.log(nama);
    }else{
        console.warn("nama wajib diisi");
    }

    if(peran.length>0){
        console.log(peran);
        switch (peran){
            case "Ksatria" : console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
            break;
            case "Tabib" : console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`); 
            break;
            case "Penyihir" : console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
            default:
            console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
        }
    }else{
        console.warn("Pilih Peranmu untuk memulai game");
    }

    



//code disini gunakan console.log untuk outputnya
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// // bila peran kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// // Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 