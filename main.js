// console.log("uno");
// console.log("dos");
// setTimeout(()=>{
//   alert("hola Mundo")
// }, 10000)

// console.log("tres");
// console.log("cuatro");
// console.log("cinco");

const btnNew = document.querySelector("#btn-enviar")
const btnEliminar = document.querySelector("#btn-eliminar")

async function llamadoAunaAPI(){
  const llamado = await fetch("https://api.escuelajs.co/api/v1/categories")
  const datos = await llamado.json()
  const tabla = document.querySelector(".table")
  datos.forEach(dato => {
    tabla.innerHTML += `
  
      <tr>
            <th scope="row">${dato.id}</th>
            <td>${dato.name}</td>
            <td>
              <img src="${dato.image}" width = 100px>
            </td>
      </tr>
`
  });
}


llamadoAunaAPI();

const newCategory = {
  name: "entendidas las apis",
  image: "https://www.bigbaydata.com/wp-content/uploads/2022/11/sql_ejercicios.png"
}

function enviarDatosAPI(){
  fetch("https://api.escuelajs.co/api/v1/categories",{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCategory)
  })

}
btnNew.addEventListener("click", enviarDatosAPI)
btnEliminar.addEventListener("click", eliminar)

function eliminar(){
  let id = prompt("ingresa el ID de la categoria a eliminar")
  fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
}
