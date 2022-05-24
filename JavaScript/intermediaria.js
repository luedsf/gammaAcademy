//Template string

let meuNome = 'LE';
let meuSobrenome = 'SFonseca';
let minhaProfiss = "Empreendedor";

console.log(
    "Eu sou " + meuNome + " " + meuSobrenome + " e sou " + minhaProfiss + "."
); //sem template string

console.log(
    `Eu sou ${meuNome} ${meuSobrenome} e sou ${minhaProfiss}.`
);

console.log(`A soma entre 30 e 30 é ${30 + 30}`);
console.log(`objetos ${{ cidade: 'SP'}}`)

// OPERADORES TERNARIOS
let isValid = true;

const teste1 = isValid ? true : false;

console.log(teste1);

let zero = 0;

const numResult = zero > 0 ? 0 : -1;
console.log(numResult);

// ARROWS FUCTIONS
function soma (x, y) {
    return x + y;
}
console.log(soma(5,5));

const multiplic = function (a, b) {
    return a * b;
}
console.log(multiplic(8,6));

const dividir = (w, x) => {
    return w / x;
}
console.log(dividir(10,5));

const objeto = () => ({nome: 'LF', sobrenome: 'SFonseca'});
console.log(objeto())

// OPERADOR SPREAD
