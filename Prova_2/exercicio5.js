let curtidas = [12, 25, 8, 32, 16, 20];
let i = 0;
let maioCurtida = curtidas[0];

while (i < curtidas.length){
    if (curtidas[i] > maioCurtida){
        maioCurtida = curtidas[i];
    }
    i++
}

console.log("Exercicio 5");
console.log("O maior numero de curtidas: ", maioCurtida);
console.log("----------------------------------------------");