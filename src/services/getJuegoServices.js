import { juegos } from "../../public/data/info";

export function getJuegoServices(id){

    const pormesa= Promise((resolve, reject) => {
    setTimeout(() => {
        const juego=juegos.find(e=> e.id=== id)?.titulo?.pla

        if (juego) {
        resolve(juego);
        } else {
        reject(`juego con id ${id} no existe`);
        }
        }, 800);
        return pormesa;
        })

}


