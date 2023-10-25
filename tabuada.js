const frm = document.queyselector("form")
const resp = document.queyselector("pre")

//ouvinte
frm.addeventlistener("submit",(e) =>{
    e.preventdeflault()
    
    const numero = number(frfm.inNumero.value)
    let resposta =""
    //cria um laço de repetição
    for(let i = 1; i <= 10;i++){
        resposta = resposta+ numero + "X"+i+ "=" + (numero* i)+ "\n"
    }
    resp.innertext= resposta
    })