// Bubble sort

var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function ordena() {
    let inicio = 0;
    let fim = 9;
    let tmp;

    for (pos = inicio; pos < fim -1; pos++) {
        if (valores[pos] > valores[pos++]) {
            tmp = valores[pos];
            valores[pos] = valores[pos++]
            valores[pos++] = tmp
        }
    }
}


ordena();
console.log("vetor ordenado..");
console.log(valores);


