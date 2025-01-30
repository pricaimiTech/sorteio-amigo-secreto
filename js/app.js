let listNames = [];
let newName;

function addName() {
    newName = document.getElementById("nome-amigo").value
    listNames = setListName(newName)
    cleanInput()
}

function setListName(name) {
    if(name === ""){
        alert("Adicione um nome válido")
    }else{
        listNames.push(name)
        document.getElementById("lista-amigos").innerHTML = listNames
    }
    return listNames
}

function restart() {
    listNames = []
    cleanInput()
    document.getElementById("lista-amigos").innerHTML = ""
    console.log(`Lista de nomes reiniciada: ${listNames}`);
    document.getElementById('lista-sorteio').innerHTML = ""
}

function cleanInput() {
    document.getElementById("nome-amigo").value = ""
}

/**
 * @argument {randomNames} - lista criada para embaralhar os nomes da listaNames para sortear
 * @argument {sorteio} - div onde será exibido o sorteio
 * @argument {randomIndex} - index randomico para sortear os nomes da listaNames
 */
function sortName() {
    let sorteio = document.getElementById('lista-sorteio');
    let randomNames = listNames
    let randomIndex;
    console.log(`Nomes para o sorteio ${listNames}`);


    //math.random pelo tamanho do array listaNames
    for (let index = 0; index < listNames.length; index++) {
        randomIndex = Math.floor(Math.random() * randomNames.length)
        // a pessoa não pode tirar o próprio nome
        while (listNames[index] === randomNames[randomIndex]) {
            randomIndex = Math.floor(Math.random() * randomNames.length)
        }
        sorteio.innerHTML = sorteio.innerHTML + listNames[index] + ' --> ' + randomNames[randomIndex] + '<br>';
        //remover o nome sorteado da lista de nomes
        randomNames = randomNames.filter((name, index) => index !== randomIndex)
        console.log(`Pares: ${listNames[index] + ' --> ' + randomNames[randomIndex]}`)
        console.log(`Nomes a serem sorteados ${randomNames}`);

    }
}