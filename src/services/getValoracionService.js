import { valoraciones } from "../../public/data/info.js"; 
import { juegos } from "../../public/data/info.js";

export function getValoracionService(id){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const valoracion=valoraciones.find(e=> e.id=== id)?.puntuacion
        const juego=juegos.find(e=> e.id=== id)?.titulo

        if (valoracion) {
        resolve(valoracion);
        } else {
        reject(`valoracion del juego con id ${id} no existe`);
        }
        }, 1000);
        })

}


