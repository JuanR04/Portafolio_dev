export default function contact() {
    return ` 
        <section class="contact-section">
            <div class="contact-container">
                <div class="contact-info">
                    <h2>¡Hablemos!</h2>
                    <p>¿Tienes una idea, proyecto o simplemente quieres saludar?
                    Estoy siempre abierto a nuevas oportunidades de colaboración, desarrollo y aprendizaje.
                    Completa el formulario o contáctame directamente. ¡Será un placer conectar contigo!.</p>
                    
                    <div class="social-links">
                        <h3>Redes Sociales</h3>
                        <a href="mailto:juan.creinosa04@gmail.com" class="social-link">
                            <img src="../static/resources/icons/email.png" alt="Email">
                            <span>juan.creinosa04@gmail.com</span>
                        </a>
                        <a href="tel:+573053826870" class="social-link">
                            <img src="../static/resources/icons/phone.png" alt="Teléfono">
                            <span>+57 305 382 6870</span>
                        </a>
                        <a href="http://github.com/JuanR04" target="_blank" class="social-link">
                            <img src="../static/resources/icons/github.png" alt="GitHub">
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/juan-carlos-reinosa-gerena-464922352/" target="_blank" class="social-link">
                            <img src="../static/resources/icons/linkedin.png" alt="LinkedIn">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
                
                <div class="contact-form-container">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="name" required placeholder="Tu nombre">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="tu@email.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Tu mensaje..."></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn">Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}
