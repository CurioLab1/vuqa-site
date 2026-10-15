// Shared header + footer: edit the menu HERE and every page updates.
const MENU = [
  ["Home", "index.html"],
  ["Systems", "index.html#systems"],
  ["About", "about.html"],
  ["Contact", "contact.html"],
];
const here = location.pathname.split("/").pop() || "index.html";

document.getElementById("site-header").innerHTML = `
<header class="nav">
  <a class="brand" href="index.html" aria-label="Vuqa home">
    <img src="images/vuqa-icon.png" alt="" width="36" height="36"><span>Vuqa</span>
  </a>
  <nav aria-label="Main">
    ${MENU.map(([t, h]) => `<a href="${h}" ${h === here ? 'aria-current="page"' : ""}>${t}</a>`).join("")}
    <a class="btn btn-small" id="nav-wa" href="#">WhatsApp us</a>
  </nav>
</header>`;

document.getElementById("site-footer").innerHTML = `
<footer class="footer">
  <div>
    <a class="brand" href="index.html"><img src="images/vuqa-icon.png" alt="" width="32" height="32"><span>Vuqa</span></a>
    <p>Simple, secure business systems built in Kenya.</p>
  </div>
  <div><h4>Explore</h4>${MENU.map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</div>
  <div><h4>Reach us</h4>
    <a href="tel:+254728440292">+254 728 440 292</a>
    <a href="mailto:${EMAIL}">${EMAIL}</a>
  </div>
  <p class="copy">&copy; ${new Date().getFullYear()} Vuqa. All rights reserved. &middot; vuqa.co.ke</p>
</footer>`;

document.getElementById("nav-wa").href =
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Vuqa, I would like to know more about your systems.")}`;
