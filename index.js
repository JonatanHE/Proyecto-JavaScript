//Declaración de la clase
class Competitors {
     constructor(id, name, surname, age, sex, image){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.sex = sex,
        this.image = image
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const competitor1 = new Competitors(1,"Nombre1", "Apellido1", 20, "Femenino", "assets/woman.jpg")
// const competitor2 = new Competitors(2,"Nombre2", "Apellido2", 19, "Femenino", "assets/woman.jpg")
// const competitor3 = new Competitors(3,"Nombre3", "Apellido3", 21, "Masculino", "assets/man.jpg")
// const competitor4 = new Competitors(4,"Nombre4", "Apellido4", 20, "Masculino", "assets/man.jpg")

//Cargar array 
const llave = [competitor1]


//Plantillas

let divCompetitors = document.getElementById("competitors")
divCompetitors.setAttribute("class", "productosEstilos")
function showCompetitors(){
    ocultarCatalogo()
    llave.forEach((competitor)=>{
        let newCompetitor = document.createElement("div")
        newCompetitor.innerHTML = ` <h3 class="numberCompetitor">Participante: ${competitor.id}</h3>
                                    <article id="${competitor.id}" class="card">
                                        <h3 class="tituloCard">${competitor.name} ${competitor.surname}</h3>
                                        <img src="${competitor.image}" alt="${competitor.name} de ${competitor.surname}">
                                        <div class="content">
                                            <p class="ageCard">Edad: ${competitor.age} años</p>
                                        </div>
                                    </article>`
        divCompetitors.appendChild(newCompetitor)
    })
}
function ocultarCatalogo(){
    divCompetitors.innerHTML =""
}
//Capturamos btn mostrar catalogo y pasamos eventos con function correspondiente
let showCompetitorsBtn = document.getElementById("verCatalogo")
showCompetitorsBtn.addEventListener("click", showCompetitors)

//Capturamos btn ocultar catalogo y pasamos eventos con function correspondiente
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

//Crear una function para agregar competidor
//Actualización a inputs
function saveCompetitor(){
    let nameInput = document.getElementById("nameInput")
    let surnameInput = document.getElementById("surnameInput")
    let sexInput = document.getElementById("sexInput")
    let ageInput = document.getElementById("ageInput")
    let createdCompetitor = new Competitors(llave.length+1, nameInput.value, surnameInput.value, ageInput.value, sexInput.value, "assets/man.jpg")
    console.log(createdCompetitor)
    //Push de saveCompetitor al array
    llave.push(createdCompetitor)
    //Se vacian los inputs al guardar competidor
    form.reset()
}

//Se guarda competidor
const saveCompetitorBtn = document.getElementById("saveCompetitorBtn")
saveCompetitorBtn.addEventListener("click", saveCompetitor)

localStorage.setItem("competidores", competitor1)
localStorage.setItem("llave", llave)

let competitor1JSON = JSON.stringify(competitor1)
// console.log(competitor1JSON)
localStorage.setItem("productoJSON", competitor1JSON)
let arrayJSON = JSON.stringify(llave)
localStorage.setItem("arrayJSON", arrayJSON)

let capturaCompetitor1 = localStorage.getItem("productoJSON")
console.log(competitor1)
console.log(capturaCompetitor1)
let competitor1parseado = JSON.parse(capturaCompetitor1)
console.log (competitor1parseado)

let arrayParseado = JSON.parse(localStorage.getItem("arrayJSON"))
console.log(arrayParseado)
for(let competitor of arrayParseado){
    console.log(competitor.autor)
}