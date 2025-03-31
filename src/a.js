document.addEventListener('DOMContentLoaded', () => {
    class ContactManager {
      constructor() {
        this.currentType = 'people';
        this.searchTerm = '';
        this.contacts = {
          people: [
            { name: 'Juan Pérez', phone: '555-1234', email: 'juan@example.com' },
            { name: 'María García', phone: '555-5678', email: 'maria@example.com' },
            { name: 'Carlos López', phone: '555-9012', email: 'carlos@example.com' },
            { name: 'Ana Martínez', phone: '555-3456', email: 'ana@example.com' }
          ],
          companies: [
            { name: 'Empresa A', phone: '555-1111', email: 'empresaA@example.com', address: 'Calle Falsa 123' },
            { name: 'Tech Solutions', phone: '555-2222', email: 'tech@example.com', address: 'Avenida Principal 456' },
            { name: 'Global Corp', phone: '555-3333', email: 'global@example.com', address: 'Bulevar Norte 789' },
            { name: 'Innovate Ltd', phone: '555-4444', email: 'innovate@example.com', address: 'Plaza Central 101' }
          ]
        };
        
        this.init();
      }
  
      init() {
        this.setupEventListeners();
        this.renderContacts();
      }
  
      setupEventListeners() {
        // Botones de navegación
        document.querySelectorAll('.nav-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            this.currentType = e.target.dataset.type;
            this.renderContacts();
          });
        });
  
        // Búsqueda
        document.getElementById('search').addEventListener('input', (e) => {
          this.searchTerm = e.target.value.toLowerCase();
          this.renderContacts();
        });
  
        // Delegación de eventos para expandir contactos en móvil
        document.getElementById('content').addEventListener('click', (e) => {
          if (e.target.closest('.contact-card')) {
            const card = e.target.closest('.contact-card');
            card.querySelector('.full-info').classList.toggle('show');
          }
        });
      }
  
      filterContacts() {
        return this.contacts[this.currentType].filter(contact =>
          contact.name.toLowerCase().includes(this.searchTerm)
        );
      }
  
      renderContacts() {
        const contacts = this.filterContacts();
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        const content = document.getElementById('content');
        
        content.innerHTML = isDesktop ? this.generateDesktopView(contacts) : this.generateMobileView(contacts);
      }
  
      generateMobileView(contacts) {
        return contacts.map(contact => `
          <div class="contact-card">
            <div class="basic-info">
              <div>
                <h3>${contact.name}</h3>
                <p>${contact.phone}</p>
              </div>
              <button>📞</button>
            </div>
            <div class="full-info">
              <p>Email: ${contact.email}</p>
              ${contact.address ? `<p>Dirección: ${contact.address}</p>` : ''}
              <div class="actions">
                <button>✏️</button>
                <button>🗑️</button>
              </div>
            </div>
          </div>
        `).join('');
      }
  
      generateDesktopView(contacts) {
        return `
          <table class="contacts-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                ${this.currentType === 'companies' ? '<th>Dirección</th>' : ''}
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${contacts.map(contact => `
                <tr>
                  <td>${contact.name}</td>
                  <td>${contact.phone}</td>
                  <td>${contact.email}</td>
                  ${this.currentType === 'companies' ? `<td>${contact.address}</td>` : ''}
                  <td>
                    <button>✏️</button>
                    <button>🗑️</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }
    }
  
    new ContactManager();
  });