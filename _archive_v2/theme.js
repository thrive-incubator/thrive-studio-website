/* Thrive Studio — theme switcher.
   Three toggle-able visual directions; choice persists in localStorage.
   The initial theme is set by a tiny inline script in each page's <head>
   (avoids a flash of the wrong theme); this file builds the floating
   switcher and wires up clicks. */
(function () {
  var THEMES = [
    { id: "brief", label: "Brief" },
    { id: "manual", label: "Manual" },
    { id: "ink", label: "Ink" }
  ];
  var KEY = "ts-theme";

  function current() {
    return document.documentElement.getAttribute("data-theme") || "brief";
  }
  function apply(id) {
    document.documentElement.setAttribute("data-theme", id);
    try { localStorage.setItem(KEY, id); } catch (e) {}
    update();
  }
  var wrap;
  function update() {
    if (!wrap) return;
    var cur = current();
    wrap.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.theme === cur));
    });
  }
  function build() {
    wrap = document.createElement("div");
    wrap.className = "theme-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Visual theme");
    var lab = document.createElement("span");
    lab.className = "ts-lab";
    lab.textContent = "Theme";
    wrap.appendChild(lab);
    THEMES.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.dataset.theme = t.id;
      b.textContent = t.label;
      b.addEventListener("click", function () { apply(t.id); });
      wrap.appendChild(b);
    });
    document.body.appendChild(wrap);
    update();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
