const wa = (t) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Hero slideshow (home page only) ----------
const slider = document.getElementById("slider");
if (slider) {
  slider.innerHTML =
    SYSTEMS.map(
      (s, i) => `
    <div class="slide g-${s.id}" style="background-image:url(images/${s.id}.jpg),var(--fb)" ${i ? 'aria-hidden="true"' : ""}>
      <div class="slide-inner">
        <p class="tag">${s.name} &middot; ${s.category}</p>
        <h1>${s.headline}</h1>
        <p class="lead">${s.sub}</p>
        <div class="actions">
          <a class="btn" target="_blank" rel="noopener" href="${wa(`Hello Vuqa, I would like a demo of ${s.name}.`)}">Request a demo</a>
          <a class="btn btn-ghost" href="#systems">See all systems</a>
        </div>
      </div>
      <div class="float-card">
        <b>${s.name}</b>
        ${s.preview.map(([l, v]) => `<div><span>${l}</span><strong>${v}</strong></div>`).join("")}
        <small>Sample figures</small>
      </div>
    </div>`
    ).join("") +
    `<div class="controls">
       <button id="prev" aria-label="Previous slide">&#8592;</button>
       <span id="dots">${SYSTEMS.map((s, i) => `<button data-i="${i}" aria-label="Show ${s.name}"></button>`).join("")}</span>
       <button id="next" aria-label="Next slide">&#8594;</button>
     </div>`;

  const slides = [...slider.querySelectorAll(".slide")];
  const dots = [...slider.querySelectorAll("#dots button")];
  let cur = 0, timer;

  const go = (n) => {
    cur = (n + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === cur);
      s.setAttribute("aria-hidden", i !== cur);
    });
    dots.forEach((d, i) => d.classList.toggle("on", i === cur));
  };
  const play = () => { if (!reduce) { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6500); } };
  const stop = () => clearInterval(timer);

  document.getElementById("prev").onclick = () => { go(cur - 1); play(); };
  document.getElementById("next").onclick = () => { go(cur + 1); play(); };
  dots.forEach((d) => (d.onclick = () => { go(+d.dataset.i); play(); }));
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", play);
  slider.addEventListener("focusin", stop);
  go(0); play();
}

// ---------- Catalog cards ----------
const catalog = document.getElementById("catalog");
if (catalog) {
  catalog.innerHTML = SYSTEMS.map(
    (s) => `
    <article class="card reveal">
      <div class="card-photo g-${s.id}" style="background-image:url(images/${s.id}.jpg),var(--fb)"></div>
      <div class="card-body">
        <p class="tag">${s.category}</p>
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <ul>${s.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <a class="btn btn-small" target="_blank" rel="noopener" href="${wa(`Hello Vuqa, I would like a demo of ${s.name}.`)}">Request a demo</a>
      </div>
    </article>`
  ).join("");
}

// ---------- Contact form -> opens WhatsApp with the details typed ----------
const form = document.getElementById("contact-form");
if (form) {
  const sel = form.elements.interest;
  SYSTEMS.concat([{ name: "Something else" }]).forEach((s) => sel.add(new Option(s.name, s.name)));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = form.elements;
    window.open(
      wa(`Hello Vuqa. I am ${f.name.value} (${f.phone.value}). Interested in: ${f.interest.value}. ${f.message.value}`),
      "_blank"
    );
  });
}

// ---------- Fade-in on scroll ----------
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
