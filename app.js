const CONFIG = {
    loadingDelay: 1500,
    heroSlideInterval: 5000,
    modelsPerLoad: 6,
    searchDebounceDelay: 300
};

const CAR_DATABASE = {
    'mercedes-eqs': {
        id: 'mercedes-eqs', title: 'Mercedes EQS 580 4MATIC', brand: 'Mercedes-Benz',
        price: '€120,000', category: ['electric', 'luxury'],
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        specs: { power: '516 CP', acceleration: '4.3s', topSpeed: '210 km/h', range: '770 km' },
        features: ['MBUX Hyperscreen', 'Air Suspension', 'Burmester Sound', 'Panoramic Sunroof'],
        description: 'Mercedes EQS - vârful tehnologiei electrice.'
    },
    'porsche-911-turbo': {
        id: 'porsche-911-turbo', title: 'Porsche 911 Turbo S', brand: 'Porsche',
        price: '€220,000', category: ['sport'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        specs: { power: '650 CP', acceleration: '2.7s', topSpeed: '330 km/h', engine: '3.8L Biturbo' },
        features: ['Sport Chrono', 'Ceramic Brakes', 'Sports Exhaust', 'Carbon Package'],
        description: 'Porsche 911 Turbo S - performanță pură.'
    },
    'bmw-ix': {
        id: 'bmw-ix', title: 'BMW iX xDrive50', brand: 'BMW',
        price: '€95,000', category: ['electric', 'suv'],
        image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        specs: { power: '523 CP', acceleration: '4.6s', topSpeed: '200 km/h', range: '630 km' },
        features: ['Panoramic Roof', 'Bowers & Wilkins', 'Massage Seats', 'Gesture Control'],
        description: 'BMW iX - SUV-ul electric premium.'
    },
    'audi-rs-etron': {
        id: 'audi-rs-etron', title: 'Audi RS e-tron GT', brand: 'Audi',
        price: '€145,000', category: ['electric', 'sport'],
        image: 'https://images.unsplash.com/photo-1654853976163-7ecedd0dd4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        specs: { power: '637 CP', acceleration: '3.1s', topSpeed: '250 km/h', range: '472 km' },
        features: ['RS Package', 'Matrix LED', 'Bang & Olufsen', 'Carbon Package'],
        description: 'Audi RS e-tron GT - Gran Turismo electric.'
    },
    'lamborghini-huracan': {
        id: 'lamborghini-huracan', title: 'Lamborghini Huracán EVO', brand: 'Lamborghini',
        price: '€280,000', category: ['sport'],
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        specs: { power: '640 CP', acceleration: '2.9s', topSpeed: '325 km/h', engine: '5.2L V10' },
        features: ['LDVI System', 'Carbon Brakes', 'Alcantara', 'Lift System'],
        description: 'Lamborghini Huracán - supercar italian.'
    },
    'ferrari-roma': {
        id: 'ferrari-roma', title: 'Ferrari Roma', brand: 'Ferrari',
        price: '€250,000', category: ['sport', 'luxury'],
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        specs: { power: '620 CP', acceleration: '3.4s', topSpeed: '320 km/h', engine: '3.9L V8' },
        features: ['Side Slip Control', 'Manettino', 'Leather Interior', 'Carbon Steering'],
        description: 'Ferrari Roma - eleganță și performanță.'
    }
};

let appState = {
    currentHeroSlide: 0,
    currentFilter: 'all',
    currentSort: 'newest',
    displayedModels: 6,
    favoriteCars: new Set(),
    isMobileMenuOpen: false,
    isDarkMode: true
};

document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    initEvents();
    initHeroSlider();
    filterModels();
    setupTheme();
    setTimeout(() => {
        document.getElementById('loadingScreen')?.classList.add('hidden');
    }, CONFIG.loadingDelay);
});

function initEvents() {
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href')?.substring(1);
            if (id) {
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.getElementById(id)?.classList.add('active');
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                if (id === 'models') filterModels();
                if (appState.isMobileMenuOpen) toggleMobileMenu();
            }
        });
    });

    document.getElementById('searchInput')?.addEventListener('input', debounce((e) => {
        filterModels(e.target.value);
    }, CONFIG.searchDebounceDelay));

    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            appState.currentFilter = tab.dataset.filter;
            filterModels();
        });
    });

    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
        appState.currentSort = e.target.value;
        filterModels();
    });

    document.getElementById('loadMoreBtn')?.addEventListener('click', () => {
        appState.displayedModels += CONFIG.modelsPerLoad;
        filterModels();
    });

    document.querySelector('.nav-hamburger')?.addEventListener('click', toggleMobileMenu);

    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    document.getElementById('prevSlideBtn')?.addEventListener('click', () => changeHeroSlide(-1));
    document.getElementById('nextSlideBtn')?.addEventListener('click', () => changeHeroSlide(1));

    document.getElementById('exploreBtn')?.addEventListener('click', () => scrollTo('models'));
    document.getElementById('videoBtn')?.addEventListener('click', () => openModal('videoModal'));
    document.querySelector('.hero-scroll')?.addEventListener('click', () => scrollTo('brands'));

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = '';
        });
    });

    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Mesaj trimis cu succes!', 'success');
        e.target.reset();
    });
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Abonare reușită!', 'success');
        e.target.reset();
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.nav-hamburger');
    if (!menu || !hamburger) return;
    
    appState.isMobileMenuOpen = !appState.isMobileMenuOpen;
    menu.classList.toggle('active');
    
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

function initHeroSlider() {
    setInterval(() => changeHeroSlide(1), CONFIG.heroSlideInterval);
}
function changeHeroSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    slides[appState.currentHeroSlide].classList.remove('active');
    appState.currentHeroSlide = (appState.currentHeroSlide + direction + slides.length) % slides.length;
    slides[appState.currentHeroSlide].classList.add('active');
}

function filterModels(search = '') {
    let cars = Object.values(CAR_DATABASE).filter(c => {
        const matchFilter = appState.currentFilter === 'all' || (c.category && c.category.includes(appState.currentFilter));
        const matchSearch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.brand.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });
    
    if (appState.currentSort === 'price-high') cars.sort((a,b) => parseFloat(b.price.replace(/[^\d.]/g,'')) - parseFloat(a.price.replace(/[^\d.]/g,'')));
    else if (appState.currentSort === 'price-low') cars.sort((a,b) => parseFloat(a.price.replace(/[^\d.]/g,'')) - parseFloat(b.price.replace(/[^\d.]/g,'')));
    else if (appState.currentSort === 'power') cars.sort((a,b) => parseFloat(b.specs.power) - parseFloat(a.specs.power));
    
    displayModels(cars.slice(0, appState.displayedModels));
    
    const loadMore = document.getElementById('loadMoreBtn');
    if (loadMore) loadMore.style.display = appState.displayedModels >= cars.length ? 'none' : 'inline-flex';
}

function displayModels(cars) {
    const grid = document.getElementById('modelsGrid');
    if (!grid) return;
    
    if (!cars.length) {
        grid.innerHTML = '<div style="text-align:center;padding:2rem"><i class="fas fa-search"></i><h3>Nu s-au găsit modele</h3></div>';
        return;
    }
    
    grid.innerHTML = cars.map(c => {
        const type = c.category[0];
        const fav = appState.favoriteCars.has(c.id);
        return `
        <div class="model-card">
            <div class="model-image">
                <img src="${c.image}" alt="${c.title}" loading="lazy">
                <div class="model-badge ${type}"><i class="fas ${type==='electric'?'fa-bolt':type==='sport'?'fa-tachometer-alt':type==='luxury'?'fa-crown':'fa-car'}"></i> ${type}</div>
            </div>
            <div class="model-info">
                <div class="model-header"><span class="model-brand">${c.brand}</span><span class="model-price">${c.price}</span></div>
                <h3 class="model-name">${c.title}</h3>
                <p class="model-description">${c.description}</p>
                <div class="model-specs">
                    <div class="spec"><i class="fas fa-bolt"></i> ${c.specs.power}</div>
                    <div class="spec"><i class="fas fa-rocket"></i> ${c.specs.acceleration}</div>
                    <div class="spec"><i class="fas fa-gauge-high"></i> ${c.specs.topSpeed}</div>
                </div>
                <div class="model-actions">
                    <button class="btn-details" onclick="openCarModal('${c.id}')"><i class="fas fa-eye"></i> Detalii</button>
                    <button class="btn-favorite ${fav?'active':''}" onclick="toggleFavorite('${c.id}')"><i class="fas fa-heart"></i></button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function toggleFavorite(id) {
    appState.favoriteCars.has(id) ? appState.favoriteCars.delete(id) : appState.favoriteCars.add(id);
    document.querySelectorAll(`.btn-favorite[onclick*="${id}"]`).forEach(b => b.classList.toggle('active'));
    localStorage.setItem('motorvibe_favorites', JSON.stringify([...appState.favoriteCars]));
    showNotification(appState.favoriteCars.has(id) ? 'Adăugat la favorite' : 'Șters din favorite', 'success');
}
function loadFavorites() {
    const saved = localStorage.getItem('motorvibe_favorites');
    if (saved) appState.favoriteCars = new Set(JSON.parse(saved));
}

function openModal(id) {
    document.getElementById(id)?.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function openCarModal(id) {
    const car = CAR_DATABASE[id];
    if (!car) return;
    
    const fav = appState.favoriteCars.has(id);
    const modalBody = document.getElementById('carModalBody');
    if (!modalBody) return;
    
    modalBody.innerHTML = `
        <div class="car-modal">
            <div class="car-modal-image"><img src="${car.image}" alt="${car.title}"></div>
            <div class="car-modal-info">
                <div class="car-modal-header">
                    <div class="car-modal-brand">${car.brand}</div>
                    <h2 class="car-modal-title">${car.title}</h2>
                    <div class="car-modal-price">${car.price}</div>
                </div>
                <div class="car-modal-specs">
                    ${Object.entries(car.specs).map(([k,v]) => `
                        <div class="car-spec-item">
                            <i class="fas ${k==='power'?'fa-bolt':k==='acceleration'?'fa-rocket':k==='topSpeed'?'fa-gauge-high':'fa-info'}"></i>
                            <div class="car-spec-info"><h5>${k}</h5><span>${v}</span></div>
                        </div>`).join('')}
                </div>
                <p class="car-modal-description">${car.description}</p>
                <div class="car-modal-features">
                    <h4>Dotări</h4>
                    <div class="features-grid">
                        ${car.features.map(f => `<div class="feature-item"><i class="fas fa-check"></i> ${f}</div>`).join('')}
                    </div>
                </div>
                <div class="car-modal-actions">
                    <button class="btn btn-primary" onclick="handleTestDrive('${car.id}')"><i class="fas fa-calendar"></i> Test Drive</button>
                    <button class="btn btn-secondary btn-favorite ${fav?'active':''}" onclick="toggleFavorite('${car.id}')"><i class="fas fa-heart"></i> ${fav?'Șters din Favorite':'Adaugă la Favorite'}</button>
                </div>
            </div>
        </div>`;
    
    document.getElementById('carModal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function handleTestDrive(id) {
    showNotification(`Test drive programat pentru ${CAR_DATABASE[id].title}!`, 'success');
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
}

function setupTheme() {
    const saved = localStorage.getItem('motorvibe_theme');
    if (saved) appState.isDarkMode = saved === 'dark';
    applyTheme();
}
function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    applyTheme();
    localStorage.setItem('motorvibe_theme', appState.isDarkMode ? 'dark' : 'light');
}
function applyTheme() {
    const root = document.documentElement;
    const icon = document.querySelector('#themeToggle i');
    if (appState.isDarkMode) {
        root.style.setProperty('--dark', '#0f1419');
        root.style.setProperty('--darker', '#0a0e13');
        root.style.setProperty('--light', '#ffffff');
        if (icon) icon.className = 'fas fa-moon';
    } else {
        root.style.setProperty('--dark', '#f8f9fa');
        root.style.setProperty('--darker', '#e9ecef');
        root.style.setProperty('--light', '#212529');
        if (icon) icon.className = 'fas fa-sun';
    }
}

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
function showNotification(msg, type = 'info') {
    const n = document.createElement('div');
    n.className = `notification notification-${type}`;
    n.innerHTML = `<div class="notification-content"><i class="fas fa-${type==='success'?'check-circle':'info-circle'}"></i><span>${msg}</span></div>`;
    document.body.appendChild(n);
    setTimeout(() => n.classList.add('show'), 10);
    setTimeout(() => {
        n.classList.remove('show');
        setTimeout(() => n.remove(), 300);
    }, 3000);
}
function debounce(fn, wait) {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), wait); };
}

window.openCarModal = openCarModal;
window.toggleFavorite = toggleFavorite;
window.handleTestDrive = handleTestDrive;
window.changeHeroSlide = changeHeroSlide;