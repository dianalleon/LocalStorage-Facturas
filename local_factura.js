//Factura con localStorage

const productos = JSON.parse(localStorage.getItem('producto')) ?? [];

let tabla = document.querySelector("#table");

//Guardar en el formulario



var formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function () { //recolecta los datos del formulario
  const producto = {
    nombre: document.getElementById('nombre').value,
    cantidad: document.getElementById('cantidad').value,
    precioUnitario: document.getElementById('precioUnitario').value
  }
  productos.push(producto);
  localStorage.setItem('producto', JSON.stringify(productos))
  mostrarTabla()
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


