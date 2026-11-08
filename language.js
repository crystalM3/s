(() => {
  "use strict";
  const supported = new Set(["en", "zh"]);
  const initial = new URLSearchParams(location.search).get("lang");
  let language = supported.has(initial) ? initial : (/^zh/i.test(navigator.language) ? "zh" : "en");

  function applyLanguage(next, updateUrl) {
    language = next;
    document.documentElement.lang = next === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-en][data-zh]").forEach(node => {
      node.textContent = node.dataset[next];
    });
    for (const attribute of ["alt", "label", "content"]) {
      document.querySelectorAll("[data-en-" + attribute + "]").forEach(node => {
        const target = attribute === "label" ? "aria-label" : attribute;
        node.setAttribute(target, node.getAttribute("data-" + next + "-" + attribute));
      });
    }
    document.querySelectorAll("[data-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === next));
    });
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute("href");
      if (!/^(index|privacy)\.html(?:[?#]|$)/.test(href)) return;
      const target = new URL(href, location.href);
      target.searchParams.set("lang", next);
      link.setAttribute("href", target.pathname.split("/").pop() + target.search + target.hash);
    });
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set("lang", next);
      try { history.replaceState(null, "", url); } catch (_) { /* Local-file preview may restrict history. */ }
    }
  }

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });
  window.addEventListener("popstate", () => {
    const next = new URLSearchParams(location.search).get("lang");
    applyLanguage(supported.has(next) ? next : language, false);
  });
  applyLanguage(language, false);
})();
