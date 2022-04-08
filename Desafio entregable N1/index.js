/* Si se escribe lo que indica el prompt, se proseguira con la pagina web */
 
let numVerificacion = parseInt(prompt("Hola! Tienes que realizar la siguiente cuenta: \" 2+10/5*(3+3)\" para poder proseguir con la pagina ;) "));
let resultadoClave = 24;

while ( numVerificacion != resultadoClave ) {
    alert("Error, intente nuevamente!")
    numVerificacion = parseInt(prompt("Tienes que realizar la siguiente cuenta: \" 2+10/5*(3+3)\" para poder proseguir con la pagina ;) "));
}

/* Pedir la edad de 10 alumnos, verificar si son mayores a 21 años y devolver en un alert la cantidad de adultos.*/ 

let mayoresVentiuno = [];
let edad = [];
for (let i = 1; i <= 10 ; i++) {
    edad.push(prompt("Ingrese la edad del alumno " + i + ": "));
}

for (let e = 0; e < edad.length; e++) {
    let numeroEdad = edad[e];
    if (numeroEdad >= 21) {
        mayoresVentiuno.push(numeroEdad);
    }  
}

alert("Los alumnos mayores a 21 años son " + mayoresVentiuno.length); 


