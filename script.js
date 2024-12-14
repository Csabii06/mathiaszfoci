let lista1sarga=[]
let lista1piros=[]
let lista2sarga=[]
let lista2piros=[]


let idoszal1=setInterval(Tick1,1000)

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


    

}

function Kiiras1(){
    let main=document.getElementById("felsorolas1piros");
    main.innerHTML=""

    lista1piros.forEach(element => {
        main.innerHTML += `<li>${element.neve} - ${element.time}</li>`/*ide kell majd egy kép egy piros lapról*/
    });
}
Kiiras1()

function Tick1(){
    for(i=0; i< lista1piros; i++){
        lista1piros[i].time -= 1

        if(lista1piros[i].time==0){
            lista1piros.splice(i,1)
        }
    }

    Kiiras1()
    /*valamiért még nem jó*/
}
/*
function Teams(){
    let team1=document.getElementById("team1").value
    let team2=document.getElementById("team2").value

}



function Team2sarga(){
    let nev=document.getElementById("team-2-lap").value;
    lista2sarga.push({neve:nev});
    console.log(lista2sarga)


    let main=document.getElementById("felsorol2");
    main.innerHTML=""

    lista2sarga.forEach(element => {
        main.innerHTML += `<li>${element.neve}</li>`ide kell majd egy kép egy sárga lapról
    });

}

Team2sarga()



function Team2piros(){
    let nev=document.getElementById("team-2-lap").value;
    lista2piros.push({neve:nev, time:120});
    console.log(lista2piros)


    

}

function Kiiras2(){
    let main=document.getElementById("felsorolas2piros");
    main.innerHTML=""

    lista2piros.forEach(element => {
        main.innerHTML += `<li>${element.neve} - ${element.time}</li>`ide kell majd egy kép egy piros lapról
    });
}
Kiiras2()

function Tick2(){
    for(i=0; i< lista2piros; i++){
        lista2piros[i].time -= 1

        if(lista2piros[i].time==0){
            lista2piros.splice(i,1)
        }
    }

    Kiiras2()
    valamiért még nem jó
}
*/