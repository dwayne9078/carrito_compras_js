const btns = document.querySelectorAll("input[type='button']");
const nombresProductos = document.getElementsByClassName('titulo_producto');
const imgsProductos = document.querySelectorAll("img[src*='.png']");
const preciosProductos = document.getElementsByClassName('precios');
const elemCarrito = document.getElementsByClassName('carrito')[0];
const posicionesArticulo = []

let contadorArticulos = 0;

function agregarProducto(producto){

    let id = producto;
    let nombreProducto = "";
    let precioProducto = 0;
    let imgProducto = "";

    switch(id) {
        case 'monitor':
            nombreProducto = `<h4>${nombresProductos[0].textContent}</h4>`;
            imgProducto = `<img src=${imgsProductos[0].src}>`;
            precioProducto = `<span>$${parseFloat(preciosProductos[0].textContent)}</span>`;
            elemCarrito.innerHTML += `<div> 
                ${nombreProducto} 
                ${imgProducto} 
                ${precioProducto}
                </div>`;
            btns[0].disabled = true
            
            break;
        case 'teclado':
            nombreProducto = `<h4>${nombresProductos[1].textContent}</h4>`;
            imgProducto = `<img src=${imgsProductos[1].src}>`;
            precioProducto = `<span>$${parseFloat(preciosProductos[1].textContent)}</span>`;
            elemCarrito.innerHTML += `<div> 
                ${nombreProducto} 
                ${imgProducto} 
                ${precioProducto}
                </div>`;
            btns[1].disabled = true
            break;
        case 'desktop':
            nombreProducto = `<h4>${nombresProductos[2].textContent}</h4>`;
            imgProducto = `<img src=${imgsProductos[2].src}>`;
            precioProducto = `<span>$${parseFloat(preciosProductos[2].textContent)}</span>`;
            elemCarrito.innerHTML += `<div> 
                ${nombreProducto} 
                ${imgProducto} 
                ${precioProducto}
                </div>`;
            btns[2].disabled = true
            break;
        case 'mochila':
            nombreProducto = `<h4>${nombresProductos[3].textContent}</h4>`;
            imgProducto = `<img src=${imgsProductos[3].src}>`;
            precioProducto = `<span>$${parseFloat(preciosProductos[3].textContent)}</span>`;
            elemCarrito.innerHTML += `<div> 
                ${nombreProducto} 
                ${imgProducto} 
                ${precioProducto}
                </div>`;
            btns[3].disabled = true
            break;
        case 'mouse':
            nombreProducto = `<h4>${nombresProductos[4].textContent}</h4>`;
            imgProducto = `<img src=${imgsProductos[4].src}>`;
            precioProducto = `<span>$${parseFloat(preciosProductos[4].textContent)}</span>`;
            elemCarrito.innerHTML += `<div> 
                ${nombreProducto} 
                ${imgProducto} 
                ${precioProducto}
                </div>`;
            btns[4].disabled = true
            break;
        case 'ssd':
            nombreProducto = `<h4>${nombresProductos[5].textContent}</h4>`;
            imgProducto = `<img src=${imgsProductos[5].src}>`;
            precioProducto = `<span>$${parseFloat(preciosProductos[5].textContent)}</span>`;
            elemCarrito.innerHTML += `<div> 
                ${nombreProducto} 
                ${imgProducto} 
                ${precioProducto}
                </div>`;
            btns[5].disabled = true
            break;
    }
    contadorArticulos++;
}

function vaciarCarrito(){

    if(contadorArticulos === 0){
        alert('No hay articulos');
    } else {
        elemCarrito.innerHTML = `
            <h3>Carrito de Compras</h3> 
            <input type="button" value="Pagar" id="btn_pagar" onclick=pagarCarrito()>
            <input type="button" value="Vaciar Carrito" id="btn_reset" onclick=vaciarCarrito()>`;
    
        for(let i = 0; i< btns.length; i++){
            btns[i].disabled = false;
        }

        contadorArticulos = 0;
    }

}

function pagarCarrito(){
    let precioPagar = 0;

    for(let i = 0; i < btns.length; i++){
        if(btns[i].disabled === true){
            posicionesArticulo[i] = i;
        }
    }

    if(posicionesArticulo.length !== 0){
        for(let j = 0; j < posicionesArticulo.length; j++){
            if(posicionesArticulo[j] !== undefined) {
                precioPagar += parseFloat(preciosProductos[j].textContent);
            }
        }

        alert(`Total a pagar = ${precioPagar}`);
    } else {
        alert('No hay Articulos')
    }
        posicionesArticulo.splice(0, posicionesArticulo.length);
}