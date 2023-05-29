 const frm=document.querySelector("form") // faz referência form 
 const resp=document.querySelector("pre")

const criancas=[]//variável global

frm.addEventListener("submit", (e)=>{
    e.preventDefault

    const nome=frm.inNome.value// pega os valores dos nomes enviados ao form
    const idade=Number(frm.inIdade.value) //pega os valores das idades enviados ao form
    criancas.push({nome,idade})// add dados ao vetor 
    frm.reset // limpa os campos
    frm.inNome.focus() // posiciona o cursor no campo
    frm.btListar.dispatchEvent(new Event ("click"))

})

frm.btListar,addEventListener("click",()=>{

    

})