export class Animal{
    nombre = "";
    raza = "";
    #element = null;


constructor(nombre, raza) { 
    this.nombre = nombre;
    this.raza = raza;
}

#obtenerTexto (){
    const texto = "Mi nombre es " + this.nombre + " y soy de raza " + this.raza;
    return texto;
}


render () {
    const texto = this.#obtenerTexto();
    const p = document.createElement("p");
    p.textContent = texto;
    this.#element = p;
    return p;
}

onClickListener(){
    this.#element.addEventListener("click", () => {
        const texto = this.#obtenerTexto();
        alert(texto);
    });
}
}

export const obtenerData = async () => {
const response = await fetch ("https://raw.githubusercontent.com/Lalauraph/Taller-Eventos-en-Clases-OOP/main/data.json")
const data = await response.json();
return data;
}
