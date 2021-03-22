/*let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");
let num3 = prompt("Ingrese el tercer número");

if (num1 > num2 && num1 > num3){
    console.log(`El numero mayor es el ${num1}`); 
}else
    if(num2 > num3){
        console.log(`El numero mayor es el ${num2}`); 
    }else{
        console.log(`El numero mayor es el ${num3}`); 
    }


for (let i=0; i<10; i++){
    console.log(i);
}

count =0;
while(count <5){
    console.log(cout);
    count++;
}

switch(variable){ //selector
    case 1: //mismo tipo
        break;
    case 2:
        break;
}

*/

//Evento
//ARREGLOS

/*let myArray=['Pedro','Laura','Andres'];
myArray.push("Juan");
console.log(myArray);
myArray [0]= "Esteban";

for (let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

for(let i=0; i<myArray.length; i++){
    let temaplete = `<div class="alert alert-primary" role="alert">
    ${myArray[i]}
  </div>`
    document.write(temaplete);
}


for(let i=0; i<myArray.length; i++){
    document.write(`<h1>${myArray[i]}</h1>`);
}

for(let i=0; i<5; i++){
    document.write("<h1>Hola</h1>");
}


let myTicket= [5,8,3,12,5,15];
myTicket[3]=24; //CAMBIANDO EL VALOR EN LA POSICION 3 DE UNA ARREGLO (myTicket)

for (let i=0; i<6; i++){
    console-log(myTicket[i])
}*/






//JSON: es un formato de texto sencillo para el intercambio de datos.

//Formas de recorrer un arrreglo JSON

/*for(let i=0; i<arrayJson.length; i++){
    let template = `<div class="alert alert-primary" role="alert">
    ${arrayJson[i].name} - ${arrayJson[i].age} 
    </div>`;
    document.write(template);
}*/

/*for(let i of arrayJson){
    let template = `<div class="alert alert-primary" role="alert">
    ${i.name} - ${i.age} 
    </div>`;
    document.write(template);
}*/

/*for(let i in arrayJson){
    let template = `<div class="alert alert-primary" role="alert">
    ${arrayJson[i].name} - ${arrayJson[i].age} 
    </div>`;
    document.write(template);
}

let myObject = {
    cominedo: "Acción y efecto de comer",
    age: 50,
    money: 25.6,
    porpeties: ["casa","carro","moto"],
    data: {
        test: 25,
        data2: { 
            test:50
        }
   }
}
console.log(myObject.money);
console.log(myObject.porpeties[0]);
console.log(myObject.data.test);

let userData = {
    name: "Pedro",
    age: 52,
    identification: 485162045,
    lastname: "roferto"
}
console.log(userData.name);

let arrayJson = [{
    name: "Pablo",
    age: 62,
    identification: 78451624156,
    lastname: "roferto"
},{
    name: "Roberto",
    age: 47,
    identification: 441,
    lastname: "roferto"
},{
    name: "Juancifuncion",
    age: 59,
    identification: 1165,
    lastname: "roferto"
},{
    name: "Deduardo",
    age: 21,
    identification: 51516,
    lastname: "roferto"
}]

arrayJson.forEach(function(element){
    console.log(element);
})

function showAlert(name){
    alert(`Hola ${name}`);
}

let cards = document.getElementById("cards");

for(let i of arrayJson){
    let template = `<div class="col-12 col-sm-12 col-md-12 col-lg-6" 
    onclick="showAlert('${i.name}')"> 
                        <div class="card">
                            <div class="card-body">
                                ${i.name} - ${i.age}
                            </div>
                        </div>
                    </div>`;
    cards.innerHTML += template; // += aumentar
}
*/
/*
//apiEndpoint en una URL (Dreccion)
let apiEndpoint = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8b8f954a78e74eb897c312e04c24adc0";

// Necesito esperar hasta que llegen los datos para poder continuar con el flujo del programa ASYNC

async function getNews(){
    let cards = Document.getElementById("cards");
     //Trae los datos
    let response = await fetch(apiEndpoint);
    //Traiga el JSON de esos datos
    let news = await response.json(); 
    news.articles.forEach(function(element){
        let template = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-body">
              ${}
            </div>
          </div>
    </div>
        `
    }) 
     //[2,3,4,5,6]
    for(i of news.articles){}

    console.log(news.articles);
}

getNews();*/