/* =====================================================================
   IMPOSTAZIONI GENERALI DEL SITO (nome, menu, social)
   - Per cambiare l'ordine del menu, sposta le righe su o giù
     (ogni riga tranne l'ultima finisce con la virgola).
   - Per togliere una pagina dal menu, cancella la sua riga.
   - Il testo di ogni pagina si modifica nel file della pagina
     (libri.html, articoli.html, ecc.), aprendolo con un editor di testo.
   ===================================================================== */
const SITO = {
  nome: "Mariangela De Luca",
  mestiere: "Docente di italiano e autrice",
  dominio: "https://www.mariangeladeluca.it",

  menu: [
    ["chi-sono", "Chi sono"],
    ["articoli", "Articoli"],
    ["libri", "Libri"],
    ["lavori", "Lavori"],
    ["podcast", "Podcast"],
    ["contatti", "Contatti"]
  ],

  // Compaiono in fondo a ogni pagina. Metti gli indirizzi veri.
  social: [
    ["Instagram", "https://instagram.com/larossa.pinta"],
    ["Substack", "https://substack.com"]
  ]
};

/* ============ da qui in giù non serve toccare nulla ============ */
(function () {
  const pagina = document.body.dataset.pagina;
  const esterno = ([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`;

  document.getElementById("testata").innerHTML =
    `<a class="nome" href="index.html">${SITO.nome}</a>
     <nav class="menu" aria-label="Menu principale"><ul>` +
    SITO.menu.map(([id, t]) =>
      `<li><a href="${id}.html"${id === pagina ? ' aria-current="page"' : ""}>${t}</a></li>`).join("") +
    `</ul></nav>`;

  document.getElementById("piede").innerHTML =
    `<div class="piede-dentro"><span class="social">${SITO.social.map(esterno).join("")}</span>
     <span class="copyright">© ${SITO.nome} ${new Date().getFullYear()}</span></div>`;

  // Dati strutturati per Google (solo in homepage)
  if (pagina === "home") {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Person",
      name: SITO.nome, jobTitle: SITO.mestiere, url: SITO.dominio,
      image: SITO.dominio + "/foto1.jpg", sameAs: SITO.social.map(x => x[1])
    });
    document.head.appendChild(s);
  }
})();
