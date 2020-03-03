



function cigarro() {

    document.getElementById("outResposta").textContent = "Total Gasto Aproximado R$: " +
     (document.getElementById("inCarteira").value * document.getElementById("inAnos").value * document.getElementById("inPdia").value * 365).toFixed(2);


} document.getElementById("btGastos").addEventListener("click", cigarro);


//ignorar
document.getElementById("menu").onclick = function () { window.location.href = "../../index.html" }