const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", function () {

    const valorVivienda = Number(document.getElementById("valorVivienda").value);
    const ingresoMensual = Number(document.getElementById("ingresoMensual").value);

    document.getElementById("creditoResultado").textContent =
        "$" + valorVivienda.toLocaleString("es-MX");

    document.getElementById("pagoResultado").textContent =
        "$" + ingresoMensual.toLocaleString("es-MX");

});