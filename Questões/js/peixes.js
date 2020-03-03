function calcpeixes() {
    var pessoas = Number(document.getElementById("inPessoas").value);
    var peixes = Number(document.getElementById("inPeixes").value);


    var valor = pessoas * 10;

    if (peixes >= pessoas) {
        valor = valor + (peixes - pessoas) * 5;
    }

    document.getElementById("outTroco").textContent = "R$" + valor.toFixed(2);

} document.getElementById("btCalcular").addEventListener("click", calcpeixes);

//ignorar essa linha de código, pois é do menu
document.getElementById("menu").onclick = function () { window.location.href = "../index.html" }