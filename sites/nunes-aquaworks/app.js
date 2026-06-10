/* Nunes Aquaworks — comportamento do site (sem dependências externas) */
(function () {
  "use strict";

  // Imagens com fallback para o placeholder (substitui o antigo onerror inline,
  // que é bloqueado pela Content-Security-Policy).
  document.querySelectorAll(".img-frame img").forEach(function (img) {
    img.addEventListener("error", function () {
      var frame = img.parentElement;
      if (frame) frame.classList.add("img-missing");
      img.remove();
    });
  });

  // Header encolhe ao fazer scroll.
  var hdr = document.querySelector("header.site");
  if (hdr) {
    addEventListener("scroll", function () {
      hdr.classList.toggle("scrolled", scrollY > 10);
    }, { passive: true });
  }

  // Menu mobile.
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menuBtn");
  if (nav && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Idioma PT/EN.
  function setLang(l) {
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (el.dataset.pt === undefined) el.dataset.pt = el.textContent;
      el.textContent = l === "en" ? el.dataset.en : el.dataset.pt;
    });
    document.querySelectorAll("[data-en-ph]").forEach(function (el) {
      if (el.dataset.ptPh === undefined) el.dataset.ptPh = el.placeholder;
      el.placeholder = l === "en" ? el.dataset.enPh : el.dataset.ptPh;
    });
    document.documentElement.lang = l;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === l);
    });
    try { localStorage.setItem("aqw-lang", l); } catch (e) {}
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  try {
    if (localStorage.getItem("aqw-lang") === "en") setLang("en");
  } catch (e) {}

  // Formulário → deep link de WhatsApp (sem backend, nada é guardado).
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var v = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };
      var en = document.documentElement.lang === "en";
      var lines = [
        en ? "Hello! I would like a quote." : "Olá! Gostava de um orçamento.",
        (en ? "Name: " : "Nome: ") + v("f-nome"),
        (en ? "Contact: " : "Contacto: ") + v("f-contacto"),
        v("f-localidade") ? (en ? "Town: " : "Localidade: ") + v("f-localidade") : "",
        v("f-msg") ? (en ? "Message: " : "Mensagem: ") + v("f-msg") : ""
      ].filter(Boolean);
      window.open(
        "https://wa.me/351967358231?text=" + encodeURIComponent(lines.join("\n")),
        "_blank",
        "noopener,noreferrer"
      );
    });
  }

  // Ano corrente no rodapé.
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
