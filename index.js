fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      
var boton = document.getElementById("Inicio-btn");

function mehiciste () {
    console.log("me hiciste clic");
}

boton.addEventListener("click", mehiciste);

