const motos = [
    {
        nome: 'Modelo: MT03',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Cinza',
        cilindrada: 'Cilindradas: 321',
        valor:  'Valor: R$ 29.900'
    },
    {
        nome: 'Modelo: MT07',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Cinza',
        cilindrada: 'Cilindradas: 700',
        valor: "Valor: R$ 45.990,00",
    },
    {
        nome: 'Modelo: MT09',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Cinza',
        cilindrada: 'Cilindradas: 900',
        valor: "Valor: R$ 58.690,00"
    },
    {
        nome: 'Modelo: R3',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Azul',
        cilindrada: 'Cilindradas: 321',
        valor: "Valor: R$ 37.990,00"
    },
    {
        nome: 'Modelo: R3',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Monster Preta',
        cilindrada: 'Cilindradas: 321',
        valor: "Valor: R$ 38.990,00"
    },
    {
        nome: 'Modelo: R1',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Preto',
        cilindrada: 'Cilindradas: 1000',
        valor: "Valor: R$ 145.000,00"
    },
    {
        nome: 'Modelo: Tracer',
        marca: 'Marca: Yamaha',
        cor: 'Cor: Vermelha',
        cilindrada: 'Cilindradas: 900',
        valor: "Valor: R$ 68.423,00"
    },
    {
        nome: 'Modelo: s1000rr',
        marca: 'Marca: BMW',
        cor: 'Cor: Preta',
        cilindrada: 'Cilindradas: 1000',
        valor: "Valor: R$ 120.500,00"
    },
    {
        nome: 'Modelo: Panigale v4',
        marca: 'Marca: Ducati',
        cor: 'Cor: Vermelha',
        cilindrada: 'Cilindradas: 1100',
        valor: "Valor: R$ 550.990,00"
    }
] 

function exibir1() {
    const btn = document.getElementById("btn-info1");
    const inf = document.getElementById("informacao1");
    const imgInfo = document.querySelector("#mt03");
    const h1 = document.querySelector("#info-moto1")
    const divImgMotos = document.querySelector("#div-img-motos1")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[0].nome}<br>${motos[0].marca}<br>${motos[0].cor}<br>${motos[0].cilindrada}<br>${motos[0].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir2() {
    const btn = document.getElementById("btn-info2");
    const inf = document.getElementById("informacao2");
    const imgInfo = document.querySelector("#mt07");
    const h1 = document.querySelector("#info-moto2")
    const divImgMotos = document.querySelector("#div-img-motos2")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[1].nome}<br>${motos[1].marca}<br>${motos[1].cor}<br>${motos[1].cilindrada}<br>${motos[1].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir3() {
    const btn = document.getElementById("btn-info3");
    const inf = document.getElementById("informacao3");
    const imgInfo = document.querySelector("#mt09");
    const h1 = document.querySelector("#info-moto3")
    const divImgMotos = document.querySelector("#div-img-motos3")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[2].nome}<br>${motos[2].marca}<br>${motos[2].cor}<br>${motos[2].cilindrada}<br>${motos[2].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir4() {
    const btn = document.getElementById("btn-info4");
    const inf = document.getElementById("informacao4");
    const imgInfo = document.querySelector("#r3a");
    const h1 = document.querySelector("#info-moto4")
    const divImgMotos = document.querySelector("#div-img-motos4")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[3].nome}<br>${motos[3].marca}<br>${motos[3].cor}<br>${motos[3].cilindrada}<br>${motos[3].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir5() {
    const btn = document.getElementById("btn-info5");
    const inf = document.getElementById("informacao5");
    const imgInfo = document.querySelector("#r3b");
    const h1 = document.querySelector("#info-moto5")
    const divImgMotos = document.querySelector("#div-img-motos5")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[4].nome}<br>${motos[4].marca}<br>${motos[4].cor}<br>${motos[4].cilindrada}<br>${motos[4].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir6() {
    const btn = document.getElementById("btn-info6");
    const inf = document.getElementById("informacao6");
    const imgInfo = document.querySelector("#r1");
    const h1 = document.querySelector("#info-moto6")
    const divImgMotos = document.querySelector("#div-img-motos6")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[5].nome}<br>${motos[5].marca}<br>${motos[5].cor}<br>${motos[5].cilindrada}<br>${motos[5].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir7() {
    const btn = document.getElementById("btn-info7");
    const inf = document.getElementById("informacao7");
    const imgInfo = document.querySelector("#tracer");
    const h1 = document.querySelector("#info-moto7")
    const divImgMotos = document.querySelector("#div-img-motos7")

    if(inf.style.display == "none") {
        imgInfo.style.width = "150px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[6].nome}<br>${motos[6].marca}<br>${motos[6].cor}<br>${motos[6].cilindrada}<br>${motos[6].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "450px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir8() {
    const btn = document.getElementById("btn-info8");
    const inf = document.getElementById("informacao8");
    const imgInfo = document.querySelector("#bmw");
    const h1 = document.querySelector("#info-moto8")
    const divImgMotos = document.querySelector("#div-img-motos8")

    if(inf.style.display == "none") {
        imgInfo.style.width = "180px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[7].nome}<br>${motos[7].marca}<br>${motos[7].cor}<br>${motos[7].cilindrada}<br>${motos[7].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "490px"
        divImgMotos.style.justifyContent = "center"
        imgInfo.style.marginTop = "0px"
 }
}

function exibir9() {
    const btn = document.getElementById("btn-info9");
    const inf = document.getElementById("informacao9");
    const imgInfo = document.querySelector("#ducati");
    const h1 = document.querySelector("#info-moto9")
    const divImgMotos = document.querySelector("#div-img-motos2")

    if(inf.style.display == "none") {
        imgInfo.style.width = "180px"
        imgInfo.style.marginTop = "50px"
        inf.style.display = "block"
        h1.innerHTML = `${motos[8].nome}<br>${motos[8].marca}<br>${motos[8].cor}<br>${motos[8].cilindrada}<br>${motos[8].valor}`
        btn.textContent ="Mostrar menos"
        btn.marginBotton = "0px"
        divImgMotos.style.justifyContent = "center"
    }
     else {
        btn.textContent ="Mostrar mais"
        inf.style.display = "none"
        imgInfo.style.width = "490px"
        divImgMotos.style.justifyContent = "start"
        imgInfo.style.marginTop = "0px"
 }
}