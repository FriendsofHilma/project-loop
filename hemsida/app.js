/*
 * app.js — renderar hemsidan ur data.js.
 * Håller sig helt på clientsidan; inga externa resurser eller nätverksanrop.
 * All synlig text kommer från den aktiva locale:n i SITE_DATA.
 */
(function () {
  "use strict";

  var D = window.SITE_DATA;
  var I = window.SITE_I18N;
  if (!D || !I) throw new Error("data.js och i18n.js måste laddas före app.js");

  var U = D.ui[D.lang] || D.ui.sv;
  var READABLE = /\.(md|json|csv|txt|py|js|ts|mjs)$/i;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function href(path) {
    return I.addLang(READABLE.test(path)
      ? "visa.html?f=" + encodeURIComponent(path)
      : path, D);
  }

  function stats() {
    document.getElementById("stats").innerHTML = U.stats.map(function (it) {
      return '<span class="stat"><b>' + esc(it[0]) + "</b> " + esc(it[1]) + "</span>";
    }).join("");
    document.getElementById("updated").textContent = D.updated;
  }

  function stepCard(s) {
    var chips = s.links.map(function (l) {
      return '<a class="chip" href="' + esc(href(l.path)) + '">' + esc(l.label) + "</a>";
    }).join("");
    var aria = I.format(U.stepAria, { n: s.n, title: s.title });
    var alt = I.format(U.stepImgAlt, { n: s.n, title: s.title });
    return '<article class="card step-card" data-search="' + esc((s.title + " " + s.definition + " " + s.blurb + " " + s.links.map(function (l) { return l.label; }).join(" ")).toLowerCase()) + '">' +
      '<a class="art" href="' + esc(href(s.links[0].path)) + '" aria-label="' + esc(aria) + '">' +
      '<span class="num">' + String(s.n).padStart(2, "0") + "</span>" +
      '<img src="' + esc(s.art) + '" alt="' + esc(alt) + '">' +
      "</a>" +
      '<div class="caption"><h3>' + esc(s.title) + "</h3>" +
      '<div class="def">"' + esc(s.definition) + '"</div>' +
      "<p>" + esc(s.blurb) + "</p></div>" +
      '<div class="links">' + chips + "</div></article>";
  }

  function groupCard(g) {
    var rows = g.links.map(function (l) {
      var ext = l.path.split(".").pop().toUpperCase();
      return '<li><a href="' + esc(href(l.path)) + '"><span>' + esc(l.label) +
        "</span><span>" + esc(ext) + "</span></a></li>";
    }).join("");
    return '<article class="card group-card" data-search="' + esc((g.title + " " + g.desc + " " + g.links.map(function (l) { return l.label; }).join(" ")).toLowerCase()) + '">' +
      '<div class="icon" aria-hidden="true">' + esc(g.icon) + "</div>" +
      "<h3>" + esc(g.title) + "</h3><p>" + esc(g.desc) + "</p>" +
      '<ul class="file-list">' + rows + "</ul></article>";
  }

  function figureCard(fig) {
    return '<div class="figure-card"><a href="../figures/' + esc(fig.file) + '" target="_blank" rel="noopener">' +
      '<img src="../figures/' + esc(fig.file) + '" alt="' + esc(fig.title) + '" loading="lazy">' +
      "</a><div>" + esc(fig.title) + "</div></div>";
  }

  function render() {
    I.apply(D);
    stats();
    document.getElementById("step-grid").innerHTML = D.steps.map(stepCard).join("");
    document.getElementById("group-grid").innerHTML = D.groups.map(groupCard).join("");
    document.getElementById("figure-grid").innerHTML = D.figures.map(figureCard).join("");

    var input = document.getElementById("filter");
    var count = document.getElementById("filter-count");
    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      ["step-grid", "group-grid"].forEach(function (id) {
        Array.prototype.forEach.call(document.getElementById(id).children, function (card) {
          var hit = !q || card.getAttribute("data-search").indexOf(q) !== -1;
          card.classList.toggle("hidden", !hit);
          if (hit) shown += 1;
        });
      });
      count.textContent = q ? I.format(U.resultCount, { n: shown }) : "";
    }
    input.addEventListener("input", apply);
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });
    I.applyLinks(D);
  }

  render();
})();
