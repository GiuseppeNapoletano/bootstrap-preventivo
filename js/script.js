const preventivoForm = document.getElementById("preventivoform")
const nomeInput = document.getElementById("nome")
const cognomeInput = document.getElementById("cognome")
const emailInput = document.getElementById("email")
const commentoInput = document.getElementById("commento")
const tipolavoroSelect = document.getElementById("tipolavoro")
const codicepromoInput = document.getElementById("codicepromo")
const risultato = document.getElementById("risultato")
preventivoForm.addEventListener("submit", gestisciForm)
const codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
console.log(codiciPromo);




function gestisciForm(event) {
    event.preventDefault()
    const nome = nomeInput.value
    const cognome = cognomeInput.value
    const email = emailInput.value
    const tipolavoro = tipolavoroSelect.value
    const codicepromo = codicepromoInput.value
    

    let prezzoLavoro
    if (tipolavoro === "backend") {
        prezzoLavoro = (20.5 * 10)
    } else if (tipolavoro === "frontend") {
        prezzoLavoro = (15.3 * 10)
    } else if (tipolavoro === "analysis") {
        prezzoLavoro = (33.6 * 10)
    }

    const sconto = codicisconto(codicepromo, prezzoLavoro)
    console.log(sconto);
    
    
    
    preventivoForm.reset()

}

function codicisconto(codiceFunction, prezzoFunction) {
    let sconto25
    if (codiceFunction === "YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24") {
        sconto25 = (prezzoFunction * 0.25)
    } else {
        sconto25 = 0
    }
    return sconto25
}