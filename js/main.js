// Dados e configurações
const CONFIG = {
    whatsapp: '5521965238075',
    telefone2: '552126093611',
    empresa: 'Nissa Tech',
    endereco: 'R. A, 11 - QR 2 - Itaipu, Niterói - RJ, 24346-176',
    instagram: '@nissatechautomotiva',
    horarioFuncionamento: 'Seg-Sex: 7h-19h, Sáb: 8h-13h'
};

// Dados dos serviços baseados no repositório
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
    },
    'lavagem-simples': {
        titulo: 'Lavagem Simples',
        subtitulo: 'Limpeza Externa',
        icon: 'fas fa-spray-can',
        importancia: 'A lavagem regular mantém a estética do veículo e previne a corrosão da pintura. Além da aparência, remove sujeiras e resíduos que podem danificar a lataria e componentes externos.',
        beneficios: [
            'Conservação da pintura',
            'Prevenção de corrosão',
            'Melhor aparência',
            'Remoção de contaminantes',
            'Valorização do veículo'
        ]
    },
    'lavagem-premium': {
        titulo: 'Lavagem Premium',
        subtitulo: 'Limpeza Completa',
        icon: 'fas fa-sparkles',
        importancia: 'A lavagem premium oferece uma limpeza completa interna e externa, utilizando produtos específicos que protegem e revitalizam todas as superfícies do veículo, garantindo máximo cuidado.',
        beneficios: [
            'Limpeza interna profunda',
            'Proteção da pintura',
            'Hidratação de plásticos',
            'Aspiração profissional',
            'Produtos premium'
        ]
    },
    'eletrica': {
        titulo: 'Elétrica e Bateria',
        subtitulo: 'Sistema Elétrico Confiável',
        icon: 'fas fa-bolt',
        importancia: 'O sistema elétrico é o coração do veículo moderno. Desde a partida até os sistemas de entretenimento, tudo depende de uma bateria e sistema elétrico em perfeito estado. Manutenção preventiva evita pane elétrica e garante o funcionamento de todos os componentes.',
        beneficios: [
            'Partida confiável do motor',
            'Funcionamento de todos os sistemas',
            'Prevenção de pane elétrica',
            'Durabilidade da bateria',
            'Segurança dos sistemas eletrônicos'
        ]
    },
    'ar-condicionado': {
        titulo: 'Ar Condicionado',
        subtitulo: 'Conforto Climático',
        icon: 'fas fa-snowflake',
        importancia: 'O sistema de ar condicionado não é apenas conforto, mas também segurança. Mantém o interior do veículo em temperatura adequada, previne o embaçamento dos vidros e filtra o ar, removendo impurezas e alergênicos.',
        beneficios: [
            'Conforto térmico ideal',
            'Prevenção de embaçamento',
            'Ar filtrado e limpo',
            'Melhor concentração ao dirigir',
            'Valorização do veículo'
        ]
    },
    'cambio': {
        titulo: 'Transmissão e Câmbio',
        subtitulo: 'Troca de Marchas Suave',
        icon: 'fas fa-cog',
        importancia: 'O sistema de transmissão é responsável por transferir a potência do motor para as rodas. Seja câmbio manual ou automático, a manutenção adequada garante trocas suaves, economia de combustível e prevenção de reparos custosos.',
        beneficios: [
            'Trocas de marcha suaves',
            'Economia de combustível',
            'Prevenção de reparos caros',
            'Melhor performance do veículo',
            'Durabilidade do sistema'
        ]
    },
    'injecao': {
        titulo: 'Injeção Eletrônica',
        subtitulo: 'Performance Otimizada',
        icon: 'fas fa-microchip',
        importancia: 'O sistema de injeção eletrônica controla precisamente a mistura ar-combustível, garantindo melhor desempenho e economia. Manutenção preventiva evita falhas e mantém o motor funcionando em sua melhor condição.',
        beneficios: [
            'Melhor desempenho do motor',
            'Economia de combustível',
            'Redução de emissões',
            'Partida mais fácil',
            'Diagnóstico preciso de falhas'
        ]
    },
    'direcao': {
        titulo: 'Direção Hidráulica',
        subtitulo: 'Controle Preciso',
        icon: 'fas fa-tachometer-alt',
        importancia: 'A direção hidráulica proporciona conforto e facilidade na dirigibilidade. Manutenção adequada garante suavidade nas manobras e previne desgaste prematuro dos componentes.',
        beneficios: [
            'Manobras mais suaves',
            'Redução do esforço ao dirigir',
            'Melhor controle do veículo',
            'Prevenção de ruídos',
            'Segurança nas curvas'
        ]
    },
    'escapamento': {
        titulo: 'Escapamento',
        subtitulo: 'Desempenho e Silêncio',
        icon: 'fas fa-fire',
        importancia: 'O sistema de escapamento é crucial para o desempenho do motor e conforto acústico. Além de reduzir ruídos, controla emissões e melhora a eficiência do motor.',
        beneficios: [
            'Redução de ruídos',
            'Melhor desempenho do motor',
            'Controle de emissões',
            'Proteção ambiental',
            'Conforto acústico'
        ]
    }
};

// Sistema principal - CORREÇÕES COMPLETAS
class NissaTechApp {
    constructor() {
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupScrollEffects();
        this.setupServiceButtons();
        this.setupProdutoButtons();
        this.setupAnimations();
        this.setupWhatsApp();
        this.setupMapButton();
        this.setupServiceModals();
        this.preloadImages();
        this.setupMobileOptimizations();
        this.setupWhatsAppScroll();
        this.setupIntersectionObserver();
    }

    // Configuração do observador de interseção MELHORADA
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

        const animateElements = document.querySelectorAll(
            '.servico-card, .marca-card, .feature-item, .info-card, ' +
            '.extra-card, .grid-item, .contato-map, .sobre-features, ' +
            '.pneus-extra, .hero-stats, .image-container, .stat-item'
        );
        
        animateElements.forEach(element => {
            element.classList.add('animate-element');
            observer.observe(element);
        });

        console.log(`Observando ${animateElements.length} elementos para animação`);
    }

    // Método melhorado para animar elementos
    animateElement(element) {
        element.classList.add('animate-in');
    }

    // Efeitos de scroll MELHORADOS
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

    // Animação on scroll MELHORADA
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

    // Menu mobile - CORREÇÃO COMPLETA
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            window.addEventListener('scroll', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        } else {
            console.error('Elementos do menu mobile não encontrados:', { hamburger, navMenu });
        }
    }

    // Scroll suave
    setupSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Configuração dos modais de serviço
    setupServiceModals() {
        const serviceCards = document.querySelectorAll('.servico-card');
        const modal = document.querySelector('.servico-modal');
        const modalClose = document.querySelector('.modal-close');
        
        if (!modal || !modalClose) {
            console.error('Modal elements not found');
            return;
        }

        serviceCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('servico-btn')) {
                    const serviceId = card.getAttribute('data-servico');
                    this.openServiceModal(serviceId);
                }
            });
        });

        modalClose.addEventListener('click', () => {
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

    // Botões de serviços
    setupServiceButtons() {
        const serviceButtons = document.querySelectorAll('.servico-btn');
        
        serviceButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const service = button.getAttribute('data-servico');
                this.openWhatsApp(`Olá! Gostaria de solicitar um orçamento para o serviço de ${service} na Nissa Tech`);
            });
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-cta-button')) {
                const service = e.target.getAttribute('data-servico');
                this.openWhatsApp(`Olá! Gostaria de solicitar um orçamento para o serviço de ${service} na Nissa Tech`);
                this.closeServiceModal();
            }
        });
    }

    // Botões de produtos
    setupProdutoButtons() {
        const produtoButtons = document.querySelectorAll('.produto-btn');
        
        produtoButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const produto = button.getAttribute('data-produto');
                this.openWhatsApp(`Olá! Gostaria de consultar preços e disponibilidade para ${produto} na Nissa Tech`);
            });
        });
    }

    // Configuração do WhatsApp
    setupWhatsApp() {
        const whatsappButtons = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
        
        whatsappButtons.forEach(button => {
            if (!button.getAttribute('data-processed')) {
                button.setAttribute('data-processed', 'true');
                button.addEventListener('click', (e) => {
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
                e.preventDefault();
                const mapsUrl = 'https://maps.google.com/maps?q=NISSA+TECH+OFICINA+R.+A,+11+-+QR+2+-+Itaipu,+Niterói+-+RJ,+24346-176';
                window.open(mapsUrl, '_blank');
            });
        }
    }

    // Sistema de Scroll para WhatsApp Float
    setupWhatsAppScroll() {
        const whatsappFloat = document.querySelector('.whatsapp-float');
        if (!whatsappFloat) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateWhatsAppPosition = () => {
            const currentScrollY = window.scrollY;
            
            whatsappFloat.classList.remove('scroll-up', 'scroll-down', 'scrolling');
            whatsappFloat.classList.add('scrolling');
            
            if (currentScrollY > lastScrollY) {
                whatsappFloat.classList.add('scroll-down');
            } else if (currentScrollY < lastScrollY) {
                whatsappFloat.classList.add('scroll-up');
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateWhatsAppPosition);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                whatsappFloat.classList.remove('scroll-up', 'scroll-down', 'scrolling');
            }, 150);
        }, { passive: true });
    }

    // Abrir WhatsApp
    openWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
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
            const cards = document.querySelectorAll('.servico-card, .marca-card');
            
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

        const buttons = document.querySelectorAll('.cta-button, .map-button');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                if (window.innerWidth > 768) {
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.6);
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                    `;
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                }
            });
        });
    }

    // Preload de imagens
    preloadImages() {
        const images = [
            'images/logo/nissatech.png',
            'images/carrossel/slide1.png',
            'images/carrossel/slide3.png',
            'images/carrossel/slide2.png'
        ];

        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Otimizações para mobile
    setupMobileOptimizations() {
        const touchElements = document.querySelectorAll('.cta-button, .servico-card, .marca-card, .nav-link');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                if (window.innerWidth <= 768) {
                    this.style.transform = 'scale(0.98)';
                    this.style.transition = 'transform 0.1s ease';
                }
            });

            element.addEventListener('touchend', function() {
                if (window.innerWidth <= 768) {
                    this.style.transform = '';
                }
            });

            element.addEventListener('touchcancel', function() {
                if (window.innerWidth <= 768) {
                    this.style.transform = '';
                }
            });
        });

        const buttons = document.querySelectorAll('button, a');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function(e) {
                if (e.touches.length > 1) {
                    e.preventDefault();
                }
            }, { passive: false });
        });

        if ('connection' in navigator) {
            if (navigator.connection.saveData || navigator.connection.effectiveType.includes('2g')) {
                this.reduceAnimations();
            }
        }

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        document.addEventListener('touchstart', function() {}, { passive: true });

        document.addEventListener('touchstart', function() {
            document.body.classList.add('touch-mode');
        });

        document.addEventListener('mousedown', function() {
            document.body.classList.remove('touch-mode');
        });

        if (window.innerWidth <= 768) {
            document.documentElement.style.setProperty('--animation-duration', '0.3s');
        }
    }

    reduceAnimations() {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
        
        const animatedElements = document.querySelectorAll('*');
        animatedElements.forEach(el => {
            el.style.animationDuration = '0.1s !important';
            el.style.transitionDuration = '0.1s !important';
        });
    }
}

// Inicialização MELHORADA
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando NissaTechApp...');
    new NissaTechApp();
});

// Forçar animações após o carregamento completo
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    setTimeout(() => {
        const app = document.querySelector('script')?.app || new NissaTechApp();
        app.animateOnScroll();
    }, 1000);
});

// Adicionar estilo para efeito ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-button, .map-button {
        position: relative;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        .touch-mode *:focus {
            outline: none;
        }
        
        .touch-mode .cta-button:active,
        .touch-mode .servico-btn:active,
        .touch-mode .marca-btn:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
        }

        .touch-mode .servico-card:active,
        .touch-mode .marca-card:active {
            transform: scale(0.99);
            transition: transform 0.1s ease;
        }
    }

    @media (max-width: 768px) {
        .servico-card::before,
        .cta-button::before {
            display: none;
        }
        
        .servico-card,
        .marca-card,
        .cta-button {
            transition: all 0.2s ease;
        }
    }
`;
document.head.appendChild(style);