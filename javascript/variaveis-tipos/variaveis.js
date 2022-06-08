var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // o escopo é global, possui a propriedade hoisting, pode reatribuição e redeclaração
    let b = 22; // o escopo é local/bloco, não pode redeclaração, pode reatribuição e não possui propriedade hoisting

    console.log(a); // 11
    console.log(b); // 22

}

console.log(a) // 11
console.log(b) // 2

const FIRST_NAME = 'Matheus'; // o escopo é local/bloco, não pode reatribuição, não pode redeclaração e não possui a propriedade hoisting