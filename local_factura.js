//Factura con localStorage

const productos = JSON.parse(localStorage.getItem('producto')) ?? [];

let tabla = document.querySelector("#table");

//Guardar en el formulario
var formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function (e) { //recolecta los datos del formulario
  e.preventDefault();

  const producto = {
    nombre: document.getElementById('nombre').value,
    cantidad: document.getElementById('cantidad').value,
    precioUnitario: document.getElementById('precioUnitario').value
  }

  let prueb=productos.some((item)=>{
    return item.nombre==producto.nombre
  })

if (prueb == false) {
    productos.push(producto)
    localStorage.setItem('producto', JSON.stringify(productos));
    mostrarTabla();
} else { alert('producto ya existe') }
});


function mostrarTabla() {
  let result="";
  productos.forEach((item) => {
    result += `
      <tr>
          <td>${item.nombre}</td>
          <td>${item.cantidad}</td>
          <td>${item.precioUnitario}</td>
    </tr>`
  })
    let tab = document.querySelector("#tab");
    tab.innerHTML = result;
}

function valorTotal(){
  return 0;
}