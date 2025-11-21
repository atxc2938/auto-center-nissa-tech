// Dados e configurações
const CONFIG = {
    whatsapp: '5521990188094',
    telefone2: '552126093611',
    empresa: 'Nissa Tech',
    endereco: 'R. A, 11 - QR 2 - Itaipu, Niterói - RJ, 24346-176',
    instagram: '@nissatechautomotiva',
    horarioFuncionamento: 'Seg-Sex: 7h-19h, Sáb: 8h-13h'
};

// Dados dos serviços
const SERVICOS_DATA = {
    'alinhamento-balanceamento': {
        titulo: 'Alinhamento e Balanceamento',
        subtitulo: 'Precisão e Segurança',
        icon: 'fas fa-cogs',
        importancia: 'O alinhamento e balanceamento são essenciais para a segurança e durabilidade do seu veículo. Eles garantem que as rodas estejam posicionadas corretamente e que o peso seja distribuído uniformemente, prevenindo desgaste irregular dos pneus, melhorando a estabilidade e proporcionando uma direção mais suave.',
        beneficios: [
            'Maior segurança na direção',
            'Economia de combustível',
            'Aumento da vida útil dos pneus',
            'Melhor estabilidade em curvas',
            'Direção mais suave e confortável'
        ]
    },
    'troca-oleo': {
        titulo: 'Troca de Óleo e Filtros',
        subtitulo: 'Performance do Motor',
        icon: 'fas fa-oil-can',
        importancia: 'A troca regular de óleo e filtros é vital para a saúde do motor do seu veículo. O óleo lubrifica as peças móveis, reduz o atrito, previne o superaquecimento e remove impurezas. Filtros novos garantem que apenas ar e combustível limpos entrem no motor.',
        beneficios: [
            'Proteção contra desgaste do motor',
            'Melhor performance e economia',
            'Redução de consumo de combustível',
            'Prevenção de superaquecimento',
            'Aumento da vida útil do motor'
        ]
    },
    'suspensao': {
        titulo: 'Suspensão e Amortecedores',
        subtitulo: 'Conforto e Estabilidade',
        icon: 'fas fa-car-side',
        importancia: 'O sistema de suspensão é responsável pelo conforto e estabilidade do veículo. Amortecedores e molas em bom estado absorvem impactos, mantêm as rodas no chão e garantem aderência, especialmente em curvas e frenagens.',
        beneficios: [
            'Conforto na dirigibilidade',
            'Estabilidade em curvas',
            'Melhor aderência ao solo',
            'Proteção do chassi do veículo',
            'Segurança em frenagens'
        ]
    },
    'freios': {
        titulo: 'Sistema de Freios',
        subtitulo: 'Segurança Total',
        icon: 'fas fa-stop-circle',
        importancia: 'O sistema de freios é um dos componentes mais importantes para a segurança do veículo. Pastilhas, discos e fluido em bom estado garantem frenagem eficiente e previsível, podendo evitar acidentes em situações críticas.',
        beneficios: [
            'Frenagem eficiente e segura',
            'Redução da distância de parada',
            'Prevenção de aquaplanagem',
            'Durabilidade do sistema',
            'Segurança para todos os ocupantes'
        ]
    }
};

// Sistema principal - VERSÃO COMPLETAMENTE CORRIGIDA
class NissaTechApp {
    constructor() {
        this.animatedElements = new Set();
        this.isMenuOpen = false;
        this.isScrolling = false;
        this.scrollTimer = null;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupScrollEffects();
        this.setupServiceButtons();
        this.setupWhatsApp();
        this.setupMapButton();
        this.setupServiceModals();
        this.setupAnimations();
        this.setupIntersectionObserver();
        this.setupScrollDetection();
    }

    // CORREÇÃO COMPLETA: Detecção global de scroll
    setupScrollDetection() {
        let scrollStartY = 0;
        let scrollEndY = 0;

        // Detectar início do scroll
        window.addEventListener('touchstart', (e) => {
            scrollStartY = e.touches[0].pageY;
            this.isScrolling = false;
        }, { passive: true });

        // Detectar movimento de scroll
        window.addEventListener('touchmove', (e) => {
            if (!this.isScrolling) {
                scrollEndY = e.touches[0].pageY;
                // Se o movimento vertical for significativo, é scroll
                if (Math.abs(scrollEndY - scrollStartY) > 5) {
                    this.isScrolling = true;
                }
            }
        }, { passive: true });

        // Resetar estado de scroll após um tempo
        window.addEventListener('touchend', () => {
            if (this.isScrolling) {
                this.scrollTimer = setTimeout(() => {
                    this.isScrolling = false;
                }, 100);
            }
        }, { passive: true });

        // Também detectar scroll com wheel (mouse)
        window.addEventListener('wheel', () => {
            this.isScrolling = true;
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(() => {
                this.isScrolling = false;
            }, 100);
        }, { passive: true });
    }

    // Configuração do observador de interseção
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animateElement(entry.target);
                    this.animatedElements.add(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -5% 0px'
        });

        const animateElements = document.querySelectorAll('.animate-element');
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Método para animar elementos
    animateElement(element) {
        element.classList.add('animate-in');
    }

    // Efeitos de scroll
    setupScrollEffects() {
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            this.animateOnScroll();
            lastScrollY = window.scrollY;
        });

        setTimeout(() => {
            this.animateOnScroll();
        }, 500);
    }

    // Animação on scroll
    animateOnScroll() {
        const elements = document.querySelectorAll('.animate-element');
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.90;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerPoint && !this.animatedElements.has(element)) {
                this.animateElement(element);
                this.animatedElements.add(element);
            }
        });
    }

    // MENU MOBILE - VERSÃO COMPLETAMENTE CORRIGIDA
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (!hamburger || !navMenu) {
            console.error('Elementos do menu não encontrados');
            return;
        }

        // Função para alternar o menu
        const toggleMenu = () => {
            // CORREÇÃO: Não alternar menu se estiver scrollando
            if (this.isScrolling) {
                return;
            }
            
            this.isMenuOpen = !this.isMenuOpen;
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            if (this.isMenuOpen) {
                document.body.classList.add('menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                document.body.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        };

        // Evento de CLIQUE (mouse) - melhorado
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            toggleMenu();
        });

        // Evento de TOUCH (mobile) - CORREÇÃO PRINCIPAL
        hamburger.addEventListener('touchend', function(e) {
            e.stopPropagation();
            e.preventDefault();
            toggleMenu();
        }, { passive: false });

        // CORREÇÃO COMPLETA: Prevenir clique acidental nos links durante scroll
        navLinks.forEach(link => {
            // Clique mouse
            link.addEventListener('click', (e) => {
                if (this.isScrolling) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.closeMenu();
            });
            
            // Touch mobile - CORREÇÃO PRINCIPAL
            link.addEventListener('touchend', (e) => {
                if (this.isScrolling) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                
                // Pequeno delay para garantir que não é scroll
                setTimeout(() => {
                    if (!this.isScrolling) {
                        this.closeMenu();
                    }
                }, 50);
            }, { passive: false });
        });

        // Melhorar área de toque do hamburger
        hamburger.style.cssText += `
            min-width: 44px !important;
            min-height: 44px !important;
            cursor: pointer !important;
        `;

        // Fechar menu ao clicar/tocar fora
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                this.closeMenu();
            }
        });

        document.addEventListener('touchstart', (e) => {
            if (this.isMenuOpen && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Fechar menu ao rolar
        window.addEventListener('scroll', () => {
            if (this.isMenuOpen) {
                this.closeMenu();
            }
        });

        // Fechar menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    closeMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        this.isMenuOpen = false;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }

    // Scroll suave
    setupSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // CORREÇÃO: Prevenir navegação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    return;
                }
                
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Fechar menu mobile após clique
                    if (window.innerWidth <= 768) {
                        this.closeMenu();
                    }
                }
            });
        });
    }

    // Botões de serviços
    setupServiceButtons() {
        const serviceButtons = document.querySelectorAll('.servico-btn');
        
        serviceButtons.forEach(button => {
            // Clique mouse
            button.addEventListener('click', (e) => {
                // CORREÇÃO: Prevenir ação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                const service = button.getAttribute('data-servico');
                this.openWhatsApp(`Olá! Gostaria de solicitar um orçamento para o serviço de ${service} na Nissa Tech`);
            });
            
            // Touch mobile
            button.addEventListener('touchend', (e) => {
                // CORREÇÃO: Prevenir ação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                const service = button.getAttribute('data-servico');
                this.openWhatsApp(`Olá! Gostaria de solicitar um orçamento para o serviço de ${service} na Nissa Tech`);
            });
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-cta-button')) {
                // CORREÇÃO: Prevenir ação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    return;
                }
                
                const service = e.target.getAttribute('data-servico');
                this.openWhatsApp(`Olá! Gostaria de solicitar um orçamento para o serviço de ${service} na Nissa Tech`);
                this.closeServiceModal();
            }
        });
    }

    // Configuração do WhatsApp
    setupWhatsApp() {
        const whatsappButtons = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
        
        whatsappButtons.forEach(button => {
            if (!button.getAttribute('data-processed')) {
                button.setAttribute('data-processed', 'true');
                
                // Clique mouse
                button.addEventListener('click', (e) => {
                    // CORREÇÃO: Prevenir ação durante scroll
                    if (this.isScrolling) {
                        e.preventDefault();
                        return;
                    }
                    
                    if (!button.getAttribute('href').includes('text=')) {
                        e.preventDefault();
                        this.openWhatsApp('Olá! Gostaria de mais informações sobre os serviços da Nissa Tech.');
                    }
                });
                
                // Touch mobile
                button.addEventListener('touchend', (e) => {
                    // CORREÇÃO: Prevenir ação durante scroll
                    if (this.isScrolling) {
                        e.preventDefault();
                        return;
                    }
                    
                    if (!button.getAttribute('href').includes('text=')) {
                        e.preventDefault();
                        this.openWhatsApp('Olá! Gostaria de mais informações sobre os serviços da Nissa Tech.');
                    }
                });
            }
        });
    }

    // Configuração do botão do Maps
    setupMapButton() {
        const mapButton = document.querySelector('.map-button');
        if (mapButton) {
            mapButton.addEventListener('click', (e) => {
                // CORREÇÃO: Prevenir ação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    return;
                }
                
                e.preventDefault();
                const mapsUrl = 'https://maps.google.com/maps?q=NISSA+TECH+OFICINA+R.+A,+11+-+QR+2+-+Itaipu,+Niterói+-+RJ,+24346-176';
                window.open(mapsUrl, '_blank');
            });
        }
    }

    // Configuração dos modais de serviço
    setupServiceModals() {
        const serviceCards = document.querySelectorAll('.servico-card');
        const modal = document.querySelector('.servico-modal');
        const modalClose = document.querySelector('.modal-close');
        
        if (!modal || !modalClose) return;

        serviceCards.forEach(card => {
            // Clique mouse
            card.addEventListener('click', (e) => {
                // CORREÇÃO: Prevenir ação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    return;
                }
                
                if (!e.target.classList.contains('servico-btn')) {
                    const serviceId = card.getAttribute('data-servico');
                    this.openServiceModal(serviceId);
                }
            });
            
            // Touch mobile
            card.addEventListener('touchend', (e) => {
                // CORREÇÃO: Prevenir ação durante scroll
                if (this.isScrolling) {
                    e.preventDefault();
                    return;
                }
                
                if (!e.target.classList.contains('servico-btn')) {
                    const serviceId = card.getAttribute('data-servico');
                    this.openServiceModal(serviceId);
                }
            });
        });

        // Clique mouse
        modalClose.addEventListener('click', () => {
            this.closeServiceModal();
        });
        
        // Touch mobile
        modalClose.addEventListener('touchend', () => {
            this.closeServiceModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeServiceModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeServiceModal();
            }
        });
    }

    openServiceModal(serviceId) {
        const modal = document.querySelector('.servico-modal');
        const serviceData = SERVICOS_DATA[serviceId];
        
        if (!serviceData || !modal) return;

        const modalIcon = modal.querySelector('.modal-icon i');
        const modalTitle = modal.querySelector('.modal-title');
        const modalSubtitle = modal.querySelector('.modal-subtitle');
        const importanciaText = modal.querySelector('.importancia-text');
        const beneficiosList = modal.querySelector('.beneficios-list');
        const modalButton = modal.querySelector('.modal-cta-button');

        if (modalIcon) modalIcon.className = serviceData.icon;
        if (modalTitle) modalTitle.textContent = serviceData.titulo;
        if (modalSubtitle) modalSubtitle.textContent = serviceData.subtitulo;
        if (importanciaText) importanciaText.textContent = serviceData.importancia;

        if (beneficiosList) {
            beneficiosList.innerHTML = '';
            serviceData.beneficios.forEach(beneficio => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${beneficio}`;
                beneficiosList.appendChild(li);
            });
        }

        if (modalButton) {
            modalButton.setAttribute('data-servico', serviceData.titulo);
            modalButton.innerHTML = `<i class="fab fa-whatsapp"></i> Orçamento para ${serviceData.titulo}`;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeServiceModal() {
        const modal = document.querySelector('.servico-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Animações
    setupAnimations() {
        this.setupCounters();
        this.setupHoverEffects();
    }

    setupCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }

    setupHoverEffects() {
        if (window.innerWidth > 768) {
            const cards = document.querySelectorAll('.servico-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const angleY = (x - centerX) / 25;
                    const angleX = (centerY - y) / 25;
                    
                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-8px)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-8px)';
                    setTimeout(() => {
                        card.style.transform = '';
                    }, 300);
                });
            });
        }
    }

    // Abrir WhatsApp
    openWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando NissaTechApp...');
    new NissaTechApp();
});

// Forçar animações após o carregamento completo
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});