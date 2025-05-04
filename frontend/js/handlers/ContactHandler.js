// handlers/contactHandler.js
export function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
  
      try {
        const res = await fetch("https://portafoliodev-production.up.railway.app/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
  
        const result = await res.json();
        alert(result.message);
        form.reset();
      } catch (err) {
        alert("❌ Error al enviar el mensaje.");
        console.error(err);
      }
    });
  }
  