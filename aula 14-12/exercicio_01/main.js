// Sem utilizar JSON E LISTA
// CRIA UM SITE QUE PERMITA O USUARIO CADASTRAR UMA LISTA DE COMPRAS
// NAO USE PROMPT
// USE INPUT, BUTTON, UL, LI

document.addEventListener("DOMContentLoaded", function () {
    const inputItem = document.querySelector(".inp-item")
    const buttonAddItem = document.querySelector(".novo-item")
    const itemList = document.querySelector(".lista-itens")

    buttonAddItem.addEventListener("click", addItem);
    inputItem.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addItem()
        }
    })

    function addItem() {
        const newItemText = inputItem.value.trim()

        if (newItemText !== "") {
            const newItem = document.createElement("li")
            newItem.textContent = newItemText
            itemList.appendChild(newItem)
            inputItem.value = ""
        }
    }
})

