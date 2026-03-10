const cars = [
    {
        id: 1,
        name: 'Range Rover',
        brand: 'Range Rover',
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
        name: 'Lamborgini',
        brand: 'Lamborgini',
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
        name: 'Bugati',
        brand: 'Bugati',
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
        name: 'BMW',
        brand: 'BMW',
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
        name: 'BMW',
        brand: 'BMW',
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
        id: 8,
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

const heroSearchInput = document.getElementById('heroSearchInput');
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

    if (heroSearchInput) {
        heroSearchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();

            currentSearchTerm = term;
            currentPage = 1;

            renderCars();
            updateLoadMoreButton();
            updateSearchInfo();

            localStorage.setItem('lastSearch', term);
        });
    }

    if (searchReset) {
        searchReset.addEventListener('click', clearSearch);
    }

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderCars(true);
        updateLoadMoreButton();
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Mesajul a fost trimis cu succes!', 'success');
        contactForm.reset();
    });

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

}

function clearSearch() {

    currentSearchTerm = '';
    currentPage = 1;

    if (heroSearchInput) heroSearchInput.value = '';

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

            const text = `
                ${car.name}
                ${car.brand}
                ${car.description}
                ${car.tags.join(' ')}
                ${Object.values(car.specs).join(' ')}
                ${car.features.join(' ')}
            `.toLowerCase();

            return text.includes(currentSearchTerm);
        });
    }

    return filtered;
}

function renderCars(append = false) {

    const filteredCars = filterCars();
    const carsToShow = filteredCars.slice(0, currentPage * carsPerPage);

    if (filteredCars.length === 0) {
        noResults.style.display = 'block';
        carsGrid.style.display = 'none';
        loadMoreBtn.style.display = 'none';
        return;
    }

    noResults.style.display = 'none';
    carsGrid.style.display = 'grid';

    const html = carsToShow.map(car => `
        <div class="car-card" onclick="showCarDetails(${car.id})">
            <img src="${car.image}" class="car-image">
            <div class="car-content">
                <div class="car-brand">${car.brand}</div>
                <h3 class="car-title">${car.name}</h3>
                <div class="car-price">€${car.price.toLocaleString()}</div>
                <div class="car-specs">
                    <span>${car.specs.power}</span>
                    <span>${car.specs.acceleration}</span>
                </div>
            </div>
        </div>
    `).join('');

    if (append) {
        carsGrid.innerHTML += html;
    } else {
        carsGrid.innerHTML = html;
    }

}

function updateLoadMoreButton() {

    const filteredCars = filterCars();

    const hasMore = currentPage * carsPerPage < filteredCars.length;

    loadMoreBtn.style.display = hasMore ? 'inline-block' : 'none';
}

function updateSearchInfo() {

    const count = filterCars().length;

    if (currentSearchTerm) {

        searchResultsCount.textContent =
            `${count} mașini găsite pentru "${currentSearchTerm}"`;

        searchInfo.style.display = 'flex';
        searchReset.style.display = 'flex';

    } else {

        searchInfo.style.display =
            currentFilter !== 'all' ? 'flex' : 'none';

        searchReset.style.display = 'none';
    }

}

function showCarDetails(id) {

    currentCar = cars.find(c => c.id === id);

    modalBody.innerHTML = `
        <img src="${currentCar.image}" class="modal-image">

        <h2>${currentCar.name}</h2>

        <p>${currentCar.description}</p>

        <button class="btn btn-primary" onclick="handleTestDrive()">
            Programează test drive
        </button>
    `;

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function handleTestDrive() {

    showNotification(
        `Test drive programat pentru ${currentCar.name}!`,
        'success'
    );

    closeModal();
}

function showNotification(message, type = 'info') {

    const notification = document.createElement('div');

    notification.className = `notification notification-${type}`;

    notification.innerHTML = message;

    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

window.showCarDetails = showCarDetails;
window.handleTestDrive = handleTestDrive;

if (heroSearchInput) {
    heroSearchInput.value = localStorage.getItem('lastSearch') || '';
}