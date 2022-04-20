// VARIABLES 
const btnModoOscuro = document.querySelector("#btnModoOscuro");
let nombreJuego;
let engañaPichanga = false;
let precioJuego;
let precioFinal;
let impuestoRetencionGanancias;
let impuestoPais; 
let busquedasRecientes = []; 



// FUNCIONES

function modoOscuro(){
    document.body.classList.toggle("modoOscuro");
    btnModoOscuro.classList.toggle("active");

    if(document.body.classList.contains("modoOscuro")){
        localStorage.setItem("modo-oscuro", "true")
    }else{
        localStorage.setItem("modo-oscuro", "false")
    }
       
}


function imprimirResumen(){
    document.getElementById("precioTotalConImpuestos").innerHTML = ` <br/> El precio del juego es:  $  ${Math.floor (precioJuego)}  <br/><br/>  Retención de Ganancias - RG AFIP Nº 4815/2020  ( 35% )     $    ${Math.floor (impuestoRetencionGanancias)}  <br/><br/>  Impuesto PAIS - RG AFIP N° 4659/2020  ( 30% )     $     ${Math.floor (impuestoPais)}  <br/><br/> <strong class="precioFinalTexto"> EL VALOR CON IMPUESTOS ES DE:     $   ${Math.floor (precioFinal)} </strong> <br/><br/> `;
}


function calcularImpuestos(){ 

    if (engañaPichanga === true) {

        if (document.getElementById("precioJuego").value !== "") {
        nombreJuego = document.querySelector("#nombreJuego").value;
        precioJuego = parseInt(document.getElementById("precioJuego").value);
        impuestoRetencionGanancias = precioJuego * 0.35;
        impuestoPais = precioJuego * 0.3;
        precioFinal = precioJuego + impuestoRetencionGanancias + impuestoPais;
        
    
        if (precioJuego < 10) {
            alert("No es un precio valido");
            document.getElementById("precioJuego").focus();   
        } else{
            imprimirResumen();
            busquedasRecientes.push(`<strong>${(nombreJuego)}</strong><br> Precio original:  <strong> AR$ ${Math.floor (precioJuego)} </strong>  -    Con impuestos: <strong> AR$ ${Math.floor (precioFinal)} </strong> <br>`);
    
        }
        
        document.getElementById("busquedasRecientes").innerHTML = busquedasRecientes;
        document.getElementById("precioJuego").value = "";
            
        }
        else {
            alert("No ingresaste ningun precio!")
        }
        
    } else{
        engañaPichanga = true;
    }

    
    

}


// Programa 

document.querySelector("#btnCalculo").onclick = calcularImpuestos;
btnModoOscuro.addEventListener("click", modoOscuro);

if(localStorage.getItem("modo-oscuro") === "true"){
    document.body.classList.add("modoOscuro");
    btnModoOscuro.classList.add("active");
}else{
    document.body.classList.remove("modoOscuro");
    btnModoOscuro.classList.remove("active");
}




   




