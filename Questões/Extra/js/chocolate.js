

function chocolate(){

    var chocolate = document.getElementById("inChocolate").value;
    var quantidade = document.getElementById("inQuantidade").value;

    var num = Math.floor(quantidade/10);

    


    document.getElementById("outPagar").textContent = "Pagar: " + (quantidade-num) + " - Brinde: " + num;
    document.getElementById("outTotal").textContent = "Total R$: " + chocolate*(quantidade-num);

}document.getElementById("btPromocao").addEventListener("click", chocolate);


//ignorar
document.getElementById("menu").onclick = function () { window.location.href = "../../index.html" }