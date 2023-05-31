const frm = document.querySelector("form") // faz referência form
const resp = document.querySelector("pre")

const criancas = [] //variável global

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value // pega os valores dos nomes enviados ao form
    const idade = Number(frm.inIdade.value) //pega os valores das idades enviados ao form
    criancas.push({nome, idade}) // add dados ao vetor
    frm.reset() // limpa os campos
    frm
        .inNome
        .focus() // posiciona o cursor no campo

})

frm
    .btListar
    .addEventListener("click", () => {

        if (criancas.length == 0) { // verifica se o vetor está vazio
            alert("Não há crianças")
            return

        }

        let lista = "" //para concatenar lista de crianças
        for (const crianca of criancas) {
            const {nome, idade} = crianca // desestrutura do objeto
            lista += nome + " - " + idade + " anos\n "
        }
        resp.innerText = lista //exibe a lista

    })
frm
    .btResumir
    .addEventListener("click", () => {
        if (criancas.length == 0) {
            alert("Não há crianças na lista")
            return
        }
        const copia = [...criancas] // cria cópia do vetor criança
        copia.sort((a, b) => a.idade - b.idade) // ordena pela idade
        let resumo = "" // para concatenar saída
        let aux = copia[0].idade // menor idade do vetor ordenado
        let nomes = [] // para inserir nomes de cada idade
        for (const crianca of copia) {
            const {nome, idade} = crianca
            if (idade == aux) { // se é da mesma idade auxiliar...
                nomes.push(nome) // adiciona ao vetor nomes
            } else { // senão, monta o resumo para cada idade
                resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
                resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
                resumo += "(" + nomes.join(", ") + ")\n\n"
                aux = idade // obtém a nova idade na ordem
                nomes = [] // limpa o vetor dos nomes
                nomes.push(nome) // adiciona o primeiro da nova idade
            }
        }
        // adiciona a última criança
        resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
        resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
        resumo += "(" + nomes.join(", ") + ")\n\n"
        resp.innerText = resumo // exibe a resposta
    })
     
    frm.btLimpar.addEventListener("click", ()=>{

        frm.form=""
    })

                                                                                                                               