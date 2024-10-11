import productoS from './data.js';

// Cards -----------------------------------------
const contenedor = document.getElementById('cont-cards');

productoS.forEach(productoS => {
    const cards = document.createElement('div');
    cards.className = 'producto'
    cards.innerHTML =  
    `<img class="ropa" src="${productoS.img}" alt="${productoS.producto}" />
    <h2 class="texto">${productoS.producto}</h2>
    <h2 class="texto"> ${productoS.talle} </h2>
    <p class="texto">Precio: $${productoS.precio}</p>
    <button id="Agregar">Agregar al Carrito</button>`;

    contenedor.appendChild(cards)
    cards.getElementsByTagName("button")[0].addEventListener("click",()=> agregarCarrito(productoS))
});

// Botones de Talle y Color ----------------------
function BotonC() {
    const Colors = document.getElementById('Colors')
    if (Colors.style.display === 'none' || Colors.style.display === '') {
        Colors.style.display = 'block';
    } else {
        Colors.style.display = 'none';
    }
}
export default BotonC
document.getElementById('Colores').addEventListener('click', BotonC)

function BotonT() {
    const sizes = document.getElementById('Sizes')
    if (sizes.style.display === 'none' || sizes.style.display === '') {
        sizes.style.display = 'block';
    } else {
        sizes.style.display = 'none';
    }
}
export {BotonT}
document.getElementById('Talles').addEventListener('click', BotonT)

// Filtrado de productos -------------------------
let colorSeleccionado = '';
let talleSeleccionado = '';

document.querySelectorAll('.divopciones .opciones').forEach(opcion => {
    opcion.addEventListener('click', (event) => {
        const valorSeleccionado = event.target.getAttribute('data-color') || event.target.getAttribute('data-talle');
        if (event.target.parentElement.id === 'Colors') {
            colorSeleccionado = valorSeleccionado; 
        } else if (event.target.parentElement.id === 'Sizes') {
            talleSeleccionado = valorSeleccionado; 
        }
        filtrar();
    });
});

function filtrar() {
    const contenedor = document.getElementById('cont-cards');
    contenedor.innerHTML = ''; 

    const filtrados = productoS.filter(productoS => {
        return (!colorSeleccionado || productoS.color === colorSeleccionado) &&
               (!talleSeleccionado || productoS.talle === talleSeleccionado);
    });

    filtrados.forEach(productoS => {
        const card = document.createElement('div');
        card.className = 'producto';
        card.innerHTML = `
            <img class="ropa" src="${productoS.img}" alt="${productoS.producto}" />
            <h2 class="texto">${productoS.producto}</h2>
            <h2 class="texto">${productoS.talle}</h2>
            <p class="texto">Precio: $${productoS.precio}</p>`;
        contenedor.appendChild(card); 
    });
}

// Funcion del Carrito ---------------------------

function actualizarCarrito() {
    const contenidoCarrito = document.getElementById("contenidoCarrito");
    contenidoCarrito.innerHTML = ''; 

    let memoria = JSON.parse(localStorage.getItem('carrito')) || [];
    memoria.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.innerHTML = 
        `${producto.producto} - Cantidad: ${producto.cantidad}
        <button onclick="eliminar('${producto.id}')"> Eliminar </button>`;
        contenidoCarrito.appendChild(divProducto);
    });
}

function agregarCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem('carrito')) || [];
    const indiceProducto = memoria.findIndex(item => item.id === producto.id);

    if (indiceProducto === -1) {
        producto.cantidad = 1; 
        memoria.push(producto);
    } else {
        memoria[indiceProducto].cantidad += 1;
    }
    localStorage.setItem('carrito', JSON.stringify(memoria));
    actualizarCarrito();
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById("carro");
    carritoDiv.style.display = carritoDiv.style.display === 'none' ? 'block' : 'none';
    actualizarCarrito(); 
}
document.getElementById('Agregar').addEventListener('click', ()=>{
    const producto = {id: productoS.id, producto: productoS.producto, precio: productoS.precio};
    agregarCarrito(producto)
})

function eliminar(id){
    let memoria = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarro = memoria.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarro))
    actualizarCarrito();
}
window.eliminar = eliminar;
window.mostrarCarrito = mostrarCarrito
