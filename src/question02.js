function verificarViciacaoRoleta() {

    let verdeCount = 0;
    let vermelhoCount = 0;
    let pretoCount = 0;
    
    const numeroDeGiros = 70;
    for (let i = 0; i < numeroDeGiros; i++) {

        let numero = Math.floor(Math.random() * 37);
        
        let cor = determinarCor(numero);
        
        if (cor === 'verde') {
            verdeCount++;
        } else if (cor === 'vermelho') {
            vermelhoCount++;
        } else if (cor === 'preto') {
            pretoCount++;
        }
    }
    
    let percentualVerde = (verdeCount / numeroDeGiros) * 100;
    let percentualVermelho = (vermelhoCount / numeroDeGiros) * 100;
    let percentualPreto = (pretoCount / numeroDeGiros) * 100;
    
    if (percentualVerde > 40 || percentualVermelho > 40 || percentualPreto > 40) {
        console.log("A roleta pode estar viciada.");
        console.log(`Verde: ${percentualVerde}%, Vermelho: ${percentualVermelho}%, Preto: ${percentualPreto}%`);
    } else {
        console.log("A roleta parece estar equilibrada.");
        console.log(`Verde: ${percentualVerde}%, Vermelho: ${percentualVermelho}%, Preto: ${percentualPreto}%`);
    }
}

function determinarCor(numero) {
    if (numero === 0) {
        return 'verde';
    } else if (numero % 2 === 0) {
        return 'vermelho';
    } else {
        return 'preto';
    }
}

verificarViciacaoRoleta();
