let entradaUsuarioPar = document.getElementById("entradaUsuarioPar")
let btnPar = document.getElementById("btnPar")
let salidaPar = document.getElementById("salidaPar")
let numeroEjercicioEsPar = 0

entradaUsuarioPar.addEventListener("input",
    (evento) => {
        numeroEjercicioEsPar = evento.target.value
        console.log(numeroEjercicioEsPar)

    })
function esPar(entradaFuncion) {
    if (entradaFuncion % 2 == 0) {
        return "es par"
    }
    else {
        return "no es par"
    }
}
btnPar.addEventListener("click", () => {
    let resultado = esPar(numeroEjercicioEsPar)
    let hijo = document.createElement("h4")
    hijo.innerHTML = numeroEjercicioEsPar +" "+resultado 
    salidaPar.appendChild(hijo)
})

console.log(esPar(5))
// if(numero%2==0){
//     console.log("El numero ", numero, " es par")
// }
// else{
//     console.log("El numero ", numero, " no es par")
// }

// if ((numero %3==0 && numero%5==0)&&(numero%6==0 && numero%7==0)){
//     console.log("Violeta")
// }else if(numero %3==0 && numero%5==0){
//     console.log("Margarita")
// } else if(numero%6==0 && numero%7==0){
//     console.log("Rosa")
// }else{
//     console.log("No salio nada, no mostrar al cliente solo para el ejemplo")
// }

// if(numero %3==0 && numero%5==0){
//     if(numero%6==0 && numero%7==0){
//         console.log("Violeta")
//     } else{
//         console.log("Margarita")
//     }
// }else if(numero%6==0 && numero%7==0){
//     console.log("Rosa")
// }else {
//     console.log("No salio nada, no mostrar al cliente solo para el ejemplo")
// }