let vyhrax = 0;
let vyhrao = 0;
let vyhra = false;
let b = 1;
let hrapvp = true;
let hrapve = false;
let kolo = 1;
let postup = 0;
let vybrano = false;
let pocetkliku = 0;
const playbutton = document.getElementById('playbutton')
playbutton.disabled = true;
const zvukkrizek = document.getElementById('krizek')
const zvukkruh = document.getElementById('kruh')
const zvuktlacitko = document.getElementById('tlacitko')


function PVP() {
    hrapvp = true;
    hrapve = false;
    const zmenapvp = document.getElementById('pvpmode');
    const zmenapve = document.getElementById('pvemode');
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');
    zmenapvp.style.backgroundColor = '#3a6ea5';
    zmenapve.style.backgroundColor = '#ebebeb';
    b = 1;
    zvuktlacitko.play()
    bodyO.style.backgroundColor = '#004e98';
    bodyX.style.backgroundColor = '#ebebeb';
    bod2.style.color = 'black';
    poceX.style.color = 'black';
    bod1.style.color = 'white';
    poceO.style.color = 'white';
        
}

function PVE() {
    hrapvp = false;
    hrapve = true;
    const zmenapvp = document.getElementById('pvpmode');
    const zmenapve = document.getElementById('pvemode');
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');
    zmenapve.style.backgroundColor = '#3a6ea5';
    zmenapvp.style.backgroundColor = '#ebebeb';
    b = 1;
    
    zvuktlacitko.play()
    bodyX.style.backgroundColor = '#ff6600';
    bodyO.style.backgroundColor = '#ebebeb';
    bod1.style.color = 'black';
    poceO.style.color = 'black';
    bod2.style.color = 'white';
    poceX.style.color = 'white';
}

function playgame(){
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
    const hra = document.getElementById('hra');
    hra.style.display ='flex';
    zvuktlacitko.play()
}

function zpet(){
    pocetkliku = 0;
    b = 1
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');
    
    const playbutton = document.getElementById('playbutton')
    playbutton.disabled = true;
    const menu = document.getElementById('menu');
    menu.style.display = 'block';
    const hra = document.getElementById('hra');
    hra.style.display ='none'
    let polepocet = document.getElementsByClassName("pole");
    for (let i = 0; i < polepocet.length; i++) {
        polepocet[i].innerHTML = '';
    }
    vyhra = false;
    let zmenakola = document.getElementById('cislokol');
    kolo = 1;
    zmenakola.innerHTML = kolo;
    vyhrax = 0;
    vyhrao = 0;
    let pocet = document.getElementById("pocetX");
    pocet.innerHTML = vyhrax;
    pocet = document.getElementById("pocetO");
    pocet.innerHTML = vyhrao;
    zvuktlacitko.play()
    if (hrapve === true) {
        bodyX.style.backgroundColor = '#ff6600';
        bodyO.style.backgroundColor = '#ebebeb';
        bod1.style.color = 'black';
        poceO.style.color = 'black';
        bod2.style.color = 'white';
        poceX.style.color = 'white';
    }
    if (hrapvp === true) {
        bodyO.style.backgroundColor = '#004e98';
        bodyX.style.backgroundColor = '#ebebeb';
        bod2.style.color = 'black';
        poceX.style.color = 'black';
        bod1.style.color = 'white';
        poceO.style.color = 'white';
    }

}

function dalsikolo(){
    const playbutton = document.getElementById('playbutton')
        playbutton.disabled = true;

    pocetkliku = 0;
    let polepocet = document.getElementsByClassName("pole");
    for (let i = 0; i < polepocet.length; i++) {
        polepocet[i].innerHTML = '';
    }
    vyhra = false;
    let zmenakola = document.getElementById('cislokol');
    kolo += 1;
    zmenakola.innerHTML = kolo;
    if (hrapve === true) {
       if (b===2){
        pocetkliku +=1;
        vyberPrvnihoKola();
        b = b-1;
    } 
    }
    zvuktlacitko.play()    

}

function zmena(polex) {  
    let pole = document.getElementById(polex);
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');





    if (hrapvp === true){
        if (vyhra === false){
        if ((pole.innerHTML !== 'O') && (pole.innerHTML !== 'X')){       
        if (b === 1){pole.innerHTML = 'O'; 
            pocetkliku +=1;
            b = b+1;
            zvukkruh.play();
            pole.style.color = '#004e98';
            bodyX.style.backgroundColor = '#ff6600';
            bodyO.style.backgroundColor = '#ebebeb';
            bod1.style.color = 'black';
            poceO.style.color = 'black';
            bod2.style.color = 'white';
            poceX.style.color = 'white';
        
        
        
        }
        
        else if (b === 2){
            pocetkliku +=1;
            pole.innerHTML = 'X'; 
            b = b-1;
            zvukkrizek.play();
            pole.style.color = '#ff6600';
            bodyO.style.backgroundColor = '#004e98';
            bodyX.style.backgroundColor = '#ebebeb';
            bod2.style.color = 'black';
            poceX.style.color = 'black';
            bod1.style.color = 'white';
            poceO.style.color = 'white';
        
        }       
        kontorlavse();
        }
    }
    }
     
    

    
    else if (hrapve === true){
            if (vyhra !== true){
                if ((pole.innerHTML !== 'O') && (pole.innerHTML !== 'X')){
                if (b === 1){pole.innerHTML = 'X'; b = b+1;pocetkliku +=1; 
                    zvukkrizek.play();
                    pole.style.color = '#ff6600';
                    bodyO.style.backgroundColor = '#004e98';
                    bodyX.style.backgroundColor = '#ebebeb';
                    bod2.style.color = 'black';
                    poceX.style.color = 'black';
                    bod1.style.color = 'white';
                    poceO.style.color = 'white';
                    kontrolaX();
                }
                setTimeout(() => {
                if (pocetkliku===9){vyhra = true; tlacitkokon()}
                if(vyhra === false){ 
                    b = b-1;
                    pocetkliku +=1;
                    if (postup === 0){
                        vyberPrvnihoKola()
                    }
                    else{
                        sanceVyhry()
                        if (vyhra === false){
                            sanceBloku()
                            if (vybrano === false){vyberPrvnihoKola()}
                        }

                        
                        
                    }
                    kontrolaO();
                }       
                }, 500);
            }       
        }
        
    }
    
    console.log(pocetkliku)
} 

function zvyrazneni() {
    let pole1 = document.getElementById("pole1");
    let pole2 = document.getElementById("pole2");
    let pole3 = document.getElementById("pole3");
    let pole4 = document.getElementById("pole4");
    let pole5 = document.getElementById("pole5");
    let pole6 = document.getElementById("pole6");
    let pole7 = document.getElementById("pole7");
    let pole8 = document.getElementById("pole8");
    let pole9 = document.getElementById("pole9");

    let obsah1 = pole1.innerHTML;
    let obsah2 = pole2.innerHTML;
    let obsah3 = pole3.innerHTML;
    let obsah4 = pole4.innerHTML;
    let obsah5 = pole5.innerHTML;
    let obsah6 = pole6.innerHTML;
    let obsah7 = pole7.innerHTML;
    let obsah8 = pole8.innerHTML;
    let obsah9 = pole9.innerHTML;

    if (obsah1 === obsah2 && obsah2 === obsah3) {
        pole1.style.color = '#a7c957';
        pole2.style.color = '#a7c957';
        pole3.style.color = '#a7c957';
    } else if (obsah4 === obsah5 && obsah5 === obsah6) {
        pole4.style.color = '#a7c957';
        pole5.style.color = '#a7c957';
        pole6.style.color = '#a7c957';
    } else if (obsah7 === obsah8 && obsah8 === obsah9) {
        pole7.style.color = '#a7c957';
        pole8.style.color = '#a7c957';
        pole9.style.color = '#a7c957';
    } else if (obsah1 === obsah4 && obsah4 === obsah7) {
        pole1.style.color = '#a7c957';
        pole4.style.color = '#a7c957';
        pole7.style.color = '#a7c957';
    } else if (obsah2 === obsah5 && obsah5 === obsah8) {
        pole2.style.color = '#a7c957';
        pole5.style.color = '#a7c957';
        pole8.style.color = '#a7c957';
    } else if (obsah3 === obsah6 && obsah6 === obsah9) {
        pole3.style.color = '#a7c957';
        pole6.style.color = '#a7c957';
        pole9.style.color = '#a7c957';
    } else if (obsah1 === obsah5 && obsah5 === obsah9) {
        pole1.style.color = '#a7c957';
        pole5.style.color = '#a7c957';
        pole9.style.color = '#a7c957';
    } else if (obsah3 === obsah5 && obsah5 === obsah7) {
        pole3.style.color = '#a7c957';
        pole5.style.color = '#a7c957';
        pole7.style.color = '#a7c957';
    }
}


function kontrolaO(){
    const playbutton = document.getElementById('playbutton')
    if (vyhra === true || pocetkliku === 9){
        playbutton.disabled = false;}
    let pole1 = document.getElementById("pole1").innerHTML;
    let pole2 = document.getElementById("pole2").innerHTML;
    let pole3 = document.getElementById("pole3").innerHTML;
    let pole4 = document.getElementById("pole4").innerHTML;
    let pole5 = document.getElementById("pole5").innerHTML;
    let pole6 = document.getElementById("pole6").innerHTML;
    let pole7 = document.getElementById("pole7").innerHTML;
    let pole8 = document.getElementById("pole8").innerHTML;
    let pole9 = document.getElementById("pole9").innerHTML;
    if ((pole1 === pole2 && pole2 === pole3 && pole3 === "O") ||
    (pole4 === pole5 && pole5 === pole6 && pole6 === "O") ||
    (pole7 === pole8 && pole8 === pole9 && pole9 === "O") ||
    (pole1 === pole4 && pole4 === pole7 && pole7 === "O") ||
    (pole2 === pole5 && pole5 === pole8 && pole8 === "O") ||
    (pole3 === pole6 && pole6 === pole9 && pole9 === "O") ||
    (pole1 === pole5 && pole5 === pole9 && pole9 === "O") ||
    (pole3 === pole5 && pole5 === pole7 && pole7 === "O")) {
        vyhrao++; 
        vyhra = true;
        let pocet = document.getElementById("pocetO");
        pocet.innerHTML = vyhrao;
        if (vyhra === true || pocetkliku === 9){
            playbutton.disabled = false;}
            zvyrazneni();
        
}
}

function tlacitkokon(){
    if (vyhra === true || pocetkliku === 9){
    playbutton.disabled = false;}
}

function kontrolaX(){
    const playbutton = document.getElementById('playbutton')
    if (vyhra === true || pocetkliku === 9){
        playbutton.disabled = false;}
    let pole1 = document.getElementById("pole1").innerHTML;
    let pole2 = document.getElementById("pole2").innerHTML;
    let pole3 = document.getElementById("pole3").innerHTML;
    let pole4 = document.getElementById("pole4").innerHTML;
    let pole5 = document.getElementById("pole5").innerHTML;
    let pole6 = document.getElementById("pole6").innerHTML;
    let pole7 = document.getElementById("pole7").innerHTML;
    let pole8 = document.getElementById("pole8").innerHTML;
    let pole9 = document.getElementById("pole9").innerHTML;
    if ((pole1 === pole2 && pole2 === pole3 && pole3 === "X") || 
        (pole4 === pole5 && pole5 === pole6 && pole6 === "X") ||
        (pole7 === pole8 && pole8 === pole9 && pole9 === "X") ||
        (pole1 === pole4 && pole4 === pole7 && pole7 === "X") ||
        (pole2 === pole5 && pole5 === pole8 && pole8 === "X") ||
        (pole3 === pole6 && pole6 === pole9 && pole9 === "X") ||
        (pole1 === pole5 && pole5 === pole9 && pole9 === "X") ||
        (pole3 === pole5 && pole5 === pole7 && pole7 === "X")) {
            vyhrax++;       
            vyhra = true;
            let pocet = document.getElementById("pocetX");
            pocet.innerHTML = vyhrax;
            if (vyhra === true || pocetkliku === 9){
                playbutton.disabled = false;}
            zvyrazneni();
        }  
}

function kontorlavse() {
    const playbutton = document.getElementById('playbutton')
    if (vyhra === true || pocetkliku === 9){
        playbutton.disabled = false;}
    let pole1 = document.getElementById("pole1").innerHTML;
    let pole2 = document.getElementById("pole2").innerHTML;
    let pole3 = document.getElementById("pole3").innerHTML;
    let pole4 = document.getElementById("pole4").innerHTML;
    let pole5 = document.getElementById("pole5").innerHTML;
    let pole6 = document.getElementById("pole6").innerHTML;
    let pole7 = document.getElementById("pole7").innerHTML;
    let pole8 = document.getElementById("pole8").innerHTML;
    let pole9 = document.getElementById("pole9").innerHTML;
    if ((pole1 === pole2 && pole2 === pole3 && pole3 === "O") ||
    (pole4 === pole5 && pole5 === pole6 && pole6 === "O") ||
    (pole7 === pole8 && pole8 === pole9 && pole9 === "O") ||
    (pole1 === pole4 && pole4 === pole7 && pole7 === "O") ||
    (pole2 === pole5 && pole5 === pole8 && pole8 === "O") ||
    (pole3 === pole6 && pole6 === pole9 && pole9 === "O") ||
    (pole1 === pole5 && pole5 === pole9 && pole9 === "O") ||
    (pole3 === pole5 && pole5 === pole7 && pole7 === "O")) {
        vyhrao++; 
        vyhra = true;
        let pocet = document.getElementById("pocetO");
        pocet.innerHTML = vyhrao; 
        if (vyhra === true || pocetkliku === 9){
            playbutton.disabled = false;}
            zvyrazneni();
} 
else if ((pole1 === pole2 && pole2 === pole3 && pole3 === "X") || 
        (pole4 === pole5 && pole5 === pole6 && pole6 === "X") ||
        (pole7 === pole8 && pole8 === pole9 && pole9 === "X") ||
        (pole1 === pole4 && pole4 === pole7 && pole7 === "X") ||
        (pole2 === pole5 && pole5 === pole8 && pole8 === "X") ||
        (pole3 === pole6 && pole6 === pole9 && pole9 === "X") ||
        (pole1 === pole5 && pole5 === pole9 && pole9 === "X") ||
        (pole3 === pole5 && pole5 === pole7 && pole7 === "X")) {
            vyhrax++;       
            vyhra = true;
            let pocet = document.getElementById("pocetX");
            pocet.innerHTML = vyhrax;
            if (vyhra === true || pocetkliku === 9){
                playbutton.disabled = false;}
                zvyrazneni();
}  
}

function vyberPrvnihoKola() {
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');
    postup +=1;    
    let vyber = true;    
    if (pocetkliku>=9 && b === 1) {
        vyber = false
    }

    while (vyber) {
        const cislo = Math.floor(Math.random() * 9) + 1;
        const vybranepole = document.getElementById(`pole${cislo}`);
   
        if (vybranepole.innerHTML !== 'O' && vybranepole.innerHTML !== 'X') {
            vybranepole.innerHTML = "O";
            vyber = false;
            zvukkruh.play();
            vybranepole.style.color = '#004e98';
            bodyX.style.backgroundColor = '#ff6600';
            bodyO.style.backgroundColor = '#ebebeb';
            bod1.style.color = 'black';
            poceO.style.color = 'black';
            bod2.style.color = 'white';
            poceX.style.color = 'white';
        
        }
    }
}

function sanceVyhry() {
    let pole1 = document.getElementById("pole1");
let pole2 = document.getElementById("pole2");
let pole3 = document.getElementById("pole3");
let pole4 = document.getElementById("pole4");
let pole5 = document.getElementById("pole5");
let pole6 = document.getElementById("pole6");
let pole7 = document.getElementById("pole7");
let pole8 = document.getElementById("pole8");
let pole9 = document.getElementById("pole9");
if (kontrolavyhry(pole1, pole2, pole3)) {
    vyhra = true;
} else if (kontrolavyhry(pole2, pole3, pole1)) {
    vyhra = true;
} else if (kontrolavyhry(pole1, pole3, pole2)) {
    vyhra = true;
} else if (kontrolavyhry(pole7, pole8, pole9)) {
    vyhra = true;
} else if (kontrolavyhry(pole8, pole9, pole7)) {
    vyhra = true;
} else if (kontrolavyhry(pole7, pole9, pole8)) {
    vyhra = true;
} else if (kontrolavyhry(pole1, pole5, pole9)) {
    vyhra = true;
} else if (kontrolavyhry(pole5, pole9, pole1)) {
    vyhra = true;
} else if (kontrolavyhry(pole1, pole9, pole5)) {
    vyhra = true;
} else if (kontrolavyhry(pole3, pole5, pole7)) {
    vyhra = true;
} else if (kontrolavyhry(pole5, pole7, pole3)) {
    vyhra = true;
} else if (kontrolavyhry(pole3, pole7, pole5)) {
    vyhra = true;
} else if (kontrolavyhry(pole7, pole4, pole1)) {
    vyhra = true;
} else if (kontrolavyhry(pole4, pole1, pole7)) {
    vyhra = true;
} else if (kontrolavyhry(pole7, pole1, pole4)) {
    vyhra = true;
} else if (kontrolavyhry(pole8, pole5, pole2)) {
    vyhra = true;
} else if (kontrolavyhry(pole5, pole2, pole8)) {
    vyhra = true;
} else if (kontrolavyhry(pole8, pole2, pole5)) {
    vyhra = true;
} else if (kontrolavyhry(pole9, pole6, pole3)) {
    vyhra = true;
} else if (kontrolavyhry(pole6, pole3, pole9)) {
    vyhra = true;
} else if (kontrolavyhry(pole9, pole3, pole6)) {
    vyhra = true;
} else if (kontrolavyhry(pole4, pole5, pole6)) {
    vyhra = true;
} else if (kontrolavyhry(pole5, pole6, pole4)) {
    vyhra = true;
} else if (kontrolavyhry(pole4, pole6, pole5)) {
    vyhra = true;
}
    

}

function sanceBloku() {
    vybrano = false 
    let pole1 = document.getElementById("pole1");
    let pole2 = document.getElementById("pole2");
    let pole3 = document.getElementById("pole3");
    let pole4 = document.getElementById("pole4");
    let pole5 = document.getElementById("pole5");
    let pole6 = document.getElementById("pole6");
    let pole7 = document.getElementById("pole7");
    let pole8 = document.getElementById("pole8");
    let pole9 = document.getElementById("pole9");
    if (kontrolabloku(pole1, pole2, pole3)) {
        vybrano = true;
    } else if (kontrolabloku(pole2, pole3, pole1)) {
        vybrano = true;
    } else if (kontrolabloku(pole1, pole3, pole2)) {
        vybrano = true;
    } else if (kontrolabloku(pole7, pole8, pole9)) {
        vybrano = true;
    } else if (kontrolabloku(pole8, pole9, pole7)) {
        vybrano = true;
    } else if (kontrolabloku(pole7, pole9, pole8)) {
        vybrano = true;
    } else if (kontrolabloku(pole1, pole5, pole9)) {
        vybrano = true;
    } else if (kontrolabloku(pole5, pole9, pole1)) {
        vybrano = true;
    } else if (kontrolabloku(pole1, pole9, pole5)) {
        vybrano = true;
    } else if (kontrolabloku(pole3, pole5, pole7)) {
        vybrano = true;
    } else if (kontrolabloku(pole5, pole7, pole3)) {
        vybrano = true;
    } else if (kontrolabloku(pole3, pole7, pole5)) {
        vybrano = true;
    } else if (kontrolabloku(pole7, pole4, pole1)) {
        vybrano = true;
    } else if (kontrolabloku(pole4, pole1, pole7)) {
        vybrano = true;
    } else if (kontrolabloku(pole7, pole1, pole4)) {
        vybrano = true;
    } else if (kontrolabloku(pole8, pole5, pole2)) {
        vybrano = true;
    } else if (kontrolabloku(pole5, pole2, pole8)) {
        vybrano = true;
    } else if (kontrolabloku(pole8, pole2, pole5)) {
        vybrano = true;
    } else if (kontrolabloku(pole9, pole6, pole3)) {
        vybrano = true;
    } else if (kontrolabloku(pole6, pole3, pole9)) {
        vybrano = true;
    } else if (kontrolabloku(pole9, pole3, pole6)) {
        vybrano = true;
    } else if (kontrolabloku(pole4, pole5, pole6)) {
        vybrano = true;
    } else if (kontrolabloku(pole5, pole6, pole4)) {
        vybrano = true;
    } else if (kontrolabloku(pole4, pole6, pole5)) {
        vybrano = true;
    }
}    

function kontrolavyhry(poleA, poleB, poleC) {
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');
    if (poleA.innerHTML === poleB.innerHTML && poleB.innerHTML === "O" && poleC.innerHTML === "") {
        poleC.innerHTML = "O";
        zvukkruh.play();
            poleC.style.color = '#004e98';
        bodyX.style.backgroundColor = '#ff6600';
        bodyO.style.backgroundColor = '#ebebeb';
        bod1.style.color = 'black';
        poceO.style.color = 'black';
        bod2.style.color = 'white';
        poceX.style.color = 'white';
        
        return true;
    }
    return false;
}

function kontrolabloku(poleA, poleB, poleC) {
    const bodyO = document.getElementById('bodyO');
    const bodyX = document.getElementById('bodyX');
    const bod1 = document.getElementById('bod1');
    const bod2 = document.getElementById('bod2');
    const poceO = document.getElementById('pocetO');
    const poceX = document.getElementById('pocetX');
    if (poleA.innerHTML === poleB.innerHTML && poleB.innerHTML === "X" && poleC.innerHTML === "") {
        poleC.innerHTML = "O";
        zvukkruh.play();
        poleC.style.color = '#004e98';
        bodyX.style.backgroundColor = '#ff6600';
        bodyO.style.backgroundColor = '#ebebeb';
        bod1.style.color = 'black';
        poceO.style.color = 'black';
        bod2.style.color = 'white';
        poceX.style.color = 'white';
        
        return true;
    }
    return false;
}