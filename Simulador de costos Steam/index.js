// VARIABLES 

let precioJuego;
let precioFinal;
let impuestoRetencionGanancias;
let impuestoPais; 
let busquedasRecientes = []; 

// FUNCIONES


function imprimirResumen(){
    document.getElementById("precioTotalConImpuestos").innerHTML = ` El precio del juego es:  $  ${Math.floor (precioJuego)}  <br/>  Retención de Ganancias - RG AFIP Nº 4815/2020  ( 35% )     $    ${Math.floor (impuestoRetencionGanancias)}  <br/>  Impuesto PAIS - RG AFIP N° 4659/2020  ( 30% )     $     ${Math.floor (impuestoPais)}  <br/> El valor final del juego es de:     $   ${Math.floor (precioFinal)}  <br/> `;
}


function calcularImpuestos(){ 

    event.preventDefault();

    if (document.getElementById("precioJuego").value !== "") {
        precioJuego = parseInt(document.getElementById("precioJuego").value);
    impuestoRetencionGanancias = precioJuego * 0.35;
    impuestoPais = precioJuego * 0.3;
    precioFinal = precioJuego + impuestoRetencionGanancias + impuestoPais;

    if (precioJuego < 10) {
        alert("No es un precio valido");
        document.getElementById("precioJuego").focus();   
    } else{
        imprimirResumen();
        busquedasRecientes.push(`Precio Original: ${Math.floor (precioJuego)}, precio Final: ${Math.floor (precioFinal)} <br/>`);

    }
    
    document.getElementById("busquedasRecientes").innerHTML = busquedasRecientes;
    document.getElementById("precioJuego").value = "";
        
    }
    else {
        alert("No ingresaste ningun precio!")
    }
    

}


// Programa 

calcularImpuestos();



