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
    //Métodos de nuestra clase
    mostrarDatos(){
        console.log(`El autor es ${this.competitor} su libro es ${this.titulo} y vale ${this.precio}. La id del libro es ${this.id}`)
    }
    
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const competitor1 = new Competitors(1,"Nombre1", "Apellido1", 20, "Femenino", "assets/woman.jpg")
const competitor2 = new Competitors(2,"Nombre2", "Apellido2", 19, "Femenino", "assets/woman.jpg")
const competitor3 = new Competitors(3,"Nombre3", "Apellido3", 21, "Masculino", "assets/man.jpg")
const competitor4 = new Competitors(4,"Nombre4", "Apellido4", 20, "Masculino", "assets/man.jpg")

//Cargar array 
const llave = [competitor1,competitor2,competitor3,competitor4]


//Plantillas

let divProductos = document.getElementById("productos")
divProductos.setAttribute("class", "productosEstilos")
function mostrarCatalogo(){

    llave.forEach((competitor)=>{
        let newCompetitor = document.createElement("div")
        newCompetitor.innerHTML = `<article id="${competitor.id}" class="card">
                                        <h3 class="tituloCard">${competitor.name} ${competitor.surname}</h3>
                                        <img src="${competitor.image}" alt="${competitor.name} de ${competitor.surname}">
                                        <div class="content">
                                            <p class="precioCard">Edad: ${competitor.age} años</p>
                                        </div>
                                    </article>`
        divProductos.appendChild(newCompetitor)
    
    })
    
    let btnAgregar = document.getElementsByClassName("agregarBtn")
    
    btnAgregar.forEach((libroBoton)=>{

        libroBoton.addEventListener("click", ()=>{console.log(`Usted ha comprado este producto`)})
    })
    
    
}
function ocultarCatalogo(){
    divProductos.innerHTML =""
}
//Capturamos btn mostrar catalogo y pasamos eventos con function correspondiente
let mostrarCatalogoBtn = document.getElementById("verCatalogo")
mostrarCatalogoBtn.addEventListener("click", mostrarCatalogo)

//Capturamos btn ocultar catalogo y pasamos eventos con function correspondiente
let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo")
ocultarCatalogoBtn.onclick = ocultarCatalogo

//Crear una function que permita al usuario agregar un libro 
//Function vieja con prompts
function newCompetitor(){
    let getName = prompt("Ingrese el autor")
    let getSurname = prompt("Ingrese el año")
    let tituloIngresado = prompt("Ingrese el titulo")
    let precioIngresado = parseInt(prompt("Ingrese el precio"))
    //Utilizamos método length para id dinámica
    let createdCompetitor = new Competitors(llave.length+1,getName, getSurname, tituloIngresado, precioIngresado)
    console.log(createdCompetitor)
    //Push de libroCreado al array
    llave.push(createdCompetitor)
}
//Actualización a inputs :D
function guardarLibro(){
    let nameInput = document.getElementById("nameInput")
    let surnameInput = document.getElementById("surnameInput")
    let sexInput = document.getElementById("sexInput")
    let ageInput = document.getElementById("ageInput")
    let createdCompetitor = new Competitors(llave.length+1, nameInput.value, surnameInput.value, ageInput.value, sexInput.value, "assets/man.jpg")
    console.log(createdCompetitor)
    //Push de libroCreado al array
    llave.push(createdCompetitor)
}

//Capturo guardarLibro boton y asignamos evento
const guardarLibroBtn = document.getElementById("guardarLibroBtn")
guardarLibroBtn.addEventListener("click", guardarLibro)

localStorage.setItem("producto", libro1)
localStorage.setItem("misLibros", llave)

let libro1JSON = JSON.stringify(libro1)
// console.log(libro1JSON)
localStorage.setItem("productoJSON", libro1JSON)
let arrayJSON = JSON.stringify(llave)
localStorage.setItem("arrayJSON", arrayJSON)

let capturaLibro1 = localStorage.getItem("productoJSON")
console.log(libro1)
console.log(capturaLibro1)
let libro1parseado = JSON.parse(capturaLibro1)
console.log (libro1parseado)

let arrayParseado = JSON.parse(localStorage.getItem("arrayJSON"))
console.log(arrayParseado)
for(let competitor of arrayParseado){
    console.log(competitor.autor)
}










