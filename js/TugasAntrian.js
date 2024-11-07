// Membuat antrian awal pembeli
let antrian = ["ray", "fiki", "fadhilla", "farah"];

// Menambahkan pembeli baru di akhir antrian secara manual
antrian[antrian.length] = "nabila"; // Menambahkan "nabila"
antrian[antrian.length] = "maza";    // Menambahkan "maza"
antrian[antrian.length] = "elsi";    // Menambahkan "elsi"

// Menghapus pembeli terakhir dari antrian
antrian.length = antrian.length - 1; // Mengurangi panjang array, menghapus "elsi"

// Menghapus pembeli pertama dari antrian
for (let i = 0; i < antrian.length - 1; i++) {
  antrian[i] = antrian[i + 1];
}
antrian.length = antrian.length - 1; // Memperpendek array setelah penggeseran

// Menghapus pembeli kedua dari antrian
for (let i = 0; i < antrian.length - 1; i++) {
  antrian[i] = antrian[i + 1];
}
antrian.length = antrian.length - 1; // Memperpendek array setelah penggeseran

// Menyisipkan pembeli baru di awal antrian
for (let i = antrian.length; i > 0; i--) {
  antrian[i] = antrian[i - 1];
}
antrian[0] = "tomi"; // Menambahkan "tomi" di awal antrian

console.log(antrian);