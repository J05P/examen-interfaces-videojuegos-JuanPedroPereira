import { getJuegoServices } from "./services/getJuegoServices.js";
import { getJuegoPorPlataformaService } from "./services/getJuegosPorPlataformaService.js";
import { getValoracionService } from "./services/getValoracionService.js";

const btn = document.getElementById("btn-id");
const btn2 = document.getElementById("btn-id-valoracion");
const btn3 = document.getElementById("btn-plataforma");
const salida = document.getElementById("salida");
const salida2 = document.getElementById("salida2");

/***************************************************** */
function getIdFromButton() {
    const input = prompt("Introduce un número de usuario (1-12)");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introduccido un número");
        return;
    }
    return id;
}

function getPlataformaFromButton() {
    const input = prompt("Introduce una plataforma(PC, PlayStation, Xbox, Nintendo Switch)");
    const id = String(input);
    return id;
}

/***************************************************** */
function findProductoValoracion(id) {
    getValoracionService(id)
        .then((valoraciones) => {
            console.log("PROMISE RESOLVE, PASO POR EL THEN");
            console.log(valoraciones, "valoraciones");
            salida2.textContent = `La valoración del juego es: ${valoraciones}`;
        })
        .catch((error) => {
            console.log("PROMISE REJECT, PASO POR EL CATCH");
            console.log(error, "error");
            salida2.textContent = error;
        });

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

/***************************************************** */
function findProductoJuego(id) {
    getJuegoServices(id)
        .then((juegos) => {
            console.log("PROMISE RESOLVE, PASO POR EL THEN");
            console.log(juegos, "juegos");
            salida.textContent = `El juego es: ${juegos}`;
            salida2.textContent=""
        })
        .catch((error) => {
            console.log("PROMISE REJECT, PASO POR EL CATCH");
            console.log(error, "error");
            salida.textContent = error;
             salida2.textContent=""
        });
}

/***************************************************** */
function findProductoPlataforma(id) {
    getJuegoPorPlataformaService(id)
        .then((juegos) => {
            console.log("PROMISE RESOLVE, PASO POR EL THEN");
            console.log(juegos, "juegos");
            if (juegos.length > 0) {
                salida2.textContent=""
                salida.textContent = `Los juegos de esta plataforma son: ${juegos.map(juego => juego.titulo).join(", ")}`;
            }
        })
        .catch((error) => {
            console.log("PROMISE REJECT, PASO POR EL CATCH");
            console.log(error, "error");
            salida.textContent = error;
             salida2.textContent=""
        });
}

/***************************************************** */
btn.addEventListener("click", () => {
    try {
        const id = getIdFromButton();
        if (id != undefined)
            findProductoJuego(id);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});

/***************************************************** */
btn2.addEventListener("click", () => {
    try {
        const id = getIdFromButton();
        if (id != undefined)
            findProductoValoracion(id);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});

/***************************************************** */
btn3.addEventListener("click", () => {
    try {
        const id = getPlataformaFromButton();
        if (id != undefined)
            findProductoPlataforma(id);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        salida.textContent = message;
    }
});
