// Baseline Rally — shared site scripts
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    function closeMenu(returnFocus) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      // The closed menu is visibility:hidden, so a link that still had focus
      // would strand it on an unfocusable element and dump the user back to
      // the top of the page. Hand focus back to the button that opened it.
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close menu when a link is tapped (navigating away, so don't move focus)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });

    // Escape closes the menu — the expected keyboard behaviour for a
    // disclosure, and the only way out for someone not using a pointer.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) closeMenu(true);
    });
  }

  // Highlight the current page in the nav
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
})();
