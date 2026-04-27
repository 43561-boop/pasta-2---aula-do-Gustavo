let frase = [
    "Luke, eu sou seu pai! - Star Wars",
    "Vingadores, Avante! - Vingadores Ultimato",
    "É hora de morfar! - Power Ranger",
    "Apenas por que não funciona, não quer dizer que ela não possa ser aprimorada - pantera Negra",
    "A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você se lembrar de acender a luz. - Harry Potter",
    "As pessoas que são loucas o suficinete para pensar que podem mudar o mundo são as que o fazem - Jobs",
    "Às vezes, são pessoas das quais ninguem imagina nada que fazem as coisas que pode imagionar. - O Jogo da imitação"
];

let cliques = 0;

function gerarFrases(){
    //Sorteia um número entre 0 e a qtd de frases
    let indice = Math.floor(Math.random() *gerarFrases.length);

    //pega a frase escolhida
    let fraseEscolhida = frase[indice];

    //acrescenta o contador
    cliques = cliques + 1;

    //mostra a frase nova
    document.getElementById("frase").innerText = fraseEscolhida;

    //mostra o contador atualizado
    document.getElementById("contador").innerText = "frases Geradas: " + cliques;
}