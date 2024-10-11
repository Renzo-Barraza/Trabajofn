import productos from './data.js'; 

const contenedor = document.getElementById('cont-cards');

productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'producto'
    card.innerHTML =  
    `<img class="ropa" src="${producto.img}" alt="${producto.producto}" />
    <h2 class="texto">${producto.producto}</h2>
    <h2 class="texto"> ${producto.talle} </h2>
    <p class="texto">Precio: $${producto.precio}</p>`;

    contenedor.appendChild(card)
});
