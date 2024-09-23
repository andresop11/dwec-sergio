

/* ageCalculator
Tendremos en cuenta dos variables, año actual y año nacimiento para ver la diferencia entre ambos 
y comprobar el año que tengo
*/

function ageCalculator(anyoNac) {

    const anyoActual = new Date().getFullYear();
    let edad = anyoActual - anyoNac;

    return edad;
}


function supplyCalculator(edad,añofinal,cons_x_dia){       
    let añostotales = añofinal-edad; 
    let dias_totales=añostotales*365;     
    let total_cons=cons_x_dia*dias_totales; 

    return total_cons; 
}

function circumference(radio){

    let diametro=radio*2; 

    let longitud=diametro*3.1416; 

    return longitud; 
}

function area(radio){
    
    let area=(radio*radio)*3.1416; 
    
    return area; 

}


function convertTemperature(celsius){

    let farenheit=celsius*31.8; 

    return farenheit; 
}


function convertTemperature2(farenheit){
    
    let celsius=farenheit/31.8; 

    return celsius; 
}