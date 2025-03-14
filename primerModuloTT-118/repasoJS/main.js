let entradaUsuario = document.getElementById("entradaUsuario")
let btnCalcular = document.getElementById("btnCalcular")
let salidaPar = document.getElementById("salidaPar")
let entradaMultiplo = document.getElementById("entradaMultiplo")
let numeroEjercicioEsPar = 0
let numeroMultiplo = 1
entradaUsuario.addEventListener("input",(evento)=>{
    numeroEjercicioEsPar = evento.target.value
    console.log(numeroEjercicioEsPar)
})
entradaMultiplo.addEventListener("input",(evento)=>{
    numeroMultiplo = evento.target.value
    console.log(numeroMultiplo)
})
function esPar(entradaFuncion){
    if(entradaFuncion%numeroMultiplo==0){
        return " es multiplo de " + numeroMultiplo
    }else{
        return " no es multiplo de " + numeroMultiplo
    }
}

btnCalcular.addEventListener("click",()=>{
    resultado = esPar(numeroEjercicioEsPar)
    console.log(resultado)
    let hijo = document.createElement("li")
    hijo.innerHTML = numeroEjercicioEsPar + " " + resultado
    salidaPar.appendChild(hijo)
})