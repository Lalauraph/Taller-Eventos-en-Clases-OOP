export class Persona{
    nombre = "";
    edad = 0;
    #element = null;


constructor(nombre, edad) { 
    this.nombre = nombre;
    this.edad = edad;
}

#obtenerTexto (){
    const texto = "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
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
    })
}
}

export const obtenerData = async () => {
const response = await fetch ("https://raw.githubusercontent.com/Lalauraph/Semana11-Consumo-JSON-con-fetch/main/data.json")
const data = await response.json();
return data;
}
