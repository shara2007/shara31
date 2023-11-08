const frm = document.queryselector("form")
const resp = document.queryselector("h4")

//ouvinte

frm.addeventlistener("submit", (e)=>{
    e. preventdefault()

    const pessoas = number(frm.inNumero.value)
    const peixe = number(frm.inPeixe.value)
    ler resultado
    if(peixe > pessoas){
        resultado = (pessoas * 20) + ((peixe - pessoas)*12)
    } else{
        resultado = pessoas * 20
    }
    resp.innertext= `N de pessoas:${pessoas}\n
                     N de peixes: ${peixe}\n
                     pagar:R$ ${resultado.tofixed(2)}`
})