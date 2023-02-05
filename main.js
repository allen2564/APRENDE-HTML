let iniciales = ["html", "!DOCTYPE html"];
let metadatos = ["head", "title", "link", "meta", "style"];
let secciones = [
  "body",
  "nav",
  "main",
  "section",
  "article",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "footer",
];
let agrupacion = [
  "p",
  "pre",
  "blockquote",
  "ol",
  "ul",
  "li",
  "dl",
  "dt",
  "dd",
  "figure",
  "figcaption",
  "div",
];
let semantica = [
  "a",
  "strong",
  "small",
  "cite",
  "sub",
  "sup",
  "mark",
  "span",
  "br",
];
let incrustar = [
  "img",
  "iframe",
  "embed",
  "object",
  "video",
  "audio",
  "source",
  "svg",
];
let tablas = [
  "table",
  "caption",
  "colgroup",
  "tbody",
  "tbody",
  "thead",
  "tfoot",
  "tr",
  "td",
  "th",
];
let formularios = [
  "form",
  "fieldset",
  "legend",
  "label",
  "input",
  "button",
  "select",
  "option",
  "textarea",
];
let excluidos = [
  "!DOCTYPE html",
  "input",
  "source",
  "embed",
  "img",
  "br",
  "hr",
  "p",
  "link",
];

let btniniciales = document.getElementById("iniciales");
let btnmetadatos = document.getElementById("metadatos");
let btnsecciones = document.getElementById("secciones");
let btnagrupacion = document.getElementById("agrupacion");
let btnsemantica = document.getElementById("semantica");
let btnincrustar = document.getElementById("incrustar");
let btntablas = document.getElementById("tablas");
let btnformularios = document.getElementById("formularios");
let objeto = document.getElementById("objeto");

const toggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector("ul");

toggler.addEventListener("click", function() {
  navbarNav.classList.toggle("show");
});


function vermas(id){
  if(id =="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
  }
  else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
  }
}



function recorrer(array) {
  objeto.innerText = "";
  aumentar = 0;
  array.forEach((element) => {
    
    if (excluidos.includes(element)) {
      objeto.innerText = objeto.innerText + `<${element}>\n\r`;
    } else {
      objeto.innerText = objeto.innerText + `<${element}></${element}>\n\r`;
    }
  });
}

btniniciales.onclick = () => {
  let elemento = recorrer(iniciales);
};

btnmetadatos.onclick = () => {
  let elemento = recorrer(metadatos);
};

btnsecciones.onclick = () => {
  let elemento = recorrer(secciones);
};

btnagrupacion.onclick = () => {
  let elemento = recorrer(agrupacion);
};

btnsemantica.onclick = () => {
  let elemento = recorrer(semantica);
};

btnincrustar.onclick = () => {
  let elemento = recorrer(incrustar);
};

btntablas.onclick = () => {
  let elemento = recorrer(tablas);
};

btnformularios.onclick = () => {
  let elemento = recorrer(formularios);
};
