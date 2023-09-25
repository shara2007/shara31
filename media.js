//criar referência ao form e elementos de resposta do programa

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector ("h4") 

//cria um ouvinte
form.addEventListener("submit",(e)=> {
e.preventDefault() //evitar o envio do form 
const nome = from.inNome.value //obtém o nome 
const nota = Number(form.inNote1.value) //obtém a primeira nota 
const nota2 = Number(form.inNote2.value) //obtém a segunda nota 
const media = (nota1+nota2)/2 // media de notas
resp1.innerText = `media das notas ${ media.toFixed(2)}`
//criar as condicionias
if(media>=7){
resp2.innerText=` parabéns ${ nome}! você foi aprovado(a)`
resp2.style.color= "blue"
} else if ( media >=4){
    resp2.innerText = `atenção ${ nome}! você está de exames`
    resp2.style.color = "green"
} else{
    resp2.innerText = `pos ${nome}! você foi reprovado(a)`
    resp2.style.color = "red"
}
})