
var pokemonEL = document.querySelector('.pokemon')

for (i = 0; i < pokemons.length; i++){
    var multEL = document.createElement('div')
    multEL.setAttribute("class", "mult")

    pokemonEL.appendChild(multEL)

    var idPEl = document.createElement('h4')
    var nameDivEl = document.createElement('h3')
    var imgImgEl = document.createElement('img')
    var typeSpanEl = document.createElement('span')
    var heightPEl = document.createElement('p')
    var weightPEl = document.createElement('p')

    imgImgEl.src = pokemons[i].img
    multEL.appendChild(imgImgEl)
    imgImgEl.setAttribute("class")

    idPEl.textContent = pokemons[i].id
    multEL.appendChild(idPEl)

    nameDivEl.textContent = pokemons[i].name
    multEL.appendChild(nameDivEl)


    typeSpanEl.textContent = pokemons[i].type
    multEL.appendChild(typeSpanEl)

    heightPEl.textContent = pokemons[i].height
    multEL.appendChild(heightPEl)

    weightPEl.textContent = pokemons[i].weight
    multEL.appendChild(weightPEl)
}
