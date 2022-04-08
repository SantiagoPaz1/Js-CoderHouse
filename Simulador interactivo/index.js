

   /* Programa para agregar el impuesto a la compra en el exterior y calcular el envio segun el pais*/

   /* Pedimos el precio en dolares para convertirlo al valor del pais indicado*/
   
   let precioBase = parseInt(prompt("Indique el precio del producto en dolares: "));
   let lugarEnvio = prompt("Indica a que pais se hara el envio. Argentina - Chile - Uruguay - Peru - Paraguay - Brasil ");

   switch (lugarEnvio) {
        case "Argentina":
            let precioTotalArs = ((precioBase * 1.65) * 190) + 1500;
           alert("El precio con 65% impuestos mas el envio es de: $" + precioTotalArs + " Pesos Argentinos"); 
           break;
        case "Chile":
            let precioTotalCl = (precioBase * 779) + 5800; 
            alert("El precio total estimativo mas el envio es de: $" + precioTotalCl + " Pesos Chilenos");        
           break;
        case "Uruguay":
            let precioTotalUy = (precioBase * 41) + 300; 
            alert("El precio total estimativo mas el envio es de: $" + precioTotalUy + " Pesos uruguayos");        
           break;
        case "Peru":
            let precioTotalPe = (precioBase * 3.73) + 30;    
            alert("El precio total estimativo mas el envio es de: $" + precioTotalPe + " Soles");     
           break;
        case "Paraguay":
            let precioTotalPy = (precioTotal * 7000) + 49000;  
            alert("El precio total estimativo mas el envio es de: $" + precioTotalPy + " Guaranies");       
            break;
        case "Brasil":
            let precioTotalBr = (precioTotal * 4.79) + 35;   
            alert("El precio total estimativo mas el envio es de: $" + precioTotalBr + " Reales");      
            break;
   
       default: 
       alert("Ha escrito mal el nombre del pais, reinicie la pagina e intente nuevamente")
           break;
   }






