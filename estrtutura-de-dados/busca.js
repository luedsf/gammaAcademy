var valores = [5, 8, 10, 22, 45, 38, 45, 68, 88, 105, 120, 150]

function busca(num) {
    for (i =0; i < 6; i++) {
        if (num == valres[i]) {
            return i;
        }
    }
    return -1
}

// busca binaria
function buscaBin(num) {
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        if (num == valores[meio]) {
            return meio;
            passos += 1;
        } else {
            if (num > valores[meio]) {
                inicio = meio +1;
            } else {
                fim = meio + 1;
            }
        }
        
    }
    return -1
}

// testando nosso codigo

console.log (busca(10))
console.log (busca(50))

