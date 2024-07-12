import leia from "readline-sync";

function contarPalavras(texto) {
   
    var palavras = texto.trim().split(/\s+/);

    return palavras.length;
}

var textoUsuario = leia.question("Digite um texto ou palavra: ");
var numeroPalavras = contarPalavras(textoUsuario);

console.log("Número de palavras no texto: " + numeroPalavras);
