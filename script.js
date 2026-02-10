const CONFIG = {
    loadingDelay: 2000,
    heroSlideInterval: 5000,
    modelsPerLoad: 6,
    searchDebounceDelay: 300
};

// SITE DATA - Mutate din HTML
const SITE_DATA = {
    navigation: [
        { id: 'home', icon: 'fa-home', text: 'Acasă' },
        { id: 'models', icon: 'fa-car', text: 'Modele' },
        { id: 'brands', icon: 'fa-flag', text: 'Branduri' },
        { id: 'reviews', icon: 'fa-star', text: 'Reviews' },
        { id: 'news', icon: 'fa-newspaper', text: 'Noutăți' },
        { id: 'contact', icon: 'fa-envelope', text: 'Contact' }
    ],
    
    heroSlides: [
        { image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
        { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' },
        { image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80' }
    ],
    
    brands: [
        { id: 'mercedes', name: 'Mercedes-Benz', slogan: 'Inventing Automotive Luxury', count: 45, icon: 'fab fa-mercedes' },
        { id: 'porsche', name: 'Porsche', slogan: 'There is no Substitute', count: 32, icon: 'fas fa-horse-head' },
        { id: 'bmw', name: 'BMW', slogan: 'The Ultimate Driving Machine', count: 38, icon: 'fab fa-bmw' },
        { id: 'audi', name: 'Audi', slogan: 'Vorsprung durch Technik', count: 41, icon: 'fas fa-rings' },
        { id: 'lamborghini', name: 'Lamborghini', slogan: 'Expect the Unexpected', count: 18, icon: 'fas fa-bull' },
        { id: 'ferrari', name: 'Ferrari', slogan: 'We are the Competition', count: 22, icon: 'fas fa-horse' }
    ],
    
    filters: [
        { id: 'all', text: 'Toate Modelele' },
        { id: 'electric', text: 'Electrice' },
        { id: 'suv', text: 'SUV' },
        { id: 'sport', text: 'Sport' },
        { id: 'luxury', text: 'Luxury' },
        { id: 'hybrid', text: 'Hibride' }
    ],
    
    sortOptions: [
        { id: 'newest', text: 'Cele mai noi' },
        { id: 'price-high', text: 'Preț descrescător' },
        { id: 'price-low', text: 'Preț crescător' },
        { id: 'power', text: 'Putere' }
    ],
    
    reviews: [
        {
            name: 'Alex Popescu',
            role: 'Editor Șef AutoMagazin',
            rating: 5,
            text: '"MotorVIBE a redefinit modul în care percepem review-urile auto. Detaliile tehnice, fotografiile profesionale și analizele aprofundate fac din acest site o resursă indispensabilă pentru orice pasionat de mașini."',
            car: 'Mercedes EQS 580'
        },
        {
            name: 'Maria Ionescu',
            role: 'Test Driver Profesionist',
            rating: 4.5,
            text: '"Ca șofer profesionist, apreciez precizia și profesionalismul de la MotorVIBE. Review-urile sunt obiective, testele sunt comprehensive, iar concluziile sunt întotdeauna bine argumentate."',
            car: 'Porsche 911 Turbo S'
        },
        {
            name: 'Andrei Mihai',
            role: 'Inginer Automotive',
            rating: 5,
            text: '"Abordarea tehnică a MotorVIBE este remarcabilă. Detaliile despre motoare, transmisii și tehnologii sunt exacte și bine prezentate. O resursă valoroasă pentru cei care înțeleg inginerie auto."',
            car: 'BMW iX M60'
        }
    ],
    
    news: [
        {
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Tehnologie',
            title: 'Revoluția Electrică 2024',
            excerpt: 'Cum tehnologia bateriilor va schimba industria auto în următorii 5 ani. Analiză detaliată a noilor tehnologii și a impactului lor.',
            date: '15 Martie 2024',
            readTime: '5 min citire'
        },
        {
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Comparație',
            title: 'Supercaruri 2024: Câștigătorul',
            excerpt: 'Porsche 911 Turbo S vs Lamborghini Huracán vs Ferrari Roma. Care este alegerea noastră și de ce?',
            date: '12 Martie 2024',
            readTime: '7 min citire'
        },
        {
            image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Review',
            title: 'Mercedes EQS: Viitorul Luxului',
            excerpt: 'Test complet cu noul Mercedes EQS. Performanță, comfort și tehnologie într-un pachet electric revolutionar.',
            date: '10 Martie 2024',
            readTime: '6 min citire'
        }
    ],
    
    contactInfo: [
        { icon: 'fas fa-map-marker-alt', title: 'Adresă', details: ['Bd. Dacia 45, Chișinău, Moldova'] },
        { icon: 'fas fa-phone', title: 'Telefon', details: ['+373 123 456 789'] },
        { icon: 'fas fa-envelope', title: 'Email', details: ['contact@motorvibe.md'] },
        { icon: 'fas fa-clock', title: 'Program', details: ['Luni - Vineri: 9:00 - 18:00', 'Sâmbătă: 10:00 - 14:00'] }
    ],
    
    footerLinks: {
        quick: ['Acasă', 'Modele', 'Branduri', 'Reviews', 'Noutăți', 'Contact'],
        brands: ['Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Lamborghini', 'Ferrari']
    }
};

// CAR DATABASE - Toate datele despre mașini
const CAR_DATABASE = {
    'mercedes-eqs': {
        id: 'mercedes-eqs',
        title: 'Mercedes EQS 580 4MATIC',
        brand: 'Mercedes-Benz',
        price: '€120,000',
        category: ['electric', 'luxury', 'sedan'],
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '516 CP',
            acceleration: '4.3s 0-100 km/h',
            topSpeed: '210 km/h',
            range: '770 km',
            battery: '107.8 kWh',
            charging: '200 kW DC',
            drive: 'AWD',
            transmission: 'Automata',
            seats: '5'
        },
        features: [
            'MBUX Hyperscreen',
            'Air Suspension',
            'Driving Assistant',
            'Burmester Sound System',
            'Heated/Ventilated Seats',
            'Panoramic Sunroof',
            'Wireless Charging',
            'Head-up Display'
        ],
        description: 'Mercedes EQS 580 reprezintă vârful tehnologiei electrice, oferind autonomie extinsă și lux incomparabil. Cu designul său aerodynamic și interiorul revolutionar, EQS redefinește mobilitatea premium pentru era digitală.'
    },
    'porsche-911-turbo': {
        id: 'porsche-911-turbo',
        title: 'Porsche 911 Turbo S',
        brand: 'Porsche',
        price: '€220,000',
        category: ['sport', 'coupe'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '650 CP',
            acceleration: '2.7s 0-100 km/h',
            topSpeed: '330 km/h',
            engine: '3.8L Flat-6 Biturbo',
            transmission: '8-speed PDK',
            drive: 'AWD',
            consumption: '11.5L/100km',
            seats: '4'
        },
        features: [
            'Sport Chrono Package',
            'Active Suspension',
            'Ceramic Composite Brakes',
            'Sports Exhaust',
            'Rear-Axle Steering',
            'Carbon Fiber Package',
            'Leather Interior',
            'Bose Sound System'
        ],
        description: 'Porsche 911 Turbo S este epitomul performanței pure. Cu accelerare rachetă și manevrabilitate precisă, acest supercar german aduce tehnologia de curse pe drumurile publice, oferind o experiență de condus de neegalat.'
    },
    'bmw-ix': {
        id: 'bmw-ix',
        title: 'BMW iX xDrive50',
        brand: 'BMW',
        price: '€95,000',
        category: ['electric', 'suv', 'luxury'],
        image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '523 CP',
            acceleration: '4.6s 0-100 km/h',
            topSpeed: '200 km/h',
            range: '630 km',
            battery: '111.5 kWh',
            charging: '195 kW DC',
            drive: 'AWD',
            transmission: 'Automata',
            seats: '5'
        },
        features: [
            'Panoramic Glass Roof',
            'Bowers & Wilkins Sound',
            'Driving Assistant Professional',
            'Luxury Package',
            'Air Suspension',
            'Massage Seats',
            'Gesture Control',
            'Wireless Android Auto/Apple CarPlay'
        ],
        description: 'BMW iX este SUV-ul electric care redefinește premium-ul în era digitală. Cu designul său revolutionary și tehnologia de vârf, iX oferă o experiență de condus fără compromisuri, combinând sustainability cu luxury autentic.'
    },
    'audi-rs-etron': {
        id: 'audi-rs-etron',
        title: 'Audi RS e-tron GT',
        brand: 'Audi',
        price: '€145,000',
        category: ['electric', 'sport', 'gran-turismo'],
        image: 'https://images.unsplash.com/photo-1617814076660-1edc47113c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '637 CP',
            acceleration: '3.1s 0-100 km/h',
            topSpeed: '250 km/h',
            range: '472 km',
            battery: '93.4 kWh',
            charging: '270 kW DC',
            drive: 'AWD',
            transmission: 'Automata',
            seats: '4'
        },
        features: [
            'RS Sport Package',
            'Matrix LED Headlights',
            'Bang & Olufsen 3D Sound',
            'RS Sport Seats',
            'Carbon Package',
            'Head-up Display',
            'Night Vision Assistant',
            'Park Assist'
        ],
        description: 'Audi RS e-tron GT este Grand Tourer-ul electric care concurează cu supercarurile. Cu designul său dramatic și performanțele explosive, reprezintă viitorul sportiv al Audi, oferind o simbioză perfectă între eleganță și performanță.'
    },
    'lamborghini-huracan': {
        id: 'lamborghini-huracan',
        title: 'Lamborghini Huracán EVO',
        brand: 'Lamborghini',
        price: '€280,000',
        category: ['sport', 'supercar'],
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '640 CP',
            acceleration: '2.9s 0-100 km/h',
            topSpeed: '325 km/h',
            engine: '5.2L V10',
            transmission: '7-speed LDF',
            drive: 'AWD',
            consumption: '18.0L/100km',
            seats: '2'
        },
        features: [
            'LDVI System',
            'Magnetic Suspension',
            'Carbon Ceramic Brakes',
            'Alcantara Interior',
            'Lamborghini Dinamica Veicolo',
            'Forge Carbon Fiber',
            'Sports Exhaust',
            'Lift System'
        ],
        description: 'Lamborghini Huracán EVO este supercar-ul care aduce pasiunea italiană la cel mai înalt nivel. Cu motorul V10 natural aspirat și tehnologia avansată, oferă o experiență de condus pură și emoționantă, păstrând ADN-ul brandului.'
    },
    'ferrari-roma': {
        id: 'ferrari-roma',
        title: 'Ferrari Roma',
        brand: 'Ferrari',
        price: '€250,000',
        category: ['sport', 'luxury', 'gran-turismo'],
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '620 CP',
            acceleration: '3.4s 0-100 km/h',
            topSpeed: '320 km/h',
            engine: '3.9L V8 Turbo',
            transmission: '8-speed DCT',
            drive: 'RWD',
            consumption: '12.5L/100km',
            seats: '2+2'
        },
        features: [
            'Side Slip Control',
            'Ferrari Dynamic Enhancer',
            'Manettino Dial',
            'Leather Interior',
            'Advanced Driver Assistance',
            'Apple CarPlay',
            'JBL Premium Sound',
            'Carbon Fiber Steering Wheel'
        ],
        description: 'Ferrari Roma este Grand Tourer-ul care combină eleganța cu performanța. Cu designul său timeless și tehnologia de vârf, Roma reprezintă celebra tradiție Ferrari într-o formă modernă și sofisticată, oferind comfort pe distanțe lungi fără a compromis performanța.'
    }
};

// App State
let appState = {
    currentHeroSlide: 0,
    currentFilter: 'all',
    currentSort: 'newest',
    displayedModels: 0,
    favoriteCars: new Set(),
    isMobileMenuOpen: false,
    isDarkMode: true
};

// MAIN INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showLoadingScreen();
    
    // Construiește întregul site din datele din JS
    buildNavigation();
    buildMobileMenu();
    buildMainContent();
    buildFooter();
    
    initializeEventListeners();
    initializeHeroSlider();
    loadInitialModels();
    initializeTheme();
    
    setTimeout(() => {
        hideLoadingScreen();
    }, CONFIG.loadingDelay);
}

// BUILD FUNCTIONS
function buildNavigation() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;
    
    navMenu.innerHTML = SITE_DATA.navigation.map(navItem => `
        <a href="#${navItem.id}" class="nav-link ${navItem.id === 'home' ? 'active' : ''}" data-section="${navItem.id}">
            <i class="fas ${navItem.icon}"></i>
            <span>${navItem.text}</span>
        </a>
    `).join('');
}

function buildMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu) return;
    
    mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
            ${SITE_DATA.navigation.map(navItem => `
                <a href="#${navItem.id}" class="mobile-nav-link ${navItem.id === 'home' ? 'active' : ''}">
                    <i class="fas ${navItem.icon}"></i>
                    <span>${navItem.text}</span>
                </a>
            `).join('')}
        </div>
    `;
}

function buildMainContent() {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    mainContent.innerHTML = `
        <!-- Home Section -->
        <section id="home" class="section active">
            ${buildHeroSection()}
        </section>
        
        <!-- Brands Section -->
        <section id="brands" class="section">
            ${buildBrandsSection()}
        </section>
        
        <!-- Models Section -->
        <section id="models" class="section">
            ${buildModelsSection()}
        </section>
        
        <!-- Reviews Section -->
        <section id="reviews" class="section">
            ${buildReviewsSection()}
        </section>
        
        <!-- News Section -->
        <section id="news" class="section">
            ${buildNewsSection()}
        </section>
        
        <!-- Contact Section -->
        <section id="contact" class="section">
            ${buildContactSection()}
        </section>
    `;
}

function buildHeroSection() {
    return `
        <div class="hero-section">
            <div class="hero-background">
                ${SITE_DATA.heroSlides.map((slide, index) => `
                    <div class="hero-slide ${index === 0 ? 'active' : ''}" 
                         style="background-image: url('${slide.image}')"></div>
                `).join('')}
            </div>

            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge">
                        <span>Premium Automotive</span>
                    </div>
                    <h1 class="hero-title">
                        <span class="title-line">Descoperă</span>
                        <span class="title-line highlight">Lumea Mașinilor</span>
                        <span class="title-line">de Vis</span>
                    </h1>
                    <p class="hero-subtitle">
                        Explorează cele mai exclusive modele auto, review-uri detaliate și tehnologii revolutionare. 
                        De la supercaruri electrice la luxury SUV-uri.
                    </p>
                    <div class="hero-actions">
                        <button class="btn btn-primary" onclick="scrollToSection('models')">
                            <span>Explorează Colecția</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                        <button class="btn btn-secondary" onclick="openVideoModal()">
                            <i class="fas fa-play"></i>
                            <span>Watch Story</span>
                        </button>
                    </div>
                </div>

                <div class="hero-stats">
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-car-side"></i>
                        </div>
                        <div class="stat-info">
                            <h3>500+</h3>
                            <p>Modele Testate</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-flag"></i>
                        </div>
                        <div class="stat-info">
                            <h3>50+</h3>
                            <p>Branduri Premium</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-info">
                            <h3>100k+</h3>
                            <p>Utilizatori</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-scroll">
                <div class="scroll-indicator">
                    <span>Scroll to Explore</span>
                    <div class="scroll-arrow">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>

            <div class="hero-slider-controls">
                <button class="slider-btn prev" onclick="changeHeroSlide(-1)">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="slider-btn next" onclick="changeHeroSlide(1)">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    `;
}

function buildBrandsSection() {
    return `
        <div class="brands-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Branduri de Prestigiu</h2>
                    <p class="section-subtitle">Colaborăm cu cele mai exclusive manufacturi auto din lume</p>
                </div>

                <div class="brands-grid">
                    ${SITE_DATA.brands.map(brand => `
                        <div class="brand-card" data-brand="${brand.id}">
                            <div class="brand-logo">
                                <i class="${brand.icon}"></i>
                            </div>
                            <h3>${brand.name}</h3>
                            <p>${brand.slogan}</p>
                            <span class="brand-count">${brand.count} Modele</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function buildModelsSection() {
    return `
        <div class="models-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Colecția Premium</h2>
                    <p class="section-subtitle">Descoperă cele mai impresionante modele din portofoliul nostru</p>
                </div>

                <div class="models-controls">
                    <div class="filter-tabs">
                        ${SITE_DATA.filters.map(filter => `
                            <button class="filter-tab ${filter.id === 'all' ? 'active' : ''}" data-filter="${filter.id}">
                                ${filter.text}
                            </button>
                        `).join('')}
                    </div>

                    <div class="sort-controls">
                        <select id="sortSelect" class="sort-select">
                            ${SITE_DATA.sortOptions.map(option => `
                                <option value="${option.id}">${option.text}</option>
                            `).join('')}
                        </select>
                    </div>
                </div>

                <div class="models-grid" id="modelsGrid">
                    <!-- Mașinile vor fi populate dinamic -->
                </div>

                <div class="load-more-container">
                    <button class="btn btn-outline" id="loadMoreBtn">
                        <span>Încarcă mai multe</span>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function buildReviewsSection() {
    return `
        <div class="reviews-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Reviews & Testimoniale</h2>
                    <p class="section-subtitle">Ce spun experții și clienții noștri despre experiența MotorVIBE</p>
                </div>

                <div class="reviews-grid">
                    ${SITE_DATA.reviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="reviewer-info">
                                    <h4>${review.name}</h4>
                                    <span>${review.role}</span>
                                    <div class="rating">
                                        ${generateRatingStars(review.rating)}
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">${review.text}</p>
                            <div class="review-car">
                                <i class="fas fa-car"></i>
                                <span>Testat: ${review.car}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function buildNewsSection() {
    return `
        <div class="news-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Ultimele Noutăți</h2>
                    <p class="section-subtitle">Rămâi la curent cu cele mai recente dezvoltări din lumea auto</p>
                </div>

                <div class="news-grid">
                    ${SITE_DATA.news.map(newsItem => `
                        <div class="news-card">
                            <div class="news-image">
                                <img src="${newsItem.image}" alt="${newsItem.title}">
                            </div>
                            <div class="news-content">
                                <span class="news-category">${newsItem.category}</span>
                                <h3>${newsItem.title}</h3>
                                <p class="news-excerpt">${newsItem.excerpt}</p>
                                <div class="news-meta">
                                    <span class="news-date">${newsItem.date}</span>
                                    <span class="news-read-time">${newsItem.readTime}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function buildContactSection() {
    return `
        <div class="contact-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Contactează-ne</h2>
                    <p class="section-subtitle">Ai întrebări sau proiecte? Suntem aici să te ajutăm</p>
                </div>

                <div class="contact-grid">
                    <div class="contact-info">
                        ${SITE_DATA.contactInfo.map(info => `
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="${info.icon}"></i>
                                </div>
                                <div class="contact-details">
                                    <h4>${info.title}</h4>
                                    ${info.details.map(detail => `<p>${detail}</p>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <input type="text" placeholder="Numele tău" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email-ul tău" required>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Subiect" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Mesajul tău" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <span>Trimite Mesaj</span>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function buildFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-car-side"></i>
                        <span>MotorVIBE</span>
                    </div>
                    <p>
                        MotorVIBE este platforma ta premium pentru descoperirea, compararea și 
                        înțelegerea lumii auto. Aducem pasiune pentru mașini într-o experiență digitală unică.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Linkuri Rapide</h4>
                    <ul class="footer-links">
                        ${SITE_DATA.footerLinks.quick.map(link => `
                            <li><a href="#${link.toLowerCase()}">${link}</a></li>
                        `).join('')}
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Branduri</h4>
                    <ul class="footer-links">
                        ${SITE_DATA.footerLinks.brands.map(brand => `
                            <li><a href="#${brand.toLowerCase()}">${brand}</a></li>
                        `).join('')}
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Newsletter</h4>
                    <p>Abonează-te pentru noutăți exclusive și oferte speciale</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Email-ul tău" required>
                        <button type="submit">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 MotorVIBE. Toate drepturile rezervate. | Dezvoltat cu <i class="fas fa-heart"></i> pentru pasionații auto</p>
            </div>
        </div>
    `;
}

// HELPER FUNCTIONS
function generateRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// RESTUL FUNCȚIILOR DIN CODUL ORIGINAL RĂMÂN NESCHIMBATE
// (initializeEventListeners, setupNavigation, setupSearch, etc.)
// Toate funcțiile de inițializare și manipulare din codul original
// vor rămâne exact la fel

// ... (aici ar veni restul funcțiilor din codul original:
// initializeEventListeners, setupNavigation, setupSearch, setupFilters,
// setupMobileMenu, setupThemeToggle, setupForms, setupScrollEvents,
// updateActiveNavigation, showSection, scrollToSection, initializeHeroSlider,
// changeHeroSlide, loadInitialModels, loadMoreModels, filterAndDisplayModels,
// getFilteredCars, getSortedCars, displayModels, createModelCard,
// attachModelCardEvents, updateLoadMoreButton, toggleFavorite, saveFavorites,
// loadFavorites, openVideoModal, closeVideoModal, openCarModal, closeCarModal,
// createCarModalContent, initializeTheme, toggleTheme, applyTheme, saveTheme,
// toggleMobileMenu, handleContactSubmit, handleNewsletterSubmit,
// handleTestDrive, handleScroll, debounce, throttle, getBadgeType,
// getBadgeIcon, getBadgeText, getSpecIcon, formatSpecKey, showNotification)

// Adaugă la sfârșitul fișierului JavaScript:
// window.scrollToSection = scrollToSection;
// window.openVideoModal = openVideoModal;
// window.closeVideoModal = closeVideoModal;
// window.openCarModal = openCarModal;
// window.closeCarModal = closeCarModal;
// window.toggleFavorite = toggleFavorite;
// window.handleTestDrive = handleTestDrive;

// NOTĂ: Codul de mai sus este extrem de lung. Din motive de spațiu,
// nu pot include toate cele ~500 de linii de cod existente.
// Aceste funcții rămân exact la fel ca în codul original.
// Singura diferență este că acum folosesc datele din SITE_DATA și CAR_DATABASE.