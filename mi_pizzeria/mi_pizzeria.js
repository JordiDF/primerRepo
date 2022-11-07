// Jorge Diest (IFCD0210 - MF0492_3 - UF 1844)

// Regentamos un apizzeria que ofrece pizzas a gusto del consumidor.

// Por tanto necesitamos un menú para que elija:

// 1) el tipo de masa: solo puede elejir uno

// 2) los ingredientes: puede elegir cualquiera de ellos, incluso  más de uno, pero solo una vez cada uno.

// cada ingrediente debe mostrar su precio incrementado un 20% de beneficio + 25% gastos diversos, todo ello por un 4% de IVA
// (estos porcentajes no los ve el cliente) 

// Al final aparece el contenido del pedido y el precio total.

// Importación de los módulos necesarios para ejecutar el programa
const {masa,condimentos} = require ('./ingredientes.js');
const {miPizza,mostrarMasa,mostrarCondimentos,instrucciones,pedido} = require ('./functions.js');

// console.log(masa);
// console.log(condimentos);

// Menú de masa de la pizza
mostrarMasa(masa);
// Menú de los condimentos de la pizza
mostrarCondimentos(condimentos);
// Instrucciones
instrucciones();

// Función que gestiona el pedido
pedido(process,masa);

// Objeto pizza y método que nos muestra su composición
miPizza.datosPizza();

