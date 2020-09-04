// procurar o botao
document.querySelector ("#add-time")
//quando clicar no botao
.addEventListener ("click", cloneField)

// executar uma acao
function cloneField() {
    // duplicar os campos. Que campo??
    const newfieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //Pegar os campos. Os inputs
    const fields = newfieldContainer.querySelectorAll("input")

    // para cada campo, limpar!!
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele 
        field.value = ""
    })
    



    // colocar na pagina. Onde?
    document.querySelector("#schedule-items").appendChild(newfieldContainer)
    
    


}
 