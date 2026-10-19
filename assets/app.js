// Amor Vitae · cotización de traslado. Sin servidor: termina en WhatsApp o en correo.
(function () {
  const S = window.SITIO;
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));

  $$("[data-sitio]").forEach(el => {
    const k = el.dataset.sitio; if (!(k in S)) return;
    if (S[k]) el.textContent = S[k]; else (el.closest("li") || el).remove();
  });
  const wa = "https://wa.me/" + S.whatsapp, bot = "https://wa.me/" + S.chatbot;
  $("#pie-whatsapp").href = wa; $("#pie-whatsapp").textContent = S.whatsappVisible;
  $("#pie-chatbot").href = bot; $("#pie-chatbot").textContent = S.chatbotVisible;
  $("#chatbot-visible").textContent = S.chatbotVisible;
  $("#boton-chatbot").href = bot + "?text=" + encodeURIComponent("Hola, quiero solicitar un traslado de Amor Vitae.");
  $("#pie-correo").href = "mailto:" + S.correo; $("#pie-correo").textContent = S.correo;
  if ($("#pie-grupo")) $("#pie-grupo").href = S.sitioGrupo;
  $("#ciudades").innerHTML = S.ciudades.map(c => `<option value="${c}">`).join("");

  const f = $("#form-cotizacion"), err = $("#error-cotizacion");
  const v = n => (f.elements[n].value || "").trim();

  $$("[data-enviar]").forEach(b => b.addEventListener("click", () => {
    const tipos = $$("#tipos input:checked").map(x => x.value);
    const faltan = $$("#form-cotizacion [required]").filter(x => x.type === "checkbox" ? !x.checked : !x.value.trim());
    if (faltan.length || !tipos.length) {
      const soloAutoriza = faltan.length === 1 && faltan[0].type === "checkbox" && tipos.length;
      err.textContent = soloAutoriza ? "Para enviar, autorice el tratamiento de sus datos."
        : "Complete los campos marcados con *" + (!tipos.length ? ", elija qué trasladamos" : "") + (faltan.some(x => x.type === "checkbox") ? " y autorice el tratamiento de sus datos." : ".");
      (faltan[0] || $("#tipos input")).focus();
      return;
    }
    err.textContent = "";
    const texto = [
      "Hola, " + S.nombre + ". Quisiera cotizar un traslado:", "",
      "Qué trasladamos: " + tipos.join(", "),
      "Ciudad: " + v("ciudad"),
      "Origen: " + v("origen"),
      "Destino: " + v("destino"),
      "Frecuencia: " + v("frecuencia"),
      v("volumen") ? "Envíos al mes (aprox.): " + v("volumen") : "",
      v("notas") ? "Condiciones: " + v("notas") : "", "",
      "Empresa: " + v("empresa"),
      "Contacto: " + v("contacto"),
      "Teléfono: " + v("telefono"),
      v("correo") ? "Correo: " + v("correo") : "", "",
      "Autorizo el tratamiento de mis datos según la política de tratamiento de datos de " + S.nombre + "."
    ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");
    if (b.dataset.enviar === "whatsapp") window.open(wa + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    else window.location.href = "mailto:" + S.correo + "?subject=" + encodeURIComponent("Cotización de traslado · " + v("empresa")) + "&body=" + encodeURIComponent(texto);
  }));

  // Aparición suave al desplazarse
  const obs = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }), { threshold: .12 }) : null;
  $$(".revelar").forEach(el => obs ? obs.observe(el) : el.classList.add("visible"));
})();
