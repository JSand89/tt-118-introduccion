let entradaUsuario = document.getElementById("entradaUsuario")
let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salida")
let numeroEjercicioEsPar = 0

function flores(numero){
if ((numero %3==0 && numero%5==0)&&(numero%6==0 && numero%7==0)){
    return "Violeta"
}else if(numero %3==0 && numero%5==0){
    return "Margarita"
} else if(numero%6==0 && numero%7==0){
    return "Rosa"
}else{
    return "No salio nada, no mostrar al cliente solo para el ejemplo"
}
}
console.log(flores (210))


