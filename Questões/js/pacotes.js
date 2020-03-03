function calcular() {
    var inDinheiro = document.getElementById("inDinheiro");
    var valor = Number(inDinheiro.value);

    var pacotes = valor / 2;
    pacotes = Math.floor(pacotes);

    var figurinhas = pacotes * 5;

    document.getElementById("outInf").textContent = pacotes + " Pacotes - " + figurinhas + " figurinhas";

    if (valor % 2 != 0) {
        var troco = valor % 2;
        document.getElementById("outTroco").textContent = "R$" + troco.toFixed(2);
    } else {
        document.getElementById("outTroco").textContent = "";
    }



}

document.getElementById("btCalcular").addEventListener("click", calcular);

//ignorar essa linha de código, pois é do menu

document.getElementById("menu").onclick = function () { window.location.href = "../index.html" }
