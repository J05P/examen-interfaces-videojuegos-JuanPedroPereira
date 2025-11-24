import { juegos } from "../public/data/info.js";
import { getJuegoServices } from "./services/getJuegoServices.js";
import { getValoracionService } from "./services/getValoracionService.js";
const btn = document.getElementById("btn-id");
const btn2 = document.getElementById("btn-id-valoracion");
const salida = document.getElementById("salida");

function getIdFromButton() {

    const input = prompt("Introduce un número de usuario (1-12)");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introduccido un número");
        return;
    }
    return id;
}

function findProductoValoracion(id) {
    getValoracionService(id)
        .then((valoraciones ) => {
        console.log("PROMISE RESOLVE, PASO POR EL THEN");
        console.log(valoraciones, "valoraciones");
        salida.textContent = `la valoracion del juego con id ${id} es: ${valoraciones}`;
    })
        .catch((error) => {
        console.log("PROMISE REJECT, PASO POR EL CATCH");
        console.log(error, "error");
        salida.textContent = error;
    });
}
function findProductoJuego(id) {
   getJuegoServices(id)
        .then((juegos) => {
        console.log("PROMISE RESOLVE, PASO POR EL THEN");
        console.log(juegos, "juegos");
        salida.textContent = `El juego es: ${juegos}`;
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
            findProductoJuego(id);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});
btn2.addEventListener("click", () => {

    try {
        const id = getIdFromButton();
        if (id != undefined)
            findProductoValoracion(id);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});