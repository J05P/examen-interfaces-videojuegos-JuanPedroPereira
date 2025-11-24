import { juegos } from "../../public/data/info.js";

export function getJuegoPorPlataformaService(id){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const juego=juegos.filter(e=> e.plataforma===id )

        if (juego) {
        resolve(juego);
        } else {
        reject(`la plataforma ${id} no existe`);
        }
        }, 1000);
        })

}


