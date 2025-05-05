import Home from './views/home.js';
import About from './views/about.js';
import Projects from './views/projects.js';
import Contact from './views/contact.js';
import Layout from './layout/layout.js';
import { initContactForm } from '../js/handlers/ContactHandler.js'; 

// 👇 Agrega esta función directamente aquí
function setupMenuToggle() {
  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });

    // Cerrar sidebar al hacer clic en un enlace
    sidebar.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("show");
      });
    });
  }
}


const routes = {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/contact': Contact,
};

export default function router() {
  const path = location.hash.slice(1) || '/';
  const viewFn = routes[path] || Home;
  const content = viewFn();
  document.body.innerHTML = Layout(content);

  // Ejecutar funcionalidad del menú hamburguesa
  setupMenuToggle();

  // Ejecutar lógica específica de contacto
  if (path === '/contact') {
    initContactForm();
  }
}

