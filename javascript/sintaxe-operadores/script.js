// function soma_conf(a, b) {
//     if (a == b) {
//         if (a + b > 20) {
//             console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${a + b}, que é maior que 10 e maior que 20.`);
//         } else if (20 > a + b > 10) {
//             console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${a + b}, que é maior que 10 e menor que 20.`);
//         } else {
//             console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${a + b}, que é menor que 10 e menor que 20.`);
//         }
//     } else {
//         if (a + b > 20) {
//             console.log(`Os números ${a} e ${b} não são iguais. Sua soma é ${a + b}, que é maior que 10 e maior que 20.`);
//         } else if (20 > a + b > 10) {
//             console.log(`Os números ${a} e ${b} não são iguais. Sua soma é ${a + b}, que é maior que 10 e menor que 20.`);
//         } else {
//             console.log(`Os números ${a} e ${b} não são iguais. Sua soma é ${a + b}, que é menor que 10 e menor que 20.`);
//         }
//     }
// }

// soma_conf(10, 5);

function comparaNumero(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números';
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = "não";
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumero(1, 2));