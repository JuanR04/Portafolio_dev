export default function Header() {
    return `
      <header>
        <img class="logo" src="../static/resources/logoPortafolio.png" alt="Logo">
        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <ul class="nav-list">
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/about">Sobre mi</a></li>
            <li><a href="#/projects">Proyectos</a></li>
            <li><a href="#/contact">Contacto</a></li>
          </ul>
        </nav>
        <!-- Mobile Navigation -->
        <button class="menu-toggle" id="menuToggle">☰</button>
        <nav class="sidebar" id="sidebarMenu">
          <ul class="nav-list">
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/about">Sobre mi</a></li>
            <li><a href="#/projects">Proyectos</a></li>
            <li><a href="#/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
    `;
}

