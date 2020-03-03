function salario() {
    salario = Number(document.getElementById("inSalario").value);

    var desconto = salario * 0.02;

    document.getElementById("outDesconto").textContent = "Desconto R$" + desconto.toFixed(2);
    document.getElementById("outSalario").textContent = "Salário Final R$" + (salario - desconto).toFixed(2);

} document.getElementById("btDesconto").addEventListener("click", salario);

//ignorar essa linha de código, pois é do menu

document.getElementById("menu").onclick = function () { window.location.href = "../index.html" }