// Sistema de Matrix Rain - CORRIGIDO
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.className = 'matrix-rain';
        document.body.appendChild(this.canvas);
        
        this.characters = '01';
        this.drops = [];
        this.fontSize = 14;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createDrops();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = this.canvas.width / this.fontSize;
        this.createDrops();
    }
    
    createDrops() {
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#ff3b30';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            this.ctx.fillText(text, x, y);
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Sistema de Partículas Avançado - CORRIGIDO
class AdvancedParticles {
    constructor() {
        this.particles = [];
        this.container = document.createElement('div');
        this.container.className = 'advanced-particles';
        document.body.appendChild(this.container);
        
        this.init();
    }
    
    init() {
        this.createParticles();
        this.animate();
    }
    
    createParticles() {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'advanced-particle';
            
            const size = Math.random() * 80 + 20;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${posX}%;
                top: ${posY}%;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                background: radial-gradient(circle, 
                    rgba(255, 59, 48, 0.8) 0%,
                    rgba(255, 59, 48, 0.4) 30%,
                    rgba(255, 59, 48, 0.2) 70%,
                    transparent 100%
                );
                box-shadow: 0 0 ${size}px rgba(255, 59, 48, 0.5);
            `;
            
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }
    
    animate() {
        // Animação via CSS
    }
}

// Sistema de Glitch Effect - CORRIGIDO
class GlitchEffect {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.setupGlitchElements();
        this.startRandomGlitch();
    }
    
    setupGlitchElements() {
        const glitchElements = document.querySelectorAll('h1, h2, .logo-img');
        this.elements = Array.from(glitchElements);
    }
    
    startRandomGlitch() {
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.glitchRandomElement();
            }
        }, 3000);
    }
    
    glitchRandomElement() {
        const element = this.elements[Math.floor(Math.random() * this.elements.length)];
        this.applyGlitch(element);
    }
    
    applyGlitch(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'glitch 0.3s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 300);
        }, 10);
    }
}

// Sistema de Scroll Parallax Avançado - CORRIGIDO (sem distorção)
class AdvancedParallax {
    constructor() {
        this.sections = [];
        this.init();
    }
    
    init() {
        this.setupSections();
        this.setupEventListeners();
    }
    
    setupSections() {
        this.sections = Array.from(document.querySelectorAll('.carousel-slide, .servico-item, .marca-card'));
    }
    
    setupEventListeners() {
        window.addEventListener('scroll', () => this.onScroll());
        // REMOVIDO: window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }
    
    onScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        this.sections.forEach((section, index) => {
            const speed = (index + 1) * 0.1;
            section.style.transform = `translateY(${rate * speed}px)`;
        });
    }
}

// Sistema de Audio Visualizer - CORRIGIDO
class AudioVisualizer {
    constructor() {
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.bufferLength = null;
        this.container = null;
        this.bars = [];
        
        this.init();
    }
    
    async init() {
        this.createVisualizer();
        await this.setupAudio();
        this.animate();
    }
    
    createVisualizer() {
        this.container = document.createElement('div');
        this.container.className = 'audio-visualizer';
        this.container.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: end;
            justify-content: center;
            gap: 2px;
            z-index: 999;
            pointer-events: none;
            opacity: 0.3;
        `;
        
        document.body.appendChild(this.container);
        
        for (let i = 0; i < 64; i++) {
            const bar = document.createElement('div');
            bar.style.cssText = `
                width: 8px;
                height: 20px;
                background: var(--gradient-vermelho);
                border-radius: 4px 4px 0 0;
                transition: height 0.1s ease;
            `;
            this.container.appendChild(bar);
            this.bars.push(bar);
        }
    }
    
    async setupAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.value = 440;
            gainNode.gain.value = 0.1;
            
            this.analyser.fftSize = 256;
            this.bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(this.bufferLength);
            
        } catch (error) {
            console.log('Audio visualizer não suportado:', error);
        }
    }
    
    animate() {
        if (this.analyser) {
            this.analyser.getByteFrequencyData(this.dataArray);
            
            this.bars.forEach((bar, i) => {
                const value = this.dataArray[i] || Math.random() * 50;
                const height = (value / 255) * 80 + 20;
                bar.style.height = `${height}px`;
                
                const intensity = value / 255;
                bar.style.background = `linear-gradient(to top, 
                    rgba(255, 59, 48, ${intensity}) 0%,
                    rgba(255, 107, 107, ${intensity * 0.7}) 100%
                )`;
                bar.style.boxShadow = `0 0 ${intensity * 20}px rgba(255, 59, 48, ${intensity})`;
            });
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Sistema de Typing Effect Avançado - CORRIGIDO
class AdvancedTyping {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.setupTypingElements();
        this.startTyping();
    }
    
    setupTypingElements() {
        const typingElements = document.querySelectorAll('.slide-content h1, .section-subtitle');
        this.elements = Array.from(typingElements);
    }
    
    startTyping() {
        this.elements.forEach((element, index) => {
            setTimeout(() => {
                this.typeText(element);
            }, index * 1000);
        });
    }
    
    typeText(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #ff3b30';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.style.borderRight = 'none';
            }
        }, 50);
    }
}

// Sistema de Interactive Background - CORRIGIDO
class InteractiveBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.className = 'interactive-background';
        document.body.appendChild(this.canvas);
        
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        this.particles = [];
        const count = (this.canvas.width * this.canvas.height) / 10000;
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                color: `rgba(255, 59, 48, ${Math.random() * 0.5 + 0.1})`
            });
        }
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particle.x += dx * 0.01;
                particle.y += dy * 0.01;
            }
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            this.particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 59, 48, ${0.2 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar todos os sistemas - CORRIGIDO
document.addEventListener('DOMContentLoaded', function() {
    // new MatrixRain();
    new AdvancedParticles();
    new GlitchEffect();
    new AdvancedParallax();
    // new AudioVisualizer();
    new AdvancedTyping();
    new InteractiveBackground();
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});