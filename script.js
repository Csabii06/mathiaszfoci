let lista1sarga=[]
let lista1piros=[]
let lista2sarga=[]
let lista2piros=[]


let idoszal1=setInterval(Tick1,1000)
let idoszal2=setInterval(Tick2,1000)



function Teams(){
    let cs1=document.getElementById("team1").value
    document.getElementById("t1").innerHTML=cs1

    let cs2=document.getElementById("team2").value
    document.getElementById("t2").innerHTML=cs2

}


function Team1sarga(){
    let nev=document.getElementById("team-1-lap").value;
    lista1sarga.push({neve:nev});
    console.log(lista1sarga)


    let main=document.getElementById("felsorol1");
    main.innerHTML=""

    lista1sarga.forEach(element => {
        main.innerHTML += `<li>${element.neve}</li>`/*ide kell majd egy kép egy sárga lapról*/
    });

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


/*
function T1plus(){
    let gol=parseInt(document.getElementById("t1-gol").value)
    gol.innerHTML++
    console.log(gol)
}
T1plus()

function T1minus(){

    let gol=parseInt(document.getElementById("t1-gol").value)
    gol.innerHTML--
    console.log(gol)

}
T1minus()*/