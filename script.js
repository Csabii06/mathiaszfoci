const felidok=['1','2']

let lista1sarga=[]
let lista1piros=[]
let lista2sarga=[]
let lista2piros=[]


let idoszal1=setInterval(Tick1,1000)
let idoszal2=setInterval(Tick2,1000)




function Teams(){
    let cs1=document.getElementById("team1").value
    let cs2=document.getElementById("team2").value
    document.getElementById("t1").innerHTML=cs1
    document.getElementById("t2").innerHTML=cs2

}


let idoszal3;
let szamlalo=0;



function Start(){
   idoszal3=setInterval(Szamol,1000) 
   
   
    

    

}
function Szamol(){
    let figyelo=parseInt(document.getElementById("ido").value*60)
    szamlalo++
    let perc=Math.floor(szamlalo/60)
    let sec=szamlalo%60

    document.getElementById("time").innerHTML=`${perc}:${sec}`

    if(szamlalo==figyelo){
        clearInterval(idoszal3)
    }

}
function Stop(){
    clearInterval(idoszal3)
}

function Team1sarga(){
    let nev=document.getElementById("team-1-lap").value;
    lista1sarga.push({neve:nev});
    console.log(lista1sarga)


    let main=document.getElementById("felsorol1");
    main.innerHTML=""

    lista1sarga.forEach(element => {
        main.innerHTML += `<li>${element.neve}</li>`
    });

}

function Felidok(){
    let fi1=parseInt(document.getElementById("egy").value)
    let fi2=parseInt(document.getElementById("ketto").value)
    let fi=document.getElementById("felido").value
    if(fi==fi1){
        szamlalo;
    }
    else{
        szamlalo=0;
    }
}

let szamlalo2=document.getElementById("extra-time").value;
let idoszal4;
function Hosszabbitas(){

    idoszal4=setInterval(Szamol2,1000)
    

}

function Szamol2(){
    let figyelo=parseInt(document.getElementById("extra-time").value*60)
    szamlalo2--
    let perc2=Math.floor(szamlalo2/60)
    let sec2=szamlalo2%60

    document.getElementById("idohosszabbitas").innerHTML=`${perc2}:${sec2}`

    if(szamlalo2==figyelo){
        clearInterval(idoszal4)
    }

}

Team1sarga()



function Team1piros(){
    let nev=document.getElementById("team-1-lap").value;
    lista1piros.push({neve:nev, time:120});
    console.log(lista1piros)
    Kiiras1()

    

}

function Kiiras1(){
    let main=document.getElementById("felsorolas1piros");
    main.innerHTML=""

    lista1piros.forEach(element => {
        main.innerHTML += `<li>${element.neve} - ${element.time}</li>`
    });
}


function Tick1(){
    for(i=0; i< lista1piros.length; i++){
        lista1piros[i].time -= 1

        if(lista1piros[i].time==0){
            lista1piros.splice(i,1)
        }
    }

    Kiiras1()

}

function Team2sarga(){
    let nev2=document.getElementById("team-2-lap").value
    lista2sarga.push({name:nev2})
    console.log(lista2sarga)

    let main2=document.getElementById("felsorolas2")
    main2.innerHTML=""

    lista2sarga.forEach(element=>{main2.innerHTML+=`<li>${element.name}</li>`})

}
Team2sarga()

function Team2piros(){
    let neve=document.getElementById("team-2-lap").value
    lista2piros.push({nev:neve,ido:120})
    console.log(lista2piros)
    Kiiras2()
}

function Kiiras2(){
    let main2=document.getElementById("felsorolas2piros")
    main2.innerHTML=""

    lista2piros.forEach(element=>{
        main2.innerHTML=`<li>${element.nev} - ${element.ido}</li>`
    })
}


function Tick2(){
    for(i=0;i<lista2piros.length;i++){
        lista2piros[i].ido-=1;


        if(lista2piros[i]==0){
            lista2piros.splice(i,1)
        }
    }
    Kiiras2()
}

let gol1=1;
let gol2=1;


function T1plus(){
   document.getElementById("t1-gol").innerHTML=gol1++

}

function T1minus(){

    document.getElementById("t1-gol").innerHTML=gol1--

}

function T2plus(){
    document.getElementById("t2-gol").innerHTML=gol2++

}

function T2minus(){
   document.getElementById("t2-gol").innerHTML=gol2--

}


