import Header from './header.js';
import Footer from './footer.js';

export default function Layout(content) {
  return `
    ${Header()}
    <main id="view">
      <div class="content-container">
        ${content}
      </div>
    </main>
    ${Footer()}
  `;
}