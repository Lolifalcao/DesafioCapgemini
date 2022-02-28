// Para modificar alterar a palavra
let palavra = 'ifailuhkqq'

let substring = []
let contador = 0

//sequencia de loopings para popular o array substring
for (let i = 0; i < palavra.length; i++) { 
    for (let j = i; j < palavra.length; j++) {
        // adiciona no array, fatia a string de acordo com o parâmetro passado, trasforma em uma string de caracteres, ordena o array
        substring.push(palavra.slice(i, j+1).split('').sort()) 
    }
}

for (let i = 0; i < substring.length - 1; i++) {
    for (let j = i + 1; j < substring.length; j++) {
        // tranforma array e objetos em string
      if(JSON.stringify(substring[i]) === JSON.stringify(substring[j])) {
        contador++
      }
    }
    
}

console.log(contador)
