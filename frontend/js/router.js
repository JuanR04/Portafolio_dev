import Home from './views/home.js';
import About from './views/about.js';
import Projects from './views/projects.js';
import Contact from './views/contact.js';
import Layout from './layout/layout.js';
import { initContactForm } from '../js/handlers/ContactHandler.js'; 

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

  // 👇 Aquí detectas si estás en la ruta "/contact" y ejecutas el listener
  if (path === '/contact') {
    initContactForm();
  }
}
