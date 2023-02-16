let edad = Number(prompt("Ingrese su edad:"));
switch(true){

    case (edad>=18): console.log("Es mayor de edad");
    break;

    default: console.error("La edad ingresada no cumple con los parámetros")
    break;
}
