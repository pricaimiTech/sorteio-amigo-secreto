let listNames = [];
let listaAmigos = []
let newName;

/**
 * @description adiciona o nome na lista de sorteio e limpa o campo de input nome
 */
function addName() {
    newName = document.getElementById("nome-amigo").value
    listNames = setListName(newName)
    cleanInput()
}

/**
 * 
 * @param {*} name novo nome a ser adicionado
 * @returns lista de nomes para o sorteio
 */
function setListName(name) {
    if (name === "") {
        alert("Adicione um nome válido")
    } else {
        listNames = updateSortListNames(name)
    }
    return listNames
}

function updateSortListNames(name) {
    let paragrafo;
    listaAmigos = document.getElementById('lista-amigos');
    listNames.push(name)
    paragrafo = document.createElement('p')
    paragrafo.textContent = name;
    listaAmigos.appendChild(paragrafo);

    return listNames

}
/**
 * @description reiniciar o jogo
 */
function restart() {
    listNames = []
    cleanInput()
    cleanNameList()
    cleanSortList()
}



/**
 * @description realiza o sorteio
 * @argument {randomNames} - lista criada para embaralhar os nomes da listaNames para sortear
 * @argument {sorteio} - div onde será exibido o sorteio
 * @argument {randomIndex} - index randomico para sortear os nomes da listaNames
 */
function sortName() {
    let sorteio = document.getElementById('lista-sorteio');
    let randomNames = listNames
    let randomIndex;


    //math.random pelo tamanho do array listaNames
    for (let index = 0; index < listNames.length; index++) {
        randomIndex = Math.floor(Math.random() * randomNames.length)
        // a pessoa não pode tirar o próprio nome
        while (listNames[index] === randomNames[randomIndex]) {
            randomIndex = Math.floor(Math.random() * randomNames.length)
        }
        sorteio.innerHTML = sorteio.innerHTML + listNames[index] + ' --> ' + randomNames[randomIndex] + '<br>';
        //remover o nome sorteado da lista de nomes
        randomNames = removeName(randomNames, randomIndex)
    }
}


/**
 * @description deleta um nome da lista para o sorteio
 * @param {*} index 
 */
function removeName(randomNames, randomIndex) {
    randomNames = randomNames.filter((name, index) => index !== randomIndex)
    return randomNames
}

/**
 * @description limpa o campo de input nome 
 */
function cleanInput() {
    document.getElementById("nome-amigo").value = ""
}

/**
 * @description limpa a lista de amigos
 */
function cleanNameList() {
    document.getElementById("lista-amigos").innerHTML = ""
    console.log(`Lista de nomes reiniciada: ${listNames}`);
}

/**
 * @description limpa a lista dos nomes sorteados
 */
function cleanSortList() {
    document.getElementById('lista-sorteio').innerHTML = ""
}