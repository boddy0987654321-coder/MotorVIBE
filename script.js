const CONFIG = {
    loadingDelay: 2000,
    heroSlideInterval: 5000,
    modelsPerLoad: 6,
    searchDebounceDelay: 300
};

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
    },
    'mercedes-g63': {
        id: 'mercedes-g63',
        title: 'Mercedes-AMG G63',
        brand: 'Mercedes-Benz',
        price: '€180,000',
        category: ['suv', 'luxury', 'offroad'],
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '585 CP',
            acceleration: '4.5s 0-100 km/h',
            topSpeed: '220 km/h',
            engine: '4.0L V8 Biturbo',
            transmission: '9-speed Automatic',
            drive: 'AWD',
            consumption: '13.5L/100km',
            seats: '5'
        },
        features: [
            'AMG Performance Exhaust',
            'Adaptive Suspension',
            'Three Differential Locks',
            'MBUX Infotainment',
            'Burmester Surround Sound',
            'Designo Leather',
            'Panoramic Sunroof',
            'Off-Road Package'
        ],
        description: 'Mercedes-AMG G63 combină puterea brută cu rafinamentul luxury. Legendara capacitate off-road se îmbină cu performanțe de supercar, oferind o prezență impunătoare și capabilități excepționale atât pe asfalt, cât și pe teren accidentat.'
    },
    'porsche-taycan': {
        id: 'porsche-taycan',
        title: 'Porsche Taycan Turbo',
        brand: 'Porsche',
        price: '€160,000',
        category: ['electric', 'sport', 'sedan'],
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba5331bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        specs: {
            power: '680 CP',
            acceleration: '3.2s 0-100 km/h',
            topSpeed: '260 km/h',
            range: '450 km',
            battery: '93.4 kWh',
            charging: '270 kW DC',
            drive: 'AWD',
            transmission: '2-speed Automatic',
            seats: '4'
        },
        description: 'Primul Porsche electric care păstrează ADN-ul brandului cu performanțe explosive și manevrabilitate precisă.'
    }
};

let appState = {
    currentHeroSlide: 0,
    currentFilter: 'all',
    currentSort: 'newest',
    displayedModels: 0,
    favoriteCars: new Set(),
    isMobileMenuOpen: false,
    isDarkMode: true
};

// ===== INITIALIZARE APLICAȚIE =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showLoadingScreen();
    initializeEventListeners();
    initializeHeroSlider();
    loadInitialModels();
    initializeTheme();
    
    setTimeout(() => {
        hideLoadingScreen();
    }, CONFIG.loadingDelay);
}

// ===== LOADING SCREEN =====
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.remove('hidden');
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Navigație
    setupNavigation();
    
    // Search cu debounce
    setupSearch();
    
    // Filtre și sortare
    setupFilters();
    
    // Mobile menu
    setupMobileMenu();
    
    // Theme toggle
    setupThemeToggle();
    
    // Form submission
    setupForms();
    
    // Scroll events
    setupScrollEvents();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            
            // Update active states
            updateActiveNavigation(this);
            
            // Show target section
            showSection(targetSection);
            
            // Close mobile menu if open
            if (appState.isMobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterAndDisplayModels(searchTerm);
    }, CONFIG.searchDebounceDelay));
}

function setupFilters() {
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and refresh models
            appState.currentFilter = filter;
            filterAndDisplayModels();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        appState.currentSort = this.value;
        filterAndDisplayModels();
    });
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.addEventListener('click', loadMoreModels);
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (appState.isMobileMenuOpen && 
            !mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function setupForms() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });
}

function setupScrollEvents() {
    // Hero scroll indicator
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            scrollToSection('brands');
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', throttle(handleScroll, 100));
}

// ===== NAVIGAȚIE ȘI SECTIONS =====
function updateActiveNavigation(activeLink) {
    // Update main nav
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => link.classList.remove('active'));
    
    // Update mobile nav
    const allMobileLinks = document.querySelectorAll('.mobile-nav-link');
    allMobileLinks.forEach(link => link.classList.remove('active'));
    
    // Set active state
    activeLink.classList.add('active');
    
    // Also update corresponding link in other menu
    const href = activeLink.getAttribute('href');
    const correspondingLink = document.querySelector(`[href="${href}"]:not(.${activeLink.classList[0]})`);
    if (correspondingLink) {
        correspondingLink.classList.add('active');
    }
}

function showSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => section.classList.remove('active'));
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Special handling for models section
        if (sectionId === 'models') {
            filterAndDisplayModels();
        }
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== HERO SLIDER =====
function initializeHeroSlider() {
    // Start automatic slideshow
    setInterval(() => {
        changeHeroSlide(1);
    }, CONFIG.heroSlideInterval);
}

function changeHeroSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    
    // Calculate new slide index
    let newIndex = appState.currentHeroSlide + direction;
    
    if (newIndex >= totalSlides) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = totalSlides - 1;
    }
    
    // Update slides
    slides[appState.currentHeroSlide].classList.remove('active');
    slides[newIndex].classList.add('active');
    
    appState.currentHeroSlide = newIndex;
}

// ===== MANAGEMENT MODELE =====
function loadInitialModels() {
    appState.displayedModels = CONFIG.modelsPerLoad;
    filterAndDisplayModels();
}

function loadMoreModels() {
    appState.displayedModels += CONFIG.modelsPerLoad;
    filterAndDisplayModels();
    
    // Scroll to newly loaded models
    setTimeout(() => {
        const modelsGrid = document.getElementById('modelsGrid');
        if (modelsGrid) {
            modelsGrid.scrollIntoView({ 
                behavior: 'smooth',
                block: 'end'
            });
        }
    }, 100);
}

function filterAndDisplayModels(searchTerm = '') {
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;
    
    // Get filtered and sorted cars
    let cars = getFilteredCars(searchTerm);
    cars = getSortedCars(cars);
    
    // Limit to currently displayed count
    const carsToShow = cars.slice(0, appState.displayedModels);
    
    // Update UI
    displayModels(carsToShow, modelsGrid);
    
    // Update load more button
    updateLoadMoreButton(cars.length);
}

function getFilteredCars(searchTerm) {
    return Object.values(CAR_DATABASE).filter(car => {
        // Filter by category
        const categoryMatch = appState.currentFilter === 'all' || 
                            car.category.includes(appState.currentFilter);
        
        // Filter by search term
        const searchMatch = !searchTerm || 
                           car.title.toLowerCase().includes(searchTerm) ||
                           car.brand.toLowerCase().includes(searchTerm) ||
                           car.description.toLowerCase().includes(searchTerm);
        
        return categoryMatch && searchMatch;
    });
}

function getSortedCars(cars) {
    switch (appState.currentSort) {
        case 'price-high':
            return cars.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
        case 'price-low':
            return cars.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
        case 'power':
            return cars.sort((a, b) => parseFloat(b.specs.power) - parseFloat(a.specs.power));
        case 'newest':
        default:
            return cars; // Already in creation order
    }
}

function displayModels(cars, container) {
    if (cars.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nu s-au găsit modele</h3>
                <p>Încearcă să modifici filtrele sau termenul de căutare</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cars.map(car => createModelCard(car)).join('');
    
    // Add event listeners to new cards
    attachModelCardEvents();
}

function createModelCard(car) {
    const badgeType = getBadgeType(car.category);
    const isFavorite = appState.favoriteCars.has(car.id);
    
    return `
        <div class="model-card" data-car-id="${car.id}">
            <div class="model-image">
                <img src="${car.image}" alt="${car.title}" loading="lazy">
                <div class="model-badge ${badgeType}">
                    <i class="fas ${getBadgeIcon(car.category)}"></i>
                    ${getBadgeText(car.category)}
                </div>
            </div>
            <div class="model-info">
                <div class="model-header">
                    <span class="model-brand">${car.brand}</span>
                    <div class="model-price">${car.price}</div>
                </div>
                <h3 class="model-name">${car.title}</h3>
                <p class="model-description">${car.description}</p>
                
                <div class="model-specs">
                    <div class="spec">
                        <i class="fas fa-bolt"></i>
                        <span>${car.specs.power}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${car.specs.acceleration}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-gauge-high"></i>
                        <span>${car.specs.topSpeed}</span>
                    </div>
                </div>
                
                <div class="model-actions">
                    <button class="btn-details" onclick="openCarModal('${car.id}')">
                        <i class="fas fa-eye"></i>
                        Vezi Detalii
                    </button>
                    <button class="btn-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${car.id}')">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function attachModelCardEvents() {
    // Card click events
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking buttons
            if (!e.target.closest('.btn-details') && !e.target.closest('.btn-favorite')) {
                const carId = this.getAttribute('data-car-id');
                openCarModal(carId);
            }
        });
    });
}

function updateLoadMoreButton(totalCars) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;
    
    if (appState.displayedModels >= totalCars) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// ===== FAVORITE SYSTEM =====
function toggleFavorite(carId) {
    if (appState.favoriteCars.has(carId)) {
        appState.favoriteCars.delete(carId);
    } else {
        appState.favoriteCars.add(carId);
    }
    
    // Update UI
    const favoriteBtn = document.querySelector(`[onclick="toggleFavorite('${carId}')"]`);
    if (favoriteBtn) {
        favoriteBtn.classList.toggle('active');
    }
    
    // Save to localStorage
    saveFavorites();
}

function saveFavorites() {
    localStorage.setItem('motorvibe_favorites', JSON.stringify([...appState.favoriteCars]));
}

function loadFavorites() {
    const saved = localStorage.getItem('motorvibe_favorites');
    if (saved) {
        appState.favoriteCars = new Set(JSON.parse(saved));
    }
}

// ===== MODALE =====
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openCarModal(carId) {
    const car = CAR_DATABASE[carId];
    if (!car) return;
    
    const modalBody = document.getElementById('carModalBody');
    modalBody.innerHTML = createCarModalContent(car);
    
    const modal = document.getElementById('carModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCarModal() {
    const modal = document.getElementById('carModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function createCarModalContent(car) {
    const isFavorite = appState.favoriteCars.has(car.id);
    
    return `
        <div class="car-modal">
            <div class="car-modal-image">
                <img src="${car.image}" alt="${car.title}">
            </div>
            <div class="car-modal-info">
                <div class="car-modal-header">
                    <div class="car-modal-brand">${car.brand}</div>
                    <h2 class="car-modal-title">${car.title}</h2>
                    <div class="car-modal-price">${car.price}</div>
                </div>
                
                <div class="car-modal-specs">
                    ${Object.entries(car.specs).map(([key, value]) => `
                        <div class="car-spec-item">
                            <i class="fas ${getSpecIcon(key)}"></i>
                            <div class="car-spec-info">
                                <h5>${formatSpecKey(key)}</h5>
                                <span>${value}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="car-modal-description">
                    <p>${car.description}</p>
                </div>
                
                <div class="car-modal-features">
                    <h4>Dotări și Tehnologii</h4>
                    <div class="features-grid">
                        ${car.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="car-modal-actions">
                    <button class="btn btn-primary" onclick="handleTestDrive('${car.id}')">
                        <i class="fas fa-calendar"></i>
                        Programează Test Drive
                    </button>
                    <button class="btn btn-secondary ${isFavorite ? 'active' : ''}" onclick="toggleFavorite('${car.id}')">
                        <i class="fas fa-heart"></i>
                        ${isFavorite ? 'Șters din Favorite' : 'Adaugă la Favorite'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('motorvibe_theme');
    if (savedTheme) {
        appState.isDarkMode = savedTheme === 'dark';
    }
    applyTheme();
}

function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    applyTheme();
    saveTheme();
}

function applyTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (appState.isDarkMode) {
        document.documentElement.style.setProperty('--dark', '#0f1419');
        document.documentElement.style.setProperty('--darker', '#0a0e13');
        document.documentElement.style.setProperty('--light', '#ffffff');
        icon.className = 'fas fa-moon';
    } else {
        document.documentElement.style.setProperty('--dark', '#f8f9fa');
        document.documentElement.style.setProperty('--darker', '#e9ecef');
        document.documentElement.style.setProperty('--light', '#212529');
        icon.className = 'fas fa-sun';
    }
}

function saveTheme() {
    localStorage.setItem('motorvibe_theme', appState.isDarkMode ? 'dark' : 'light');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.nav-hamburger');
    
    appState.isMobileMenuOpen = !appState.isMobileMenuOpen;
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (appState.isMobileMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// ===== FORM HANDLING =====
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name') || e.target.querySelector('input[type="text"]').value,
        email: formData.get('email') || e.target.querySelector('input[type="email"]').value,
        subject: formData.get('subject') || e.target.querySelectorAll('input[type="text"]')[1]?.value,
        message: formData.get('message') || e.target.querySelector('textarea').value
    };
    
    // Simulate form submission
    showNotification('Mesajul tău a fost trimis cu succes!', 'success');
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('Te-ai abonat cu succes la newsletter!', 'success');
    e.target.reset();
}

function handleTestDrive(carId) {
    const car = CAR_DATABASE[carId];
    showNotification(`Test drive programat pentru ${car.title}! Vei fi contactat în curând.`, 'success');
    closeCarModal();
}

// ===== SCROLL HANDLING =====
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

// ===== UTILITARE =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function getBadgeType(categories) {
    if (categories.includes('electric')) return 'electric';
    if (categories.includes('sport')) return 'sport';
    if (categories.includes('luxury')) return 'luxury';
    if (categories.includes('suv')) return 'suv';
    if (categories.includes('hybrid')) return 'hybrid';
    return 'sport';
}

function getBadgeIcon(categories) {
    if (categories.includes('electric')) return 'fa-bolt';
    if (categories.includes('sport')) return 'fa-tachometer-alt';
    if (categories.includes('luxury')) return 'fa-crown';
    if (categories.includes('suv')) return 'fa-mountain';
    if (categories.includes('hybrid')) return 'fa-leaf';
    return 'fa-car';
}

function getBadgeText(categories) {
    if (categories.includes('electric')) return 'Electric';
    if (categories.includes('sport')) return 'Sport';
    if (categories.includes('luxury')) return 'Luxury';
    if (categories.includes('suv')) return 'SUV';
    if (categories.includes('hybrid')) return 'Hybrid';
    return 'Premium';
}

function getSpecIcon(specKey) {
    const icons = {
        power: 'fa-bolt',
        acceleration: 'fa-rocket',
        topSpeed: 'fa-gauge-high',
        range: 'fa-road',
        battery: 'fa-battery-full',
        charging: 'fa-bolt',
        engine: 'fa-cog',
        transmission: 'fa-gears',
        drive: 'fa-car-side',
        consumption: 'fa-gas-pump',
        seats: 'fa-users'
    };
    return icons[specKey] || 'fa-info-circle';
}

function formatSpecKey(key) {
    const formats = {
        power: 'Putere',
        acceleration: 'Accelerare 0-100',
        topSpeed: 'Viteză maximă',
        range: 'Autonomie',
        battery: 'Baterie',
        charging: 'Încărcare rapidă',
        engine: 'Motor',
        transmission: 'Transmisie',
        drive: 'Tracțiune',
        consumption: 'Consum',
        seats: 'Locuri'
    };
    return formats[key] || key;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'info'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== STILURI NOTIFICĂRI (adaugă în CSS) =====
const notificationStyles = `
.notification {
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--dark);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    box-shadow: var(--shadow-lg);
    z-index: 3000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 350px;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    border-left: 4px solid var(--accent);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--light);
}

.notification-content i {
    color: var(--accent);
}
`;

// Adaugă stilurile notificărilor
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// ===== INITIALIZARE FINALĂ =====
// Load favorites on start
loadFavorites();

// Error handling
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    showNotification('A apărut o eroare. Încarcă din nou pagina.', 'error');
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openCarModal = openCarModal;
window.closeCarModal = closeCarModal;
window.toggleFavorite = toggleFavorite;
window.handleTestDrive = handleTestDrive;