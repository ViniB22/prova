let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let res3 = document.getElementById('res3')
let res4 = document.getElementById('res4')
let res5 = document.getElementById('res5')

function calcular(){
    let desconto = 0

    let bola = Number(document.getElementById('bola').value)
    let tenis = Number(document.getElementById('tenis').value)
    let bermuda = Number(document.getElementById('bermuda').value)

    let preco = (bola * 31.59) + (tenis * 89.99) + (bermuda * 59.49)

    if (preco > 250.00){
        desconto = preco * (93 / 100)
        res1.innerHTML = `A sua compra deu ${preco.toFixed(2)} porém com um desconto por passar de 250 deu ${desconto.toFixed(2)}`
    } else if (preco <= 250.00){
        res1.innerHTML = `A sua compra deu ${preco.toFixed(2)}`
    } else {
        res1.innerHTML = `Erro de digitação, tente novamente`
    }
}
function transformar(){
    let kgf = Number(document.getElementById('kgf').value)

    let paraPSI = kgf * 14.2233

    res2.innerHTML = `A coverção para PSI deu ${paraPSI.toFixed(2)}`
}
function verificar(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)

    if ((num1 % 3 == 0)&&(num1 % 5 == 0)){
        res3.innerHTML = `O número ${num1} é divisivel por 3 e 5 <br>`
    } else {
        res3.innerHTML = `O número ${num1} não e divisivel por 3 e 5 <br>`
    }
    if ((num2 % 3 == 0)&&(num2 % 5 == 0)){
        res3.innerHTML += `O número ${num2} é divisivel por 3 e 5 <br>`
    } else {
        res3.innerHTML += `O número ${num2} não e divisivel por 3 e 5 <br>`
    }
    if ((num3 % 3 == 0)&&(num3 % 5 == 0)){
        res3.innerHTML += `O número ${num3} é divisivel por 3 e 5 <br>`
    } else {
        res3.innerHTML += `O número ${num3} não e divisivel por 3 e 5 <br>`
    }
}
function soma(){
    let nume1 = Number(document.getElementById('nume1').value)
    let nume2 = Number(document.getElementById('nume2').value)
    let nume3 = Number(document.getElementById('nume3').value)

    let somaimp = 0
    let somapar = 0
    let soma = nume1 + nume2 + nume3

    if (nume1 % 2 == 1){
        somaimp = somaimp + nume1
    } else if (nume1 % 2 == 0){
        somapar = somapar + nume1
    }
    if (nume2 % 2 == 1){
        somaimp = somaimp + nume2
    } else if (nume2 % 2 == 0){
        somapar = somapar + nume2
    }
    if (nume3 % 2 == 1){
        somaimp = somaimp + nume3
    } else if (nume3 % 2 == 0){
        somapar = somapar + nume3
    }

    res4.innerHTML = `A soma dos números pares é ${somapar}; <br> A soma dos números impares é ${somaimp}; <br> A soma total é igual a ${soma}`
}
function calcularmedia(){
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)

    let media = (nota1 + nota2 + nota3) / 3

    res5.innerHTML = `Sua média foi ${media}`
}