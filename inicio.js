const modal = (texto) => {
  const div = document.createElement("div");
  div.classList.add("modal");

  const p = document.createElement("p");
  p.textContent = texto;

  const cerrarBtn = document.createElement("button");
  cerrarBtn.textContent = "Juan O";

  cerrarBtn.classList.add("btn");
  cerrarBtn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(p);
  div.appendChild(cerrarBtn);

  return div;
};

const modal2 = (texto) => {
  const div = document.createElement("div");
  div.classList.add("modal2");

  const p = document.createElement("p");
  p.textContent = texto;

  const cerrarBtn = document.createElement("button");
  cerrarBtn.textContent = "Esthepania E";
  cerrarBtn.textContent = "Carlos I";
  cerrarBtn.textContent = "Juan S";

  cerrarBtn.classList.add("btn");
  cerrarBtn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(p);
  div.appendChild(cerrarBtn);

  return div;
};

const modal3 = (texto) => {
  const div = document.createElement("div");
  div.classList.add("modal3");

  const p = document.createElement("p");
  p.textContent = texto;

  const cerrarBtn = document.createElement("button");
  cerrarBtn.textContent = "Carlos I";
  cerrarBtn.textContent = "Juan S";
  cerrarBtn.classList.add("btn");
  cerrarBtn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(p);
  div.appendChild(cerrarBtn);

  return div;
};
const modal4 = (texto) => {
  const div = document.createElement("div");
  div.classList.add("modal4");
  const p = document.createElement("p");
  p.textContent = texto;
  const cerrarBtn = document.createElement("button");
  cerrarBtn.textContent = "Juan S";
  cerrarBtn.classList.add("btn");
  cerrarBtn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(p);
  div.appendChild(cerrarBtn);

  return div;
};



const inicioPage = () => {
  const section = document.createElement("section");
  const boton = document.createElement("button");
  boton.textContent = "Aceptar";




  boton.classList.add("contBtn");
  boton.addEventListener("click", () => {
    const widthScreen = window.innerWidth;
    // if (widthScreen <= 375) {
    //   alert("Hola mobile!!!");
    // } else {
    //   alert("Hola desktop!!!");
    // }
    const msg = widthScreen <= 375 
    ? modal("Telefono:  ")
    : modal("Hola desktop!!!");

    section.appendChild(msg);
  });

  section.appendChild(boton);

  return section;
};

document.getElementById("page").appendChild(inicioPage());
