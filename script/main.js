// dichiarazione delle costanti per gli elementi del DOM
const button = document.getElementById("send");
const head = document.getElementById("domanda");
const img = document.getElementById("feed");
const glabel = document.getElementById("giuste");
const slabel = document.getElementById("sbagliate");
const plabel = document.getElementById("perc");
const fieldWidth = 1920;
const fieldHeight = 1080;
const field = document.getElementById("field");
field.style.position = "absolute";
field.style.transformOrigin = `0px 0px`;
field.style.width = fieldWidth + "px";
field.style.height = fieldHeight + "px";


//dichiarazione degli array e edeeel variabili usate per i controlli
let risposte = [];
let label = [];
let domused = [];
let g = 0;
let s = 0;
let tot = g + s;
let perc = g * tot / 100;
let max = 0;

//ricerca del valore massimo tra le percentuali nel file saves
for(let i = 0; i < saves.length-2; i++){
    for(let j = i+1; j < saves.length-1; j++){
        if(saves[j]['perc'] > max)
            max = saves[i]['perc'];
    }
}

//gestione del field per il ridimensionamento del DOM
function fit() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let xScale = windowWidth / fieldWidth;
    let yScale = windowHeight / fieldHeight;
    let scale = Math.min(xScale, yScale);

    let xMargin = (windowWidth - scale * fieldWidth) / 2;
    let yMargin = (windowHeight - scale * fieldHeight) / 2;

    field.style.transform = `scale(${scale})`;
    field.style.left = `${xMargin}px`;
    field.style.top = `${yMargin}px`;
}

//funzione per il salvataggio dei dati
function saveRecord(data, name, ext){
    let file = new Blob([data], {ext});
    let a = document.createElement("a");
    let url = URL.createObjectURL(file);

    a.href = url;
    a.download = `${name}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
}


//funzione per il setting delle domande
function set(){
    //inizializzazione
    img.src = "img/default.png";
    risposte = document.getElementsByName("option");
    label = document.getElementsByName("label");
    for (let i = 0; i < risposte.length; i++) {
        risposte[i].value = "0";
    }
    let used = [];

    // Debugging log
    console.log("domused.length:", domused.length);
    console.log("Object.keys(quest).length:", Object.keys(quest).length);

    //se le domande scelte sono > o = a quelle totali
    if (domused.length >= Object.keys(quest).length) {
        console.log("Entrato nell'if delle domande finite");
        head.innerHTML = "Hai finito le domande, GG!";
        
        //se la percentuale è maggiore di quella massima
        if (perc > max) {
            setTimeout(() => {
                head.innerHTML = "hai effettuato il tuo record!!!";
            }, 2000);
        }

        //setto un timeout per far si che si vedano le scritte
        setTimeout(() => {
            saves.push({'perc': perc});
            let save = "const saves = " + JSON.stringify(saves, null, "\t");
            saveRecord(save, "saves", "js");
            return;
        }, 3000);
        return; // Assicurati di uscire dalla funzione
    }

    //cho1 è la variabile che si occupa di scegliere quale domanda far vedere, la estraggo tra 0 e il numero di domande disponibile
    let cho1 = Math.floor(Math.random() * Object.keys(quest).length);

    //finchè la domanda è già stata scelta ne scelgo un altra
    while (domused.includes(cho1)) {
        cho1 = Math.floor(Math.random() * Object.keys(quest).length);
    }

    //inserisco la domanda tra quelle scelte
    domused.push(cho1);
    
    head.innerHTML = quest[cho1].dom;

    //scelgo l'ordine e imposto quella giusta
    let cho2 = Math.floor(Math.random() * 4);
    risposte[cho2].value = "1";
    label[cho2].innerHTML = quest[cho1].giusto;
    used.push(cho2);
    
    //metto in ordine casuale quelle sbagliate
    for (let x = 0; x < 3; x++) {
        while (used.includes(cho2)) {
            cho2 = Math.floor(Math.random() * 4);
        }
        risposte[cho2].value = "0";
        label[cho2].innerHTML = quest[cho1].sbagliato[x];
        used.push(cho2);
    }
}

//controllo se la risposta scelta è giusta
function check(){
    let corretto = false;
    for(const x in risposte){
        if(Number(risposte[x].value) && risposte[x].checked){
            corretto = !corretto;
            img.src = "img/right.png";
            g++;
            tot++;
        }
    }
    if(!corretto){
        img.src ="img/wrong.png";
        s++;
        tot++;
    }
    perc = (g * 100) / tot;
    glabel.innerHTML = String(g);
    slabel.innerHTML = String(s);
    plabel.innerHTML = String(Math.floor(perc)) + "%";
    setTimeout(()=>{set()}, 2000);
}


//gestione degli eventi
button.addEventListener("click", ()=>{check()});
document.addEventListener("resize", fit);
window.addEventListener("DOMContentLoaded", () => {set(); fit();});
