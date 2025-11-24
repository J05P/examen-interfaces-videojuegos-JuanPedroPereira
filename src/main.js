import { getJuegoServices } from "./services/getJuegoServices.js";
const btn = document.getElementById("btn-id");
const salida = document.getElementById("salida");

function getIdFromButton() {

    const input = prompt("Introduce un número de usuario (1-3)");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introduccido un número");
        return;
    }
    return id;
}

function findProducto(id) {
    getJuegoServices(id)
        .then((juegos) => {
        console.log("PROMISE RESOLVE, PASO POR EL THEN");
        console.log(juegos, "juegos");
        salida.textContent = `El producto buscado es: ${juegos}`;
    })
        .catch((error) => {
        console.log("PROMISE REJECT, PASO POR EL CATCH");
        console.log(error, "error");
        salida.textContent = error;
    });
}
btn.addEventListener("click", () => {

    try {
        const id = getIdFromButton();
        if (id != undefined)
            findProducto(id);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});