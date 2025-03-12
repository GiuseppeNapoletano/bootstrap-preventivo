const preventivoForm = document.getElementById("preventivoform")
const nomeInput = document.getElementById("nome")
const cognomeInput = document.getElementById("cognome")
const emailInput = document.getElementById("email")
const commentoInput = document.getElementById("commento")
const tipolavoroSelect = document.getElementById("tipolavoro")
const codicepromoInput = document.getElementById("codicepromo")
const risultato = document.getElementById("risultato")
const promofailed = document.getElementById("promofailed")
preventivoForm.addEventListener("submit", gestisciForm)




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

    const prezzoFinale = codicisconto(codicepromo, prezzoLavoro, promofailed)
    const frasePrezzoFinale = `Prezzo finale\n ${prezzoFinale}€`
    risultato.innerText = frasePrezzoFinale
     
   
    preventivoForm.reset()

}

function codicisconto(coupon, totalelavoro, couponsbagliato) {
    const arrayPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
    const ammontare = totalelavoro
    let prezzoScontato
    const messaggio = `Codice promo errato! Inseriscine uno nuovo!`
    const codiceCoupon  = coupon.toUpperCase()
    if (arrayPromo.includes(codiceCoupon)) {
        prezzoScontato = ammontare * 0.75
        couponsbagliato.innerText = ``
    } else if (codiceCoupon === ``) {
        prezzoScontato = ammontare 
        couponsbagliato.innerText = ``
    } else {
        prezzoScontato = ammontare
        couponsbagliato.innerText = messaggio
    }

    return prezzoScontato
}

