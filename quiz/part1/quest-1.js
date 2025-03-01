
const typeRole = [
    {roleName: "Ksatria", roleDesc: "kamu dapat menyerang dengan senjatamu!"},
    {roleName: "Tabib", roleDesc: "kamu akan membantu temanmu yang terluka"},
    {roleName: "Penyihir", roleDesc: "ciptakan keajaiban yang membantu kemenanganmu!"}
];

let name = "Terry", role = "ksatria";

if (name.length > 0) {
    if (role.length > 0) {
        const check = typeRole.filter((item) => item.roleName.toLowerCase() === role.toLowerCase());
        if (check.length > 0) {
            console.log(`Hello ${check[0].roleName} ${name}, ${check[0].roleDesc}`)
        } else {
            console.log(`Hello ${name}, tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
        } 
    } else {
        console.log(`Hello ${name}, Pilih peranmu dahulu untuk memulai game`)
    }
} else {
    console.log('Nama dan Role wajib diisi!')
}
