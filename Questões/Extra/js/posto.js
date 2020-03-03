


function calcular() {
    var etanol = document.getElementById("inEtanol").value;
    var gasolina = document.getElementById("inGasolina").value;
    gasolina = gasolina * 0.7;

    if (etanol < gasolina) {
        document.getElementById("outOpcao").textContent = "Melhor opção: Etanol";
    } else {
        document.getElementById("outOpcao").textContent = "Melhor opção: Gasolina";
    }
} document.getElementById("btOpcao").addEventListener("click", calcular);


//ignorar
document.getElementById("menu").onclick = function () { window.location.href = "../../index.html" }