function mostrarAlerta() {
    alert("Hola!");
}

function mostrarAlertaDiv() {
    alert("Hola! Soy el div");
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("saludarButton");
    button.addEventListener("click", mostrarAlerta);

    const divElement = document.querySelector("div");
    divElement.addEventListener("click", mostrarAlertaDiv);
});