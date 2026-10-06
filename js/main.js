// Helper: build a WhatsApp link with a ready-typed message
const wa = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// 1. Hero preview: tabs that switch between systems
const tabs = document.getElementById("tabs");
const panel = document.getElementById("panel");

function showSystem(id) {
  const s = SYSTEMS.find((x) => x.id === id);
  tabs.querySelectorAll("button").forEach((b) =>
    b.setAttribute("aria-selected", b.dataset.id === id)
  );
  panel.innerHTML =
    `<h3>${s.name}</h3>` +
    s.preview
      .map(
        ([label, value], i) =>
          `<div class="metric" style="animation-delay:${i * 80}ms">
             <span>${label}</span><strong>${value}</strong>
           </div>`
      )
      .join("");
}

SYSTEMS.forEach((s) => {
  const b = document.createElement("button");
  b.role = "tab";
  b.dataset.id = s.id;
  b.textContent = s.name.replace("Vuqa ", "");
  b.addEventListener("click", () => showSystem(s.id));
  tabs.appendChild(b);
});
showSystem(SYSTEMS[0].id);

// 2. Catalog cards
document.getElementById("catalog").innerHTML = SYSTEMS.map(
  (s) => `
  <article class="card">
    <p class="tag">${s.category}</p>
    <h3>${s.name}</h3>
    <p>${s.description}</p>
    <ul>${s.features.map((f) => `<li>${f}</li>`).join("")}</ul>
    <a class="btn btn-small" target="_blank" rel="noopener"
       href="${wa(`Hello Vuqa, I would like a demo of ${s.name}.`)}">Request a demo</a>
  </article>`
).join("");

// 3. WhatsApp buttons + footer year
const hello = wa("Hello Vuqa, I would like to know more about your systems.");
document.getElementById("hero-wa").href = hello;
document.getElementById("contact-wa").href = hello;
document.getElementById("year").textContent = new Date().getFullYear();
