let lista1=[]

let lista2=[]


let idoszal1=setInterval(Tick1,1000)

function Team1sarga(){
    let nev=document.getElementById("team-1-lap").value;
    lista1.push({neve:nev});
    console.log(lista1)


    let main=document.getElementById("felsorol1");
    main.innerHTML=""

    lista1.forEach(element => {
        main.innerHTML += `<li>${element.neve}</li>`/*ide kell majd egy kép egy sárga lapról*/
    });

}

Team1sarga()



function Team1piros(){
    let nev=document.getElementById("team-1-lap").value;
    lista1.push({neve:nev, time:120});
    console.log(lista1)


    

}

function Kiiras1(){
    let main=document.getElementById("felsorol1");
    main.innerHTML=""

    lista1.forEach(element => {
        main.innerHTML += `<li>${element.neve} - ${element.time}</li>`/*ide kell majd egy kép egy piros lapról*/
    });
}
Kiiras1()

function Tick1(){
    for(i=0; i< lista1; i++){
        lista1[i].time -= 1

        if(lista1[i].time==0){
            lista1.splice(i,1)
        }
    }

    Kiiras1()
    /*valamiért még nem jó*/
}