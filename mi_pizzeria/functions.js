
// Inicialización de variables
const precioPizza = 0;
let condEsc = '';
const beneficio = 0.2;
const gastos = 0.25;
const iva = 0.04;
const listaMasas = new Array();
const listaCondimentos = new Array();

// Objeto pizza y su inicialización
function pizza(masa,condimentos,precio){
    this.masa = masa;
    this.condimentos = condimentos;
    this.precio = precio;
    this.datosPizza = function(){
        if(this.masa != undefined && this.condimentos != undefined){
            console.log('Pizza: masa: ',this.masa,' | condimentos: ',this.condimentos,' | precio: ',this.precio,'€');
        }
    } 
}

let miPizza = new pizza('','',0);

// Funciones relacionadas con la masa de la pizza
// Construcción del menú de masas
function mostrarMasa(masa){
    console.log('Escoge el tipo de masa:');
    let cuenta = 1;
    masa.forEach(element => {
        let precioBeneficio = parseFloat(element.precio)*beneficio;
        let precioGastos = parseFloat(element.precio)*gastos;
        let precioIVA = parseFloat(element.precio)*iva;
        let precioMasa = parseFloat(element.precio) + precioBeneficio + precioGastos + precioIVA;
        console.log(cuenta,'-',element.tipo,`(${precioMasa}€)`);
        listaMasas.push([element.tipo,precioMasa]);
        cuenta ++;
    });
    // console.log(listaMasas[0][1]);
}

// Función para escoger la masa (incluye la posiblidad de detectar cualquier entrada que no sea la correcta)
function escogerMasa(masaEsc){
    switch(masaEsc){
        // normal
        case '1':
            miPizza.masa = listaMasas[0][0];
            miPizza.precio += listaMasas[0][1];
            break;
        // espelta
        case '2':
            miPizza.masa = listaMasas[1][0];
            miPizza.precio += listaMasas[1][1];
            break;
        // integral
        case '3':
            miPizza.masa = listaMasas[2][0];
            miPizza.precio += listaMasas[2][1];
            break;
        // cualquier otra opción termina el programa
        default:
            avisoFin();
            break;
    }
    // console.log('miPizza.masa',miPizza.masa);
    // console.log('miPizza.precio',miPizza.precio);
    
}

// Funciones relacionadas con los condimentos de la pizza
// Construcción del menú de condimentos
function mostrarCondimentos(condimentos){
    console.log('Escoge los condimentos:');
    // console.log(condimentos[0]['mozzarella']);
    // console.log(condimentos[0]['salsa tomate']);
    let cuenta = 4;
    for (let condimento in condimentos[0]){
        let precioBeneficio = parseFloat(condimentos[0][condimento])*beneficio;
        let precioGastos = parseFloat(condimentos[0][condimento])*gastos;
        let precioIVA = parseFloat(condimentos[0][condimento])*iva;
        let precioCondimento = parseFloat(condimentos[0][condimento]) + precioBeneficio + precioGastos + precioIVA;
        console.log(cuenta,'-',condimento,`(${precioCondimento}€)`)
        listaCondimentos.push([condimento,precioCondimento]);
        cuenta ++;
    }
    // console.log('listaCondimentos',listaCondimentos)
}

// Función para escoger el condimento (incluye la posibilidad de detectar condimentos repetidos)
function escogerCondimentos(process,escogido,listaCondimentos){
    let precioCond = 0;
    if(process.argv[3] != undefined){
        switch(escogido){
            // mozzarella
            case '4':
                //ya hay mozzarella, por lo que se termina el programa 
                if(miPizza.condimentos.includes('mozzarella')){
                    avisoFin();
                    break;
                }
                condEsc = listaCondimentos[0][0];
                precioCond = listaCondimentos[0][1];
                break;
            // 4 quesos
            case '5':
                //ya hay 4 quesos, por lo que se termina el programa 
                if(miPizza.condimentos.includes('4 quesos')){
                    avisoFin();
                    break;
                }
                condEsc = listaCondimentos[1][0];
                precioCond = listaCondimentos[1][1];
                break;
            // salsa tomate
            case '6':
                //ya hay salsa tomate, por lo que se termina el programa 
                if(miPizza.condimentos.includes('salsa tomate')){
                    avisoFin();
                    break;
                }
                condEsc = listaCondimentos[2][0];
                precioCond = listaCondimentos[2][1];
                break;
            // pollo
            case '7':
                //ya hay pollo, por lo que se termina el programa 
                if(miPizza.condimentos.includes('pollo')){
                    avisoFin();
                    break;
                }
                condEsc = listaCondimentos[3][0];
                precioCond = listaCondimentos[3][1];
                break;
            // anchoas
            case '8':
                //ya hay anchoas, por lo que se termina el programa 
                if(miPizza.condimentos.includes('anchoas')){
                    avisoFin();
                    break;
                }
                condEsc = listaCondimentos[4][0];
                precioCond = listaCondimentos[4][1];
                break;
            // aceitunas
            case '9':
                //ya hay aceitunas, por lo que se termina el programa 
                if(miPizza.condimentos.includes('aceitunas')){
                    avisoFin();
                    break;
                }
                condEsc = listaCondimentos[5][0];
                precioCond = listaCondimentos[5][1];
                break;
            // cualquier otra opción termina el programa
            default:
                avisoFin();
                break;
        }
        miPizza.precio += precioCond;
        miPizza.condimentos += condEsc +' ';
        // console.log('miPizza.condimentos',miPizza.condimentos);
        // console.log('miPizza.precio',miPizza.precio);
    }
}

// Funciones del menú (instrucciones de uso)
function instrucciones(){
    console.log('Puedes escoger los ingredientes de tu pizza mediante el comando node mi_pizzeria.js pedido y los códigos siguientes:');
    console.log('Los números 1, 2 ó 3 para escoger la masa (sólo puedes escoger un tipo de masa).');
    console.log('Los números 4, 5, 6, 7, 8 y 9 para escoger los condimentos (puedes escoger varios condimentos pero no los puedes repetir).');
    console.log('Por ejemplo: node mi_pizzeria.js pedido: 1 5 8 9 para pedir una pizza con masa normal, 4 quesos, anchoas y aceitunas.');
    console.log('\n');
}

// Funciones del menú (aviso de error y fin del programa)
function avisoFin(){
    console.log('Pedido incorrecto, vuelve a empezar.');
    process.exit();
}

// Función para procesar el pedido
function pedido(process){
    if(process.argv[3] != undefined){
        let miPedido = Array.from(process.argv);
        // se escoge la masa
        escogerMasa(miPedido[3],precioPizza);
        // se escogen los condimentos
        for(i=4;i<miPedido.length;i++){
            // console.log(miPedido[i]);
            let escogido = miPedido[i];
            // console.log('escogido',escogido)
            escogerCondimentos(process,escogido,listaCondimentos);
        }
        // Solo hay la masa (sin condimentos), por lo que se termina el programa
        if(!miPizza.condimentos){
            avisoFin();
        }
    }
}

module.exports = {
    mostrarMasa : mostrarMasa,
    mostrarCondimentos : mostrarCondimentos,
    instrucciones : instrucciones,
    pedido : pedido,
    miPizza : miPizza
}