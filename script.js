var total = 0;

function agregarAlCarrito(btn) {
    var producto = btn.parentNode.querySelector('.producto-img').getAttribute('data-nombre');
    var precio = 15000; // Precio fijo de cada prenda en ARS
    total += precio;
    actualizarCarrito(producto, precio);
    actualizarTotal();
    mostrarCarrito(); // Mostrar el carrito después de agregar un artículo
}

function actualizarCarrito(producto, precio) {
    var carritoLista = document.querySelector('.carrito-lista');
    var itemCarrito = document.createElement('li');
    itemCarrito.innerHTML = `
        <span>${producto} - $${precio} ARS</span>
        <button class="eliminar-producto" onclick="eliminarProducto(this)">Eliminar</button>
    `;
    carritoLista.appendChild(itemCarrito);
}

function eliminarProducto(btn) {
    var producto = btn.parentNode;
    var precioTexto = producto.textContent.match(/\$([\d,]+)/); // Expresión regular para extraer el precio
    if (precioTexto) {
        var precio = parseFloat(precioTexto[1].replace(',', '')); // Convertir el precio a un número
        total -= precio; // Restar el precio del total
        actualizarTotal(); // Actualizar el total mostrado
    }
    producto.parentNode.removeChild(producto); // Eliminar el elemento del DOM
}



function actualizarTotal() {
    var totalElemento = document.querySelector('.total');
    totalElemento.textContent = 'Total: $' + total + ' ARS';
}

function mostrarCarrito() {
    var carrito = document.getElementById('carrito');
    carrito.classList.add('mostrar'); // Agregamos la clase "mostrar"
}

function cerrarCarrito() {
    var carrito = document.getElementById('carrito');
    carrito.classList.remove('mostrar'); // Eliminamos la clase "mostrar"
}


function vaciarCarrito() {
    var carritoLista = document.querySelector('.carrito-lista');
    carritoLista.innerHTML = ''; // Vacía la lista de elementos del carrito
    total = 0; // Restablece el total a 0
    actualizarTotal();
    cerrarCarrito(); // Cierra el carrito después de vaciarlo
}

window.addEventListener('load', function() {
    var elementosAnimados = document.querySelectorAll('.animate-on-load');

    // Agrega la clase "show" para mostrar los elementos después de un pequeño retraso
    setTimeout(function() {
        elementosAnimados.forEach(function(elemento) {
            elemento.classList.add('show');
        });
    }, 1000); // Ajusta este tiempo según sea necesario
});
// Obtener todas las imágenes de productos
function cambiarImagen(img, nuevaSrc) {
    img.src = nuevaSrc;
}
