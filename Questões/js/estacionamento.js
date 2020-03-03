function lojatempo() {
    var tempo = Number(document.getElementById("inTempo").value);
    var resposta = document.getElementById("outValor");
    if (tempo <= 30) {
        resposta.textContent = "Cortesia";
    } else if (tempo <= 60) {
        resposta.textContent = "R$5.00";
    } else if (tempo > 60) {
        var custo = 5 + 0.1 * (tempo - 60);
        resposta.textContent = "R$" + custo.toFixed(2);
    }
} document.getElementById("btSituacao").addEventListener("click", lojatempo);

//ignorar essa linha de código, pois é do menu
document.getElementById("menu").onclick = function () { window.location.href = "../index.html" }