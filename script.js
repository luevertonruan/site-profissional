"use strict";

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", gravar);

function gravar(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const searchParams = new URLSearchParams();

  for (const par of formData) {
    searchParams.append(par[0], par[1], par[2], par[3]);
  }

  fetch("form.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      var sucesso = alert("Mensagem enviada!");
      document.getElementById("nome").value = " ";
      document.getElementById("sobrenome").value = " ";
      document.getElementById("email").value = " ";
      document.getElementById("msg").value = " ";
      return sucesso;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function mostrarGif() {
  let caixaGif = document.querySelector([".caixa-texto-mobile"]);
  if (caixaGif.classList.contains("abrir")) {
    caixaGif.classList.remove("abrir");
    document, (querySelector(".botao-gif").src = "");
  } else {
    caixaGif.classList.add("abrir");
    document.querySelector(".botao-gif").src = "";
  }
}
function mostrarGif2() {
  let caixaGif2 = document.querySelector([".caixa-texto-mobile2"]);
  if (caixaGif2.classList.contains("abrir")) {
    caixaGif2.classList.remove("abrir");
    document, (querySelector(".botao-gif2").src = "");
  } else {
    caixaGif2.classList.add("abrir");
    document.querySelector(".botao-gif2").src = "";
  }
}
function mostrarGif3() {
  let caixaGif = document.querySelector([".caixa-gif3"]);
  if (caixaGif.classList.contains("abrir")) {
    caixaGif.classList.remove("abrir");
    document, (querySelector(".botao-gif3").src = "");
  } else {
    caixaGif.classList.add("abrir");
    document.querySelector(".botao-gif3").src = "";
  }
}
function mostrarGif4() {
  let caixaGif2 = document.querySelector([".caixa-gif4"]);
  if (caixaGif2.classList.contains("abrir")) {
    caixaGif2.classList.remove("abrir");
    document, (querySelector(".botao-gif4").src = "");
  } else {
    caixaGif2.classList.add("abrir");
    document.querySelector(".botao-gif4").src = "";
  }
}

function menuShow() {
  let menuMobile = document.querySelector([".mobile-menu", ".conteudo-menu"]);
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document, (querySelector(".icone-menu").src = "icones/menu/icone-menu.png");
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icone-menu").src = "icones/menu/icone-menu.png";
  }
}
