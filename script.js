import {obtenerData, Animal} from "./utils.js";

const render = async () => {
    const data = await obtenerData ();

    const animales = data.animales;
    const contenedor = document.querySelector ("#contenedor");

    for (const animal of animales){
        const animalObj = new Animal (animal.nombre, animal.raza);
        const p = animalObj.render();
        contenedor.appendChild(p);
        animalObj.onClickListener();
    }

}
window.onload = render;