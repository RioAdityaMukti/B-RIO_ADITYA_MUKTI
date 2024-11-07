//NO 1 Define Practice
function printHeart() {
    console.log("<3");
}
printHeart(); // Menjalankan fungsi sekali, yang akan mencetak "<3" ke konsol

//NO 2 Return Value Practice
function dua(a, b) {
    return a * b;
}
console.log(dua(2, 3)); // 6
console.log(dua(9, 9)); // 81
console.log(dua(5, 4)); // 20

//NO 3 Scope Practice
//A
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe(); // Menjalankan fungsi observe

//B
let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal();         // Menjalankan fungsi handleAnimal
console.log(deadlyAnimal); // Mencetak deadlyAnimal yang global
