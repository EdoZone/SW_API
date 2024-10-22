let personajes1 = document.querySelector("#pers1");
let personajes2 = document.querySelector("#pers2");
let personajes3 = document.querySelector("#pers3");
let rango1 = document.querySelector("#rango1");
let rango2 = document.querySelector("#rango2");
let rango3 = document.querySelector("#rango3");

async function* obtenerDatos(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${i}/`);
      const result = await response.json();
      
      if (result.detail && result.detail === `Not found`) {
        throw new Error();
      }
      yield result;
    } catch (error) {
      console.log(error);
      alert(`El personaje con el id: ${i} no pudo ser encontrado`);
    }
  }
}

const generador1 = obtenerDatos(1, 5);
const generador2 = obtenerDatos(6, 11);
const generador3 = obtenerDatos(12, 17);

rango1.addEventListener("mouseenter", async () => {
  let response = await generador1.next();
  let nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add(
    "tarjeta",
    "d-inline-flex",
    "mx-2",
    "mb-3",
    "p-2",
    "shadow",
    "rounded",
    "col-3"
  );

  nuevoDiv.innerHTML = `
    <div class="col-1 m-2">
            <span class="circle_color rojo"></span>
        </div>
        <div class="tarjeta ms-3">
            <h6>${response.value.name}</h6>
            <span>Altura: ${response.value.height}cms.  </span><span>Peso: ${response.value.mass}kg.</span>
        </div>`;
  personajes1.appendChild(nuevoDiv);
});

rango2.addEventListener("mouseenter", async () => {
  let response = await generador2.next();
  let nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add(
    "tarjeta",
    "d-inline-flex",
    "mx-2",
    "mb-3",
    "p-2",
    "shadow",
    "rounded",
    "col-3"
  );

  nuevoDiv.innerHTML = `
        <div class="col-1 m-2">
            <span class="circle_color verde"></span>
        </div>
        <div class="tarjeta ms-3">
            <h6>${response.value.name}</h6>
            <span>Altura: ${response.value.height}cms.  </span><span>Peso: ${response.value.mass}kg.</span>
        </div>`;
  personajes2.appendChild(nuevoDiv);
});

rango3.addEventListener("mouseenter", async () => {
  let response = await generador3.next();
  let nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add(
    "tarjeta",
    "d-inline-flex",
    "mx-2",
    "mb-3",
    "p-2",
    "shadow",
    "rounded",
    "col-3"
  );

  nuevoDiv.innerHTML = `
      <div class="col-1 m-2">
              <span class="circle_color azul"></span>
          </div>
          <div class="tarjeta ms-3">
              <h6>${response.value.name}</h6>
              <span>Altura: ${response.value.height}cms.  </span><span>Peso: ${response.value.mass}kg.</span>
          </div>`;
  personajes3.appendChild(nuevoDiv);
});
