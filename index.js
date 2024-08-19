const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a)  Las pizzas que tengan un id impar.

const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0)
console.log(pizzasImpares);

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaMenos600= pizzas.some(pizza => pizza.precio > 600)

if(pizzaMenos600){
  console.log("Hay pizza de menos de 600");
} else{
  console.log("No hay pizza de menos de 600");
  
}

// c) El nombre de cada pizza con su respectivo precio.

const nombrePrecio = pizzas.map(pizza=>({
  nombre: pizza.nombre,
  precio: pizza.precio
}))

nombrePrecio.forEach(pizza => {
  console.log(`Nombre: ${pizza.nombre} / Precio: $${pizza.precio}`);
});


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 

const pizzaIngredientes = pizzas.map(pizza=>({
  nombre: pizza.nombre,
  ingredientes: pizza.ingredientes
}))

pizzaIngredientes.forEach(pizza=>{
  console.log(`Nombre: ${pizza.nombre} / Ingredientes: ${pizza.ingredientes}`);
  
})