/*
 * i18n.js — gemensam språklogik för index.html och visa.html.
 *
 * Läser strängar ur SITE_DATA.ui[SITE_DATA.lang], sätter <html lang>,
 * titel, meta, etiketter och språkväxlarens länk. Språkvalet sparas i
 * ?lang=sv|en av SITE_I18N.langLink() och i localStorage av data.js.
 */
(function (root) {
  "use strict";

  function t(D, key) {
    var u = (D.ui && D.ui[D.lang]) || (D.ui && D.ui.sv) || {};
    return Object.prototype.hasOwnProperty.call(u, key) ? u[key] : key;
  }

  function format(s, values) {
    return String(s).replace(/\{(\w+)\}/g, function (all, key) {
      return values && values[key] !== undefined ? values[key] : all;
    });
  }

  /* Lägg till ?lang= på interna HTML-länkar utan att störa fragmentet. */
  function addLang(href, D) {
    if (!href || !D || D.lang === "sv" || href.indexOf("lang=") !== -1) return href;
    var hash = href.indexOf("#");
    var base = hash === -1 ? href : href.slice(0, hash);
    var frag = hash === -1 ? "" : href.slice(hash);
    if (!/\.html(\?|$)/.test(base)) return href;
    return base + (base.indexOf("?") === -1 ? "?" : "&") + "lang=" + D.lang + frag;
  }

  function langLink(D, target) {
    var url = new URL(location.href);
    url.searchParams.set("lang", target);
    return url.pathname + url.search + url.hash;
  }

  function applyLinks(D) {
    Array.prototype.forEach.call(document.querySelectorAll("a[href]"), function (a) {
      var h = a.getAttribute("href");
      if (!h || /^(https?:|mailto:|#)/i.test(h)) return;
      var next = addLang(h, D);
      if (next !== h) a.setAttribute("href", next);
    });
  }

  function apply(D) {
    if (!D) return;
    document.documentElement.lang = D.lang;
    document.title = t(D, "title");

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(D, "metaDescription"));

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      el.textContent = t(D, el.getAttribute("data-i18n"));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-html]"), function (el) {
      el.innerHTML = t(D, el.getAttribute("data-i18n-html"));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-placeholder]"), function (el) {
      el.setAttribute("placeholder", t(D, el.getAttribute("data-i18n-placeholder")));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria]"), function (el) {
      el.setAttribute("aria-label", t(D, el.getAttribute("data-i18n-aria")));
    });

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      var other = D.lang === "sv" ? "en" : "sv";
      toggle.setAttribute("href", langLink(D, other));
      toggle.textContent = t(D, other === "en" ? "langToEn" : "langToSv");
      toggle.setAttribute("aria-label", t(D, "langLabel"));
      toggle.setAttribute("title", t(D, "langLabel"));
      if (!toggle.getAttribute("data-bound")) {
        toggle.setAttribute("data-bound", "1");
        toggle.addEventListener("click", function () {
          if (typeof D.setLang === "function") D.setLang(other);
        });
      }
    }
    applyLinks(D);
  }

  root.SITE_I18N = { t: t, format: format, addLang: addLang, applyLinks: applyLinks, apply: apply, langLink: langLink };
})(typeof window !== "undefined" ? window : globalThis);
