//Factura con localStorage

const productos = JSON.parse(localStorage.getItem('producto')) ?? [];
mostrarTabla();
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
      
        let result = productos.reduce((total, item)=>{
          return total=item.cantidad*item.precioUnitario
        },0)
        producto.valorTotal=result;

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
          <td>${item.valorTotal}</td>
    </tr>`
  })
    let tab = document.querySelector("#tab");
    tab.innerHTML = result;
}


