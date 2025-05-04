export default function About() {
    return `
        <section class="about">
            <h1>Sobre mí</h1>
            <div class="about-section">
                <h2>Presentación</h2>
                <p>
                    Soy un profesional en formación en Tecnología en Desarrollo de Software, con un fuerte enfoque en crear soluciones tecnológicas funcionales, accesibles y centradas en el usuario. Mi compromiso con la mejora continua y la innovación me impulsa a aprender constantemente y aplicar las mejores prácticas del sector.
                </p>
            </div>
            <div class="about-section">
                <h2>Áreas de especialización</h2>
                <ul>
                    <li>Diseño UX/UI enfocado en la usabilidad y accesibilidad</li>
                    <li>Desarrollo de Aplicaciones de Escritorio</li>
                    <li>Desarrollo Web moderno y responsivo</li>
                    <li>Programación orientada a objetos y eventos</li>
                    <li>Integración de API RESTful</li>
                </ul>
            </div>
            <div class="about-section">
                <h2>Habilidades y metodologías</h2>
                <ul>
                    <li>Metodologías ágiles (Scrum)</li>
                    <li>Prácticas DevOps</li>
                    <li>Diseño centrado en el usuario</li>
                    <li>Lectura técnica en inglés</li>
                </ul>
            </div>
            <div class="about-section">
                <h2>Herramientas y tecnologías</h2>
                <div class="technologies-container">
                    <div class="tech-group">
                        <h3 class="tech-group-title">Frontend</h3>
                        <div class="tech-container">
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/react.svg" alt="React">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">React</span>
                                    <span class="tech-description">Biblioteca JS para interfaces</span>
                                </div>
                            </div>
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/javascript.svg" alt="JavaScript">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">JavaScript</span>
                                    <span class="tech-description">Lenguaje web</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tech-group">
                        <h3 class="tech-group-title">Backend</h3>
                        <div class="tech-container">
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/node.svg" alt="Node.js">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Node.js</span>
                                    <span class="tech-description">Entorno JavaScript</span>
                                </div>
                            </div>
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/flask.svg" alt="Flask">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Flask</span>
                                    <span class="tech-description">Framework Python</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tech-group">
                        <h3 class="tech-group-title">Lenguajes</h3>
                        <div class="tech-container">
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/python.svg" alt="Python">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Python</span>
                                    <span class="tech-description">Lenguaje versátil</span>
                                </div>
                            </div>
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/cpp.svg" alt="C++">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">C++</span>
                                    <span class="tech-description">Alto rendimiento</span>
                                </div>
                            </div>
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/java.svg" alt="Java">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Java</span>
                                    <span class="tech-description">Multiplataforma</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tech-group">
                        <h3 class="tech-group-title">Bases de datos</h3>
                        <div class="tech-container">
                            <div class="tech">
                                <div class="tech-icon-container">
                                    <img src="../static/resources/icons/postgresql.svg" alt="PostgreSQL">
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">PostgreSQL</span>
                                    <span class="tech-description">BD relacional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}