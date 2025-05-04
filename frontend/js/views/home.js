export default function Home() {
    return ` 
        <section class="home-scroll">
            <div class="home">
                <div class="home-content">
                    <div class= "home-title">
                        <h2>Bienvenido a mi portafolio</h2>
                        <p>Hola, soy un desarrollador web apasionado por la tecnología y el diseño. Aquí encontrarás algunos de mis proyectos y habilidades.</p>
                        <a href="#about" class="btn">Saber más</a>
                    </div>
                    <div class="home-img"></div>
                </div>
            </div>
            <div class="separador"></div>
            <div id="about" class="sobre-mi">
                <h2>¿Quién soy?</h2>
                <a href="#/about">Conóceme</a>
                <div class="tarjetas-contenedor">
                    <div class="proyectos">
                        <div class="tarjeta-icono">
                            <i class="fas fa-code"></i>
                        </div>
                        <h2>Mis proyectos</h2>
                        <p class="tarjeta-descripcion">Explora mi portafolio de desarrollo web, aplicaciones y diseños que he creado.</p>
                        <a href="#/projects">Proyectos</a>
                    </div>
                    <div class="contacto">
                        <div class="tarjeta-icono">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h2>Contacto</h2>
                        <p class="tarjeta-descripcion">¿Tienes un proyecto en mente? Ponte en contacto conmigo para trabajar juntos.</p>
                        <a href="#/contact">Contáctame</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}
