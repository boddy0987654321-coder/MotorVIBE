const cars = [
    {
        id: 1,
        name: 'Mercedes EQS',
        brand: 'Mercedes-Benz',
        price: 120000,
        category: 'electric',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format',
        specs: {
            power: '516 CP',
            acceleration: '4.3s',
            topSpeed: '210 km/h',
            range: '770 km'
        },
        features: ['Hyperscreen', 'Air Suspension', 'Massage Seats', 'Panoramic Roof'],
        description: 'Luxosul electric Mercedes EQS combină tehnologia de vârf cu confortul suprem.',
        tags: ['mercedes', 'eqs', 'electric', 'luxury', 'sedan']
    },
    {
        id: 2,
        name: 'Porsche 911 Turbo S',
        brand: 'Porsche',
        price: 220000,
        category: 'sport',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format',
        specs: {
            power: '650 CP',
            acceleration: '2.7s',
            topSpeed: '330 km/h',
            engine: '3.8L Biturbo'
        },
        features: ['Sport Chrono', 'Ceramic Brakes', 'Rear Axle Steering', 'Sports Exhaust'],
        description: 'Legendarul Porsche 911 Turbo S oferă performanțe extraordinare și plăcere pură la condus.',
        tags: ['porsche', '911', 'turbo', 'sport', 'supercar']
    },
    {
        id: 3,
        name: 'BMW iX',
        brand: 'BMW',
        price: 95000,
        category: 'electric',
        image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&auto=format',
        specs: {
            power: '523 CP',
            acceleration: '4.6s',
            topSpeed: '200 km/h',
            range: '630 km'
        },
        features: ['Bowers & Wilkins', 'Laser Lights', 'Panoramic Roof', 'Driving Assistant'],
        description: 'BMW iX redefinește conceptul de SUV electric premium.',
        tags: ['bmw', 'ix', 'electric', 'suv']
    },
    {
        id: 4,
        name: 'Audi RS e-tron GT',
        brand: 'Audi',
        price: 145000,
        category: 'electric',
        image: 'https://images.unsplash.com/photo-1654853976163-7ecedd0dd4d3?w=600&auto=format',
        specs: {
            power: '637 CP',
            acceleration: '3.1s',
            topSpeed: '250 km/h',
            range: '472 km'
        },
        features: ['Matrix LED', 'Bang & Olufsen', 'Carbon Package', 'Air Suspension'],
        description: 'Audi RS e-tron GT este un Gran Turismo electric cu performanțe de excepție.',
        tags: ['audi', 'etron', 'rs', 'electric', 'gt']
    },
    {
        id: 5,
        name: 'Lamborghini Huracán',
        brand: 'Lamborghini',
        price: 280000,
        category: 'sport',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&auto=format',
        specs: {
            power: '640 CP',
            acceleration: '2.9s',
            topSpeed: '325 km/h',
            engine: '5.2L V10'
        },
        features: ['LDVI System', 'Carbon Ceramic', 'Alcantara', 'Lift System'],
        description: 'Lamborghini Huracán aduce pasiunea italiană la cel mai înalt nivel.',
        tags: ['lamborghini', 'huracan', 'v10', 'sport', 'supercar']
    },
    {
        id: 6,
        name: 'Ferrari Roma',
        brand: 'Ferrari',
        price: 250000,
        category: 'sport',
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&auto=format',
        specs: {
            power: '620 CP',
            acceleration: '3.4s',
            topSpeed: '320 km/h',
            engine: '3.9L V8'
        },
        features: ['Manettino', 'Carbon Fiber', 'JBL Sound', 'Driver Assist'],
        description: 'Ferrari Roma combină eleganța italiană cu performanța de excepție.',
        tags: ['ferrari', 'roma', 'v8', 'sport', 'gt']
    },
    {
        id: 7,
        name: 'Range Rover Sport',
        brand: 'Land Rover',
        price: 110000,
        category: 'suv',
        image: 'https://images.unsplash.com/photo-1606664518155-9b9c1c3b6b4c?w=600&auto=format',
        specs: {
            power: '530 CP',
            acceleration: '4.5s',
            topSpeed: '250 km/h',
            engine: '4.4L V8'
        },
        features: ['Terrain Response', 'Air Suspension', 'Meridian Sound', 'Panoramic Roof'],
        description: 'Range Rover Sport oferă un perfect echilibru între lux și capacitate off-road.',
        tags: ['range rover', 'sport', 'suv', 'v8', 'luxury']
    },
    {
        id: 8,
        name: 'Bentley Continental GT',
        brand: 'Bentley',
        price: 230000,
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format',
        specs: {
            power: '659 CP',
            acceleration: '3.5s',
            topSpeed: '335 km/h',
            engine: '6.0L W12'
        },
        features: ['Naim Sound', 'Diamond Quilting', 'Flying B', 'Rotating Display'],
        description: 'Bentley Continental GT reprezintă apogeul luxury-ului britanic.',
        tags: ['bentley', 'continental', 'w12', 'luxury', 'gt']
    },
    {
        id: 9,
        name: 'Tesla Model S',
        brand: 'Tesla',
        price: 90000,
        category: 'electric',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&auto=format',
        specs: {
            power: '1020 CP',
            acceleration: '1.99s',
            topSpeed: '322 km/h',
            range: '600 km'
        },
        features: ['Autopilot', '17" Display', 'Glass Roof', 'Gaming Computer'],
        description: 'Tesla Model S Plaid redefinește limitele performanței electrice.',
        tags: ['tesla', 'model s', 'plaid', 'electric', 'sport']
    }
];

let currentFilter = 'all';
let currentPage = 1;
let currentSearchTerm = '';
const carsPerPage = 6;
let currentCar = null;

const carsGrid = document.getElementById('carsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const modal = document.getElementById('carModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');
const contactForm = document.getElementById('contactForm');

const searchInput = document.getElementById('searchInput');
const heroSearchInput = document.getElementById('heroSearchInput');
const searchClear = document.getElementById('searchClear');
const searchInfo = document.getElementById('searchInfo');
const searchResultsCount = document.getElementById('searchResultsCount');
const searchReset = document.getElementById('searchReset');
const noResults = document.getElementById('noResults');

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
    updateSearchInfo();
});

function initApp() {
    renderCars();
    updateLoadMoreButton();
}

function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            currentPage = 1;
            renderCars();
            updateLoadMoreButton();
            updateSearchInfo();
        });
    });

    [searchInput, heroSearchInput].forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase().trim();
                currentSearchTerm = term;
                currentPage = 1;
                
                if (e.target === searchInput && heroSearchInput) {
                    heroSearchInput.value = term;
                } else if (e.target === heroSearchInput && searchInput) {
                    searchInput.value = term;
                }
                
                if (searchClear) {
                    searchClear.classList.toggle('visible', term.length > 0);
                }
                
                renderCars();
                updateLoadMoreButton();
                updateSearchInfo();
            });
        }
    });

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            clearSearch();
        });
    }

    if (searchReset) {
        searchReset.addEventListener('click', () => {
            clearSearch();
        });
    }

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderCars(true);
        updateLoadMoreButton();
        
        setTimeout(() => {
            const lastCard = document.querySelector('.car-card:last-child');
            if (lastCard) {
                lastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Mesajul a fost trimis cu succes!', 'success');
        contactForm.reset();
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function clearSearch() {
    currentSearchTerm = '';
    currentPage = 1;
    
    if (searchInput) searchInput.value = '';
    if (heroSearchInput) heroSearchInput.value = '';
    if (searchClear) searchClear.classList.remove('visible');
    
    renderCars();
    updateLoadMoreButton();
    updateSearchInfo();
}

function filterCars() {
    let filtered = [...cars];
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(car => car.category === currentFilter);
    }
    
    if (currentSearchTerm) {
        filtered = filtered.filter(car => {
            const searchableText = `
                ${car.name} 
                ${car.brand} 
                ${car.description} 
                ${car.tags.join(' ')} 
                ${Object.values(car.specs).join(' ')}
                ${car.features.join(' ')}
            `.toLowerCase();
            
            return searchableText.includes(currentSearchTerm);
        });
    }
    
    return filtered;
}

function renderCars(append = false) {
    const filteredCars = filterCars();
    const start = 0;
    const end = currentPage * carsPerPage;
    const carsToShow = filteredCars.slice(start, end);

    if (filteredCars.length === 0) {
        noResults.style.display = 'block';
        carsGrid.style.display = 'none';
        loadMoreBtn.style.display = 'none';
        return;
    } else {
        noResults.style.display = 'none';
        carsGrid.style.display = 'grid';
    }

    const carsHTML = carsToShow.map(car => {
        let name = car.name;
        let brand = car.brand;
        
        if (currentSearchTerm) {
            name = highlightText(name, currentSearchTerm);
            brand = highlightText(brand, currentSearchTerm);
        }
        
        return `
            <div class="car-card" onclick="showCarDetails(${car.id})">
                <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
                <div class="car-content">
                    <div class="car-brand">${brand}</div>
                    <h3 class="car-title">${name}</h3>
                    <div class="car-price">€${car.price.toLocaleString()}</div>
                    <div class="car-specs">
                        <span><i class="fas fa-bolt"></i> ${car.specs.power}</span>
                        <span><i class="fas fa-rocket"></i> ${car.specs.acceleration}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (append) {
        carsGrid.innerHTML += carsHTML;
    } else {
        carsGrid.innerHTML = carsHTML;
    }
}

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function updateLoadMoreButton() {
    const filteredCars = filterCars();
    const hasMore = currentPage * carsPerPage < filteredCars.length;
    loadMoreBtn.style.display = hasMore ? 'inline-block' : 'none';
}

function updateSearchInfo() {
    const filteredCars = filterCars();
    const count = filteredCars.length;
    
    if (currentSearchTerm) {
        searchResultsCount.textContent = `${count} mașin${count === 1 ? 'ă' : 'i'} găsit${count === 1 ? 'ă' : 'e'} pentru "${currentSearchTerm}"`;
        searchReset.style.display = 'flex';
        searchInfo.style.display = 'flex';
    } else {
        searchResultsCount.textContent = `${count} mașini disponibile`;
        searchReset.style.display = 'none';
        
        if (currentFilter !== 'all') {
            searchInfo.style.display = 'flex';
        } else {
            searchInfo.style.display = 'none';
        }
    }
}

function showCarDetails(carId) {
    currentCar = cars.find(c => c.id === carId);
    if (!currentCar) return;

    const specsHTML = Object.entries(currentCar.specs).map(([key, value]) => `
        <div class="modal-spec">
            <i class="fas fa-${getSpecIcon(key)}"></i>
            <div>
                <small>${formatSpecLabel(key)}</small>
                <strong>${value}</strong>
            </div>
        </div>
    `).join('');

    const featuresHTML = currentCar.features.map(feature => `
        <div class="feature-item">
            <i class="fas fa-check-circle"></i>
            <span>${feature}</span>
        </div>
    `).join('');

    modalBody.innerHTML = `
        <img src="${currentCar.image}" alt="${currentCar.name}" class="modal-image">
        <div class="modal-brand">${currentCar.brand}</div>
        <h2 class="modal-title">${currentCar.name}</h2>
        <div class="modal-price">€${currentCar.price.toLocaleString()}</div>
        
        <div class="modal-specs">
            ${specsHTML}
        </div>
        
        <p class="modal-description">${currentCar.description}</p>
        
        <div class="modal-features">
            <h4>Dotări principale</h4>
            <div class="features-list">
                ${featuresHTML}
            </div>
        </div>
        
        <button class="btn btn-primary" onclick="handleTestDrive()">
            <i class="fas fa-calendar-check"></i>
            Programează test drive
        </button>
    `;

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function handleTestDrive() {
    if (currentCar) {
        showNotification(`Test drive programat pentru ${currentCar.name}! Te vom contacta în curând.`, 'success');
        closeModal();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getSpecIcon(specKey) {
    const icons = {
        power: 'bolt',
        acceleration: 'rocket',
        topSpeed: 'gauge-high',
        range: 'road',
        engine: 'engine',
        battery: 'battery-full'
    };
    return icons[specKey] || 'info-circle';
}

function formatSpecLabel(key) {
    const labels = {
        power: 'Putere',
        acceleration: '0-100 km/h',
        topSpeed: 'Viteză max',
        range: 'Autonomie',
        engine: 'Motor',
        battery: 'Baterie'
    };
    return labels[key] || key;
}

const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--dark);
        color: var(--light);
        padding: 15px 20px;
        border-radius: var(--radius);
        border-left: 4px solid var(--primary);
        box-shadow: var(--shadow-lg);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left-color: #00b894;
    }
    
    .notification-success i {
        color: #00b894;
    }
    
    .highlight {
        background: var(--primary);
        color: var(--light);
        padding: 2px 4px;
        border-radius: 4px;
    }
`;
document.head.appendChild(style);

window.showCarDetails = showCarDetails;
window.handleTestDrive = handleTestDrive;

// La încărcare - RESTAUREAZĂ
document.getElementById('searchInput').value = localStorage.getItem('lastSearch') || '';

// La căutare - SALVEAZĂ
document.getElementById('searchInput').addEventListener('input', function() {
    localStorage.setItem('lastSearch', this.value);
});