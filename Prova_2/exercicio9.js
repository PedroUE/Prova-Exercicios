let gols = [3, 3, 0, 5, 1];
let jogadores = ["Leo", "Sam", "Nina", "Gabi", "Caio"];

let maisGols = gols[0];
let artilheiro = jogadores[0];

for(let i = 0; i < gols.length; i++){
    if (gols[i] > maisGols) {
        maisGols = gols[i];
        artilheiro = i;
    }
}

console.log("Exercicio 9");
console.log(`O artilheiro foi ${jogadores[artilheiro]} com ${maisGols} gols!`);
console.log("--------------------------------------------------------------")