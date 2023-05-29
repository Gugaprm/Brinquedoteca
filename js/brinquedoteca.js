 const frm=document.querySelector("form") // faz referência form 
 const resp=document.querySelector("pre")

const criancas=[]//variável global

frm.addEventListener("submit", (e)=>{
    e.preventDefault

    const nome=frm.inNome.value
    const idade=Number(frm.inIdade.value)
    criancas.push({nome,idade})
    frm.reset
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event ("click"))


})