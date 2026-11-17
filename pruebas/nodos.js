const {Nodo} = require ('../src/Nodo.js');

const atencion1 = new Nodo({
    fecha: "02/02",
    motivo: "vacunaciòn",
    veterinario: "Dra. Rìos",
    costo: 85000
})

const atencion2 = new Nodo({
    fecha: "15/03",
    motivo: "control de peso",
    veterinario: "Dr. Gòmez",
    costo: 40000
})

const atencion3 = new Nodo({
    fecha: "20/05",
    motivo: "limpieza dental",
    veterinario: "Dra. Rìos",
    costo: 150000
})


atencion1.siguiente = atencion2
atencion2.siguiente = atencion3
atencion3.siguiente = null

const cabeza = atencion1

let actual = cabeza
let i = 1

while( actual !== null){
    console.log("Nodo - " + i, actual)
    actual = actual.siguiente
    i++
}

let acumulador = 0;
actual = cabeza

 while(actual !== null) {
    acumulador+= actual.dato.costo
    actual = actual.siguiente
 }

 console.log("Costo total: ", acumulador)