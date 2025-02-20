const input = document.querySelector(".input");







function adicionarTarefa(){

    const valorInput = input.value;

    let li = document.createElement("li")
    li.innerHTML = valorInput + "<span onclick='removerTarefa(this)'>❌</span>"

    document.querySelector("ul").appendChild(li)

    document.querySelector(".input").value = ''
    
}



function removerTarefa(li){

    li.parentElement.remove()
    
}

