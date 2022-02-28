//Mude o número de 'n' para modificar a base e altura da escada
let n = 6
let espaco = ' '
let asterisco = '*'
let contAsterisco = 1
let contEspaco = n - 1

for (let contador = 0; contador < n; contador++) {
    console.log(espaco.repeat(contEspaco) + asterisco.repeat(contAsterisco))
    contEspaco--
    contAsterisco++
}