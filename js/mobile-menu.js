// mobile-menu.js - Menu Mobile para Nissa Tech
class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.mobileMenu = null;
        this.init();
    }

    init() {
        this.createMobileMenu();
        this.setupEventListeners();
    }

    createMobileMenu() {
        // Criar elemento do menu mobile
        this.mobileMenu = document.createElement('div');
        this.mobileMenu.className = 'mobile-menu';
        
        // Itens do menu
        const menuItems = [
            { text: '🏠 Início', href: '#hero' },
            { text: '🔧 Serviços', href: '#servicos' },
            { text: '🚗 Produtos', href: '#produtos' },
            { text: '📖 Sobre', href: '#sobre' },
            { text: '📞 Contato', href: '#contato' }
        ];

        // Adicionar links ao menu
        menuItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.text;
            link.className = 'mobile-nav-link';
            this.mobileMenu.appendChild(link);

            // Fechar menu ao clicar no link
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Adicionar menu ao body
        document.body.appendChild(this.mobileMenu);
    }

    setupEventListeners() {
        // Toggle menu no hamburger
        this.hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!this.hamburger.contains(e.target) && !this.mobileMenu.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Fechar menu ao rolar
        window.addEventListener('scroll', () => {
            this.closeMenu();
        });

        // Fechar menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
        
        // Bloquear scroll do body quando menu está aberto
        if (this.mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    openMenu() {
        this.hamburger.classList.add('active');
        this.mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    new MobileMenu();
});

// Também inicializar quando a página terminar de carregar
window.addEventListener('load', function() {
    // Garantir que o menu mobile funcione
    if (window.innerWidth <= 768) {
        console.log('Menu mobile inicializado com sucesso!');
    }
});