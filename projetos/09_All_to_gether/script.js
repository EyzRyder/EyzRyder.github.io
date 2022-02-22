function onClick01() {
    var a, b, r
    window.alert("Escreva um número: ");
    a = window.prompt('Enter a value for a');
    window.alert("Escreva um outro número: ");
    b = window.prompt('Enter a value for b');
    r = a * b;
    window.alert("A multiplicação desse números é igual a " + r);
}
function onClick02() {

    var p1, p2, p3, p4, md;

    window.alert("Digite a nota do primeiro bimestre: ");
    p1 = window.prompt('Nota do Primeiro Bimestre');
    window.alert("Digite a nota do segundo bimestre: ");
    p2 = window.prompt('Nota do Segundo Bimestre');
    window.alert("Digite a nota do terceiro bimestre: ");
    p3 = window.prompt('Enter a value for p3');
    window.alert("Digite a nota do quarto bimestre: ");
    p4 = window.prompt('Enter a value for p4');
    md = ((p1 + p2 + p3 + p4) / 4);
    window.alert("A média dos alunos é: " + md);
}
function onClick03() {

    var nome, idade, salal;

    window.alert("Digite seu nome: ");
    nome = window.prompt('Seu nome');
    window.alert("Digite sua idade: ");
    idade = window.prompt('Sua idade');
    window.alert("Digite seu salário: ");
    salal = window.prompt('Seu salário');
    window.alert("Bem vindo " + nome + " seu salário continua sendo " + salal + " e nem sua idade mudou, você está com " + idade + " ainda.");
}
function onClick04() {
    var numsucant, sucessor, antecessor;
    numsucant = parseFloat(numsucant);

    window.alert("Digite aqui o valor do número: ");
    numsucant = window.prompt('Enter a value for numsucant');
    window.alert("o sucessor do número é " + (numsucant + 1) + " e o antecessor é " + (numsucant - 1));
}
function onClick05() {
    var idadeemdia;

    window.alert("Oi, por favor digita sua idade aqui: ");
    idadeemdia = window.prompt('Enter a value for idadeemdia');
    idadeemdia = 365 * idadeemdia;
    window.alert("Você já viveu " + idadeemdia + " dias na sua vida.");
}
function onClick06() {
    var a1, a2, a3, a4, a5;
    var resu1;


    a1 = 1;
    a2 = 2;
    a3 = 3;
    a4 = 4;
    a5 = 2;
    resu1 = a1 + a2 - (a3 * a4) / a5 > 0;
    prompt("(A + B - C * D / F) > 0 è falso ou verdadeiro?");
    prompt("O resultado da expressão matemática é " + resu1);
}
function onClick07() {
    var salario, reajuste, porcentagem, novoSalario;

    window.alert("Digite o salário do fucionário: ");
    salario = window.prompt('Enter a value for salario');
    window.alert("Digite a porcentagem do reajuste: ");
    porcentagem = window.prompt('Enter a value for porcentagem');
    reajuste = (salario * porcentagem) / 100;
    novoSalario = salario + reajuste;
    window.alert("O novo salário reajustado é " + novoSalario);

}
function onClick08() {
    var a, b, r, ra, rb, rc, rd, re, rf, rg, rh, ri, rj;

    a = 2;
    b = 3;
    r = 4 / 2 + 0 - 3 % 1 + Math.pow(b, a) + 6 / a - (1 * Math.pow(2, 3));
    ra = 4 / 2 + 1 - 3 % 1 + Math.pow(b, a) + 6 / a - 1 * Math.pow(2, 3);
    rb = 5 / 2 + 3 -  3 / 1 + Math.pow(a, b) + 8 / a - 0 * Math.pow(2, 3);
    rc = 6 / 2 + 6 - 3 % 1 + Math.pow(b, a) + 4 / a - 2 * Math.pow(2, 3);
    rd = 3 / 2 + 1 -  2 / 1 + Math.pow(b, a) + 2 / a - 1 * Math.pow(2, 3);
    re = 8 / 2 + 3 - 2 % 1 + Math.pow(b, a) + 1 / a - 0 * Math.pow(2, 3);
    rf = 7 / 2 + 6 -  2 / 1 + Math.pow(a, b) + 3 / a - 2 * Math.pow(2, 3);
    rg = 10 / 2 + 1 - 4 % 1 + Math.pow(b, a) + 5 / a - 1 * Math.pow(2, 3);
    rh = 9 / 2 + 0 - 4 / 1 + Math.pow(a, b) + 7 / a - 0 * Math.pow(2, 3);
    ri = 6 / 3 + 2 - 4 % 1 + Math.pow(b, a) + 4 / a - 2 * Math.pow(2, 3);
    rj = 8 / 4 + 4 - 4 / 1 + Math.pow(a, b) + 2 / a - 1 * Math.pow(2, 3);
    window.alert("O resultado do exemplo é = " + r);
    window.alert("O resultado da letra a é = " + ra);
    window.alert("O resultado da letra b é = " + rb);
    window.alert("O resultado da letra c é = " + rc);
    window.alert("O resultado da letra d é = " + rd);
    window.alert("O resultado da letra e é = " + re);
    window.alert("O resultado da letra f é = " + rf);
    window.alert("O resultado da letra g é = " + rg);
    window.alert("O resultado da letra a é = " + rh);
    window.alert("O resultado da letra a é = " + ri);
    window.alert("O resultado da letra a é = " + rj);

}
function onClick09() {

}
function onClick10() {

}
function onClick11() {

}
function onClick12() {

}
function onClick13() {

}
function onClick14() {

}
function onClick15() {

}
function onClick16() {

}
function onClick17() {

}
function onClick18() {

}
function onClick19() {

}
function onClick20() {

}
function onClick21() {

}
function onClick22() {

}