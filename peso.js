// cria referencial ao form
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte
form.addEventListener(Submit, (e)=>{
    e.preventdefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const altura = form.number(form.inAltura.value)
    
    //calculando peso ideal
    let peso
    if (masculino){
        peso= 22 = * Math.pow(altura,2)
    } else {
        peso= 21 = * Math.pow(altura,2)
    }
    //apresenta a resposta
    resp.innerText = `S{nome} seu peso idealé: ${peso.toFixed(3)}kg`
})
//segundo ouvinte. limpa o conteúdo de h3
form.addEventListener("reset",(e)=>{resp.innerText="" // limpa o conteúdo de h3
})