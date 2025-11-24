import { juegos } from "../../public/data/info.js";

export function getJuegoServices(id){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const juego=juegos.find(e=> e.id=== id)?.titulo

        if (juego) {
        resolve(juego);
        } else {
        reject(`juego con id ${id} no existe`);
        }
        }, 800);
        })

}


