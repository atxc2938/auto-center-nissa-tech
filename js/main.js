// Funções de Scroll para os botões do carrossel
function scrollToServicos() {
    const servicosSection = document.getElementById('servicos');
    const header = document.querySelector('.header');
    
    // 1. Primeiro esconder o header
    header.classList.add('hidden');
    
    // 2. Depois de esconder, calcular a posição CORRETA
    setTimeout(() => {
        const offsetTop = servicosSection.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }, 10);
}

function scrollToPneus() {
    const pneusSection = document.getElementById('pneus');
    const header = document.querySelector('.header');
    
    // 1. Primeiro esconder o header
    header.classList.add('hidden');
    
    // 2. Depois de esconder, calcular a posição CORRETA
    setTimeout(() => {
        const offsetTop = pneusSection.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }, 10);
}

// Dados dos Serviços com imagens
const servicos = [
    {
        id: 1,
        titulo: "Troca de Óleo",
        descricao: "Realizamos a troca completa de óleo do motor e filtro, utilizando produtos de alta qualidade que garantem a proteção e durabilidade do seu motor. Serviço essencial para manter o desempenho e evitar desgastes prematuros. Usamos apenas óleos certificados e filtros originais para garantir a máxima eficiência do seu veículo.",
        icone: "fas fa-oil-can",
        imagem: "https://images.unsplash.com/photo-1603712619941-6215c8d140b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
    },
    {
        id: 2,
        titulo: "Alinhamento",
        descricao: "Serviço de alinhamento que garante a direção reta e estável do seu veículo, evitando o desgaste irregular dos pneus e proporcionando maior segurança nas curvas. Corrigimos os ângulos das rodas conforme as especificações do fabricante para um desempenho ideal.",
        icone: "fas fa-compass",
        imagem: "https://images.unsplash.com/photo-1621905251186-4e4d4a1f87da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 3,
        titulo: "Balanceamento",
        descricao: "Balanceamento profissional das rodas que elimina vibrações no volante, proporciona maior conforto na dirigibilidade e aumenta a vida útil dos pneus e componentes da suspensão. Realizamos o balanceamento estático e dinâmico para perfeito equilíbrio.",
        icone: "fas fa-braille",
        imagem: "https://images.unsplash.com/photo-1603712619669-24f4d8ec6b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 4,
        titulo: "Mecânica Geral",
        descricao: "Serviços completos de mecânica preventiva e corretiva, incluindo troca de correias, filtros, velas e todos os componentes essenciais para o perfeito funcionamento do veículo. Nossa equipe especializada diagnostica e repara qualquer problema mecânico.",
        icone: "fas fa-tools",
        imagem: "https://images.unsplash.com/photo-1565689221356-006d1978a535?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        titulo: "Elétrica Automotiva",
        descricao: "Diagnóstico e reparo de todo o sistema elétrico do veículo, incluindo alternador, bateria, partida, iluminação e todos os componentes eletrônicos. Solucionamos problemas elétricos complexos com equipamentos de última geração.",
        icone: "fas fa-bolt",
        imagem: "https://images.unsplash.com/photo-1603712619500-3c2c56f831b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 6,
        titulo: "Ar Condicionado",
        descricao: "Manutenção, limpeza e recarga do sistema de ar condicionado, garantindo o perfeito funcionamento e a qualidade do ar dentro do veículo. Realizamos higienização completa e troca de filtros para sua saúde e conforto.",
        icone: "fas fa-fan",
        imagem: "https://images.unsplash.com/photo-1621905252566-8e1bb31d10e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
        id: 7,
        titulo: "Baterias",
        descricao: "Venda e instalação de baterias das melhores marcas, com teste gratuito do sistema de carga e partida para garantir o melhor desempenho. Oferecemos garantia e assistência técnica especializada para seu sistema elétrico.",
        icone: "fas fa-car-battery",
        imagem: "https://images.unsplash.com/photo-1603712619669-24f4d8ec6b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 8,
        titulo: "Freios",
        descricao: "Troca de pastilhas, discos, tambores, lonas e fluído de freio. Realizamos teste completo do sistema de freios para garantir sua segurança. Utilizamos apenas componentes de alta qualidade para máxima eficiência na frenagem.",
        icone: "fas fa-exclamation-triangle",
        imagem: "https://images.unsplash.com/photo-1603712619669-24f4d8ec6b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 9,
        titulo: "Injeção Eletrônica",
        descricao: "Diagnóstico computadorizado e reparo do sistema de injeção eletrônica, garantindo o melhor desempenho do motor e economia de combustível. Identificamos e corrigimos falhas no sistema de alimentação e ignição.",
        icone: "fas fa-gas-pump",
        imagem: "https://images.unsplash.com/photo-1603712619669-24f4d8ec6b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 10,
        titulo: "Suspensão",
        descricao: "Reparo e substituição de amortecedores, molas, coxins e todos os componentes do sistema de suspensão para maior conforto e estabilidade. Garantimos uma dirigibilidade suave e segura em qualquer tipo de piso.",
        icone: "fas fa-sync-alt",
        imagem: "https://images.unsplash.com/photo-1603712619669-24f4d8ec6b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 11,
        titulo: "Geometria",
        descricao: "Geometria computadorizada avançada que ajusta os ângulos das rodas conforme as especificações do fabricante, garantindo segurança e durabilidade. Corrigimos cambagem, caster e convergência para direção perfeita.",
        icone: "fas fa-car-crash",
        imagem: "https://images.unsplash.com/photo-1621905251186-4e4d4a1f87da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 12,
        titulo: "Rodízio de Pneus",
        descricao: "Rodízio periódico dos pneus para garantir desgaste uniforme, calibragem precisa e inspeção completa do estado dos pneus. Aumente a vida útil dos seus pneus e mantenha a segurança em dia.",
        icone: "fas fa-snowflake",
        imagem: "https://images.unsplash.com/photo-1603712618944-1a41ef25281c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

// Animação de Scroll do Header
class ScrollHeader {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollY = window.scrollY;
        this.previousScrollY = window.scrollY;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            this.lastScrollY = window.scrollY;
            
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.updateHeader();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }
    
    updateHeader() {
        const scrolled = this.lastScrollY > 100;
        
        if (scrolled) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        // Esconder/mostrar header baseado na direção do scroll
        if (this.lastScrollY > this.previousScrollY && this.lastScrollY > 100) {
            // Scroll para baixo - esconder
            this.header.classList.add('hidden');
        } else {
            // Scroll para cima - mostrar
            this.header.classList.remove('hidden');
        }
        
        this.previousScrollY = this.lastScrollY;
    }
}

// Sistema de Animação
class AnimationSystem {
    constructor() {
        this.animatedElements = new Set();
        this.init();
    }
    
    init() {
        // Marcar todos os elementos que devem ser animados
        this.markElementsForAnimation();
        
        // Observar elementos para animação
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animateElement(entry.target);
                    this.animatedElements.add(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observar todos os elementos marcados
        const elementsToAnimate = document.querySelectorAll('.animate-element');
        elementsToAnimate.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    markElementsForAnimation() {
        // Marcar títulos das seções
        const sectionTitles = document.querySelectorAll('section h2');
        sectionTitles.forEach(title => {
            title.classList.add('animate-element');
        });
        
        // Marcar subtítulos
        const subtitles = document.querySelectorAll('.section-subtitle');
        subtitles.forEach(subtitle => {
            subtitle.classList.add('animate-element');
        });
        
        // Marcar cards de marcas
        const marcaCards = document.querySelectorAll('.marca-card');
        marcaCards.forEach(card => {
            card.classList.add('animate-element');
        });
        
        // Marcar cards de serviços
        const servicoItems = document.querySelectorAll('.servico-item');
        servicoItems.forEach(item => {
            item.classList.add('animate-element');
        });
        
        // Marcar conteúdo da loja
        const lojaContent = document.querySelectorAll('.loja-content > *');
        lojaContent.forEach(element => {
            element.classList.add('animate-element');
        });
    }
    
    animateElement(element) {
        element.classList.add('animate-in');
        
        // Se for um grid, animar os filhos com delay
        if (element.classList.contains('marcas-grid') || element.classList.contains('servicos-grid')) {
            const children = element.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate-in');
                }, index * 100);
            });
        }
    }
}

// SCROLL SUAVE CORRIGIDO DEFINITIVAMENTE
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        this.header = document.querySelector('.header');
        this.init();
    }
    
    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
            });
        });
    }
    
    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (!targetElement) return;
        
        // 1. PRIMEIRO: Sempre esconder o header imediatamente
        this.header.classList.add('hidden');
        
        // 2. DEPOIS: Calcular a posição CORRETA após o header sumir
        setTimeout(() => {
            let targetPosition;
            
            if (targetId === '#home') {
                targetPosition = 0;
            } else {
                // CORREÇÃO DEFINITIVA: Usar offsetTop SEM descontar headerHeight
                // Porque o header já está INVISÍVEL e não ocupa mais espaço
                targetPosition = targetElement.offsetTop;
            }
            
            // Scroll suave para a posição calculada CORRETAMENTE
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }, 10);
        
        // Fechar menu mobile se estiver aberto
        const mobileMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
}

// Carrossel Automático
class Carousel {
    constructor() {
        this.carousel = document.querySelector('.carousel-container');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.interval = null;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.startAutoSlide();
        this.addEventListeners();
        this.updateSlides();
    }
    
    startAutoSlide() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 6000);
    }
    
    addEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        this.addTouchEvents();
        
        this.carousel.addEventListener('mouseenter', () => {
            clearInterval(this.interval);
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.updateSlides();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    prevSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentSlide = this.currentSlide === 0 ? this.slideCount - 1 : this.currentSlide - 1;
        this.updateSlides();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    goToSlide(index) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentSlide = index;
        this.updateSlides();
        this.resetAutoSlide();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    updateSlides() {
        const translateX = -this.currentSlide * 100;
        this.carousel.style.transform = `translateX(${translateX}%)`;
        
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    addTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.carousel.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });
        
        this.carousel.addEventListener('touchend', () => {
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const minSwipeDistance = 50;
        
        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
            this.resetAutoSlide();
        }
    }
    
    resetAutoSlide() {
        clearInterval(this.interval);
        this.startAutoSlide();
    }
}

// Menu Mobile
class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.hamburger.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        const bars = this.hamburger.querySelectorAll('.bar');
        if (this.hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }
    
    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        
        const bars = this.hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Gerenciador de Serviços
class ServicosManager {
    constructor() {
        this.servicosGrid = document.querySelector('.servicos-grid');
        this.modal = document.getElementById('servicoModal');
        this.init();
    }
    
    init() {
        this.renderServicos();
        this.addModalEvents();
    }
    
    renderServicos() {
        this.servicosGrid.innerHTML = servicos.map(servico => `
            <div class="servico-item animate-element" data-servico-id="${servico.id}">
                <i class="${servico.icone}"></i>
                <h3>${servico.titulo}</h3>
                <p>${servico.descricao.substring(0, 100)}...</p>
            </div>
        `).join('');
        
        this.addServicoEvents();
    }
    
    addServicoEvents() {
        const servicoItems = document.querySelectorAll('.servico-item');
        servicoItems.forEach(item => {
            item.addEventListener('click', () => {
                const servicoId = parseInt(item.getAttribute('data-servico-id'));
                this.openModal(servicoId);
            });
        });
    }
    
    addModalEvents() {
        const closeBtn = document.querySelector('.close-modal');
        
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    openModal(servicoId) {
        const servico = servicos.find(s => s.id === servicoId);
        if (!servico) return;
        
        document.getElementById('modalServicoTitulo').textContent = servico.titulo;
        document.getElementById('modalServicoDescricao').textContent = servico.descricao;
        document.getElementById('modalServicoImg').src = servico.imagem;
        document.getElementById('modalServicoImg').alt = servico.titulo;
        
        const whatsappBtn = document.querySelector('.whatsapp-btn-modal');
        const mensagem = `Olá! Gostaria de solicitar um orçamento para o serviço de ${servico.titulo}`;
        whatsappBtn.href = `https://wa.me/5521965238075?text=${encodeURIComponent(mensagem)}`;
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Botões de Orçamento
class OrcamentoButtons {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-orcamento');
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const marca = button.closest('.marca-card').querySelector('h3').textContent;
                const mensagem = `Olá! Gostaria de solicitar um orçamento para pneus da marca ${marca}`;
                const url = `https://wa.me/5521965238075?text=${encodeURIComponent(mensagem)}`;
                window.open(url, '_blank');
            });
        });
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    new Carousel();
    new MobileMenu();
    new ServicosManager();
    new SmoothScroll();
    new ScrollHeader();
    new OrcamentoButtons();
    new AnimationSystem();
});