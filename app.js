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
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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
        image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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
        image: 'https://images.unsplash.com/photo-1654853976163-7ecedd0dd4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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

let appState = {
    currentHeroSlide: 0,
    currentFilter: 'all',
    currentSort: 'newest',
    displayedModels: 0,
    favoriteCars: new Set(),
    isMobileMenuOpen: false,
    isDarkMode: true
};

const HTML_TEMPLATES = {
    loadingScreen: `
        <div id="loadingScreen" class="loading-screen">
            <div class="loader-content">
                <div class="loader-car">
                    <i class="fas fa-car"></i>
                </div>
                <h2>MotorVIBE</h2>
                <div class="loading-bar">
                    <div class="loading-progress"></div>
                </div>
            </div>
        </div>
    `,

    navbar: `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <i class="fas fa-car-side"></i>
                    <span>MotorVIBE</span>
                </div>
                
                <div class="nav-menu">
                    <a href="#home" class="nav-link active" data-section="home">
                        <i class="fas fa-home"></i>
                        <span>Acasă</span>
                    </a>
                    <a href="#models" class="nav-link" data-section="models">
                        <i class="fas fa-car"></i>
                        <span>Modele</span>
                    </a>
                    <a href="#brands" class="nav-link" data-section="brands">
                        <i class="fas fa-flag"></i>
                        <span>Branduri</span>
                    </a>
                    <a href="#reviews" class="nav-link" data-section="reviews">
                        <i class="fas fa-star"></i>
                        <span>Reviews</span>
                    </a>
                    <a href="#news" class="nav-link" data-section="news">
                        <i class="fas fa-newspaper"></i>
                        <span>Noutăți</span>
                    </a>
                    <a href="#contact" class="nav-link" data-section="contact">
                        <i class="fas fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </div>

                <div class="nav-actions">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Caută mașini..." id="searchInput">
                    </div>
                    <button class="theme-toggle" id="themeToggle">
                        <i class="fas fa-moon"></i>
                    </button>
                </div>

                <div class="nav-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `,

    mobileMenu: `
        <div class="mobile-menu" id="mobileMenu">
            <div class="mobile-menu-content">
                <a href="#home" class="mobile-nav-link active">
                    <i class="fas fa-home"></i>
                    <span>Acasă</span>
                </a>
                <a href="#models" class="mobile-nav-link">
                    <i class="fas fa-car"></i>
                    <span>Modele</span>
                </a>
                <a href="#brands" class="mobile-nav-link">
                    <i class="fas fa-flag"></i>
                    <span>Branduri</span>
                </a>
                <a href="#reviews" class="mobile-nav-link">
                    <i class="fas fa-star"></i>
                    <span>Reviews</span>
                </a>
                <a href="#news" class="mobile-nav-link">
                    <i class="fas fa-newspaper"></i>
                    <span>Noutăți</span>
                </a>
                <a href="#contact" class="mobile-nav-link">
                    <i class="fas fa-envelope"></i>
                    <span>Contact</span>
                </a>
            </div>
        </div>
    `,

    homeSection: `
        <section id="home" class="section active">
            <div class="hero-section">
                <div class="hero-background">
                    <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"></div>
                    <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"></div>
                    <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"></div>
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
                            <button class="btn btn-primary" id="exploreBtn">
                                <span>Explorează Colecția</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                            <button class="btn btn-secondary" id="videoBtn">
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
                    <button class="slider-btn prev" id="prevSlideBtn">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slider-btn next" id="nextSlideBtn">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    `,

    brandsSection: `
        <section id="brands" class="section">
            <div class="brands-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Branduri de Prestigiu</h2>
                        <p class="section-subtitle">Colaborăm cu cele mai exclusive manufacturi auto din lume</p>
                    </div>

                    <div class="brands-grid">
                        <div class="brand-card" data-brand="mercedes">
                            <div class="brand-logo">
                                <i class="fas fa-car"></i>
                            </div>
                            <h3>Mercedes-Benz</h3>
                            <p>Inventing Automotive Luxury</p>
                            <span class="brand-count">45 Modele</span>
                        </div>

                        <div class="brand-card" data-brand="porsche">
                            <div class="brand-logo">
                                <i class="fas fa-horse-head"></i>
                            </div>
                            <h3>Porsche</h3>
                            <p>There is no Substitute</p>
                            <span class="brand-count">32 Modele</span>
                        </div>

                        <div class="brand-card" data-brand="bmw">
                            <div class="brand-logo">
                                <i class="fas fa-car"></i>
                            </div>
                            <h3>BMW</h3>
                            <p>The Ultimate Driving Machine</p>
                            <span class="brand-count">38 Modele</span>
                        </div>

                        <div class="brand-card" data-brand="audi">
                            <div class="brand-logo">
                                <i class="fas fa-circle"></i>
                            </div>
                            <h3>Audi</h3>
                            <p>Vorsprung durch Technik</p>
                            <span class="brand-count">41 Modele</span>
                        </div>

                        <div class="brand-card" data-brand="lamborghini">
                            <div class="brand-logo">
                                <i class="fas fa-horse"></i>
                            </div>
                            <h3>Lamborghini</h3>
                            <p>Expect the Unexpected</p>
                            <span class="brand-count">18 Modele</span>
                        </div>

                        <div class="brand-card" data-brand="ferrari">
                            <div class="brand-logo">
                                <i class="fas fa-horse"></i>
                            </div>
                            <h3>Ferrari</h3>
                            <p>We are the Competition</p>
                            <span class="brand-count">22 Modele</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    modelsSection: `
        <section id="models" class="section">
            <div class="models-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Colecția Premium</h2>
                        <p class="section-subtitle">Descoperă cele mai impresionante modele din portofoliul nostru</p>
                    </div>

                    <div class="models-controls">
                        <div class="filter-tabs">
                            <button class="filter-tab active" data-filter="all">Toate Modelele</button>
                            <button class="filter-tab" data-filter="electric">Electrice</button>
                            <button class="filter-tab" data-filter="suv">SUV</button>
                            <button class="filter-tab" data-filter="sport">Sport</button>
                            <button class="filter-tab" data-filter="luxury">Luxury</button>
                            <button class="filter-tab" data-filter="hybrid">Hibride</button>
                        </div>

                        <div class="sort-controls">
                            <select id="sortSelect" class="sort-select">
                                <option value="newest">Cele mai noi</option>
                                <option value="price-high">Preț descrescător</option>
                                <option value="price-low">Preț crescător</option>
                                <option value="power">Putere</option>
                            </select>
                        </div>
                    </div>

                    <div class="models-grid" id="modelsGrid"></div>

                    <div class="load-more-container">
                        <button class="btn btn-outline" id="loadMoreBtn">
                            <span>Încarcă mai multe</span>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `,

    reviewsSection: `
        <section id="reviews" class="section">
            <div class="reviews-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Reviews & Testimoniale</h2>
                        <p class="section-subtitle">Ce spun experții și clienții noștri despre experiența MotorVIBE</p>
                    </div>

                    <div class="reviews-grid">
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-avatar">
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="reviewer-info">
                                    <h4>Alex Popescu</h4>
                                    <span>Editor Șef AutoMagazin</span>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                "MotorVIBE a redefinit modul în care percepem review-urile auto. Detaliile tehnice, 
                                fotografiile profesionale și analizele aprofundate fac din acest site o resursă 
                                indispensabilă pentru orice pasionat de mașini."
                            </p>
                            <div class="review-car">
                                <i class="fas fa-car"></i>
                                <span>Testat: Mercedes EQS 580</span>
                            </div>
                        </div>

                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-avatar">
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="reviewer-info">
                                    <h4>Maria Ionescu</h4>
                                    <span>Test Driver Profesionist</span>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                "Ca șofer profesionist, apreciez precizia și profesionalismul de la MotorVIBE. 
                                Review-urile sunt obiective, testele sunt comprehensive, iar concluziile sunt 
                                întotdeauna bine argumentate."
                            </p>
                            <div class="review-car">
                                <i class="fas fa-car"></i>
                                <span>Testat: Porsche 911 Turbo S</span>
                            </div>
                        </div>

                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-avatar">
                                    <i class="fas fa-user-circle"></i>
                                </div>
                                <div class="reviewer-info">
                                    <h4>Andrei Mihai</h4>
                                    <span>Inginer Automotive</span>
                                    <div class="rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                "Abordarea tehnică a MotorVIBE este remarcabilă. Detaliile despre motoare, 
                                transmisii și tehnologii sunt exacte și bine prezentate. O resursă valoroasă 
                                pentru cei care înțeleg inginerie auto."
                            </p>
                            <div class="review-car">
                                <i class="fas fa-car"></i>
                                <span>Testat: BMW iX M60</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    newsSection: `
        <section id="news" class="section">
            <div class="news-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Ultimele Noutăți</h2>
                        <p class="section-subtitle">Rămâi la curent cu cele mai recente dezvoltări din lumea auto</p>
                    </div>

                    <div class="news-grid">
                        <div class="news-card">
                            <div class="news-image">
                                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Electric Revolution" loading="lazy">
                            </div>
                            <div class="news-content">
                                <span class="news-category">Tehnologie</span>
                                <h3>Revoluția Electrică 2024</h3>
                                <p class="news-excerpt">
                                    Cum tehnologia bateriilor va schimba industria auto în următorii 5 ani. 
                                    Analiză detaliată a noilor tehnologii și a impactului lor.
                                </p>
                                <div class="news-meta">
                                    <span class="news-date">15 Martie 2024</span>
                                    <span class="news-read-time">5 min citire</span>
                                </div>
                            </div>
                        </div>

                        <div class="news-card">
                            <div class="news-image">
                                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Supercar Comparison" loading="lazy">
                            </div>
                            <div class="news-content">
                                <span class="news-category">Comparație</span>
                                <h3>Supercaruri 2024: Câștigătorul</h3>
                                <p class="news-excerpt">
                                    Porsche 911 Turbo S vs Lamborghini Huracán vs Ferrari Roma. 
                                    Care este alegerea noastră și de ce?
                                </p>
                                <div class="news-meta">
                                    <span class="news-date">12 Martie 2024</span>
                                    <span class="news-read-time">7 min citire</span>
                                </div>
                            </div>
                        </div>

                        <div class="news-card">
                            <div class="news-image">
                                <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury EV" loading="lazy">
                            </div>
                            <div class="news-content">
                                <span class="news-category">Review</span>
                                <h3>Mercedes EQS: Viitorul Luxului</h3>
                                <p class="news-excerpt">
                                    Test complet cu noul Mercedes EQS. Performanță, comfort și tehnologie 
                                    într-un pachet electric revolutionar.
                                </p>
                                <div class="news-meta">
                                    <span class="news-date">10 Martie 2024</span>
                                    <span class="news-read-time">6 min citire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    contactSection: `
        <section id="contact" class="section">
            <div class="contact-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Contactează-ne</h2>
                        <p class="section-subtitle">Ai întrebări sau proiecte? Suntem aici să te ajutăm</p>
                    </div>

                    <div class="contact-grid">
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="contact-details">
                                    <h4>Adresă</h4>
                                    <p>Bd. Dacia 45, Chișinău, Moldova</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-details">
                                    <h4>Telefon</h4>
                                    <p>+373 123 456 789</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="contact-details">
                                    <h4>Email</h4>
                                    <p>contact@motorvibe.md</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="contact-details">
                                    <h4>Program</h4>
                                    <p>Luni - Vineri: 9:00 - 18:00</p>
                                    <p>Sâmbătă: 10:00 - 14:00</p>
                                </div>
                            </div>
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
        </section>
    `,

    videoModal: `
        <div id="videoModal" class="modal">
            <div class="modal-content">
                <span class="close-modal" id="closeVideoModal">&times;</span>
                <div class="video-container">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Video Presentation Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    carModal: `
        <div id="carModal" class="modal">
            <div class="modal-content car-modal-content">
                <span class="close-modal" id="closeCarModal">&times;</span>
                <div id="carModalBody"></div>
            </div>
        </div>
    `,

    footer: `
        <footer class="footer">
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
                            <li><a href="#home">Acasă</a></li>
                            <li><a href="#models">Modele</a></li>
                            <li><a href="#brands">Branduri</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#news">Noutăți</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Branduri</h4>
                        <ul class="footer-links">
                            <li><a href="#mercedes">Mercedes-Benz</a></li>
                            <li><a href="#bmw">BMW</a></li>
                            <li><a href="#audi">Audi</a></li>
                            <li><a href="#porsche">Porsche</a></li>
                            <li><a href="#lamborghini">Lamborghini</a></li>
                            <li><a href="#ferrari">Ferrari</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Newsletter</h4>
                        <p>Abonează-te pentru noutăți exclusive și oferte speciale</p>
                        <form class="newsletter-form" id="newsletterForm">
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
        </footer>
    `
};

document.addEventListener('DOMContentLoaded', function() {
    if (document.body.children.length === 0 || document.body.innerHTML.trim() === '') {
        buildPageStructure();
    }
    initializeApp();
});

function buildPageStructure() {
    if (document.body.children.length > 0) return;
    
    const pageStructure = `
        ${HTML_TEMPLATES.loadingScreen}
        ${HTML_TEMPLATES.navbar}
        ${HTML_TEMPLATES.mobileMenu}
        ${HTML_TEMPLATES.homeSection}
        ${HTML_TEMPLATES.brandsSection}
        ${HTML_TEMPLATES.modelsSection}
        ${HTML_TEMPLATES.reviewsSection}
        ${HTML_TEMPLATES.newsSection}
        ${HTML_TEMPLATES.contactSection}
        ${HTML_TEMPLATES.videoModal}
        ${HTML_TEMPLATES.carModal}
        ${HTML_TEMPLATES.footer}
    `;
    
    document.body.innerHTML = pageStructure;
}

function initializeApp() {
    setTimeout(() => {
        showLoadingScreen();
        initializeEventListeners();
        initializeHeroSlider();
        loadInitialModels();
        initializeTheme();
        initializeCustomButtons();
        
        setTimeout(() => {
            hideLoadingScreen();
        }, CONFIG.loadingDelay);
    }, 100);
}

function initializeCustomButtons() {
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => scrollToSection('models'));
    }
    
    const videoBtn = document.getElementById('videoBtn');
    if (videoBtn) {
        videoBtn.addEventListener('click', openVideoModal);
    }
    
    const prevSlideBtn = document.getElementById('prevSlideBtn');
    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => changeHeroSlide(-1));
    }
    
    const nextSlideBtn = document.getElementById('nextSlideBtn');
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => changeHeroSlide(1));
    }
    
    const closeVideoModal = document.getElementById('closeVideoModal');
    if (closeVideoModal) {
        closeVideoModal.addEventListener('click', closeVideoModal);
    }
    
    const closeCarModal = document.getElementById('closeCarModal');
    if (closeCarModal) {
        closeCarModal.addEventListener('click', closeCarModal);
    }
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
}

function initializeEventListeners() {
    setupNavigation();
    setupSearch();
    setupFilters();
    setupMobileMenu();
    setupThemeToggle();
    setupForms();
    setupScrollEvents();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (!href) return;
            
            const targetSection = href.substring(1);
            
            updateActiveNavigation(this);
            
            showSection(targetSection);
            
            if (appState.isMobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce(function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterAndDisplayModels(searchTerm);
    }, CONFIG.searchDebounceDelay));
}

function setupFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            if (!filter) return;
            
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            appState.currentFilter = filter;
            filterAndDisplayModels();
        });
    });
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            appState.currentSort = this.value;
            filterAndDisplayModels();
        });
    }
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreModels);
    }
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!hamburger || !mobileMenu) return;
    
    hamburger.addEventListener('click', toggleMobileMenu);
    
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
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function setupForms() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function setupScrollEvents() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            scrollToSection('brands');
        });
    }
    
    window.addEventListener('scroll', throttle(handleScroll, 100));
}

function updateActiveNavigation(activeLink) {
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => link.classList.remove('active'));
    
    const allMobileLinks = document.querySelectorAll('.mobile-nav-link');
    allMobileLinks.forEach(link => link.classList.remove('active'));
    
    activeLink.classList.add('active');
    
    const href = activeLink.getAttribute('href');
    if (href) {
        const correspondingLink = document.querySelector(`[href="${href}"]:not(.${activeLink.classList[0]})`);
        if (correspondingLink) {
            correspondingLink.classList.add('active');
        }
    }
}

function showSection(sectionId) {
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => section.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
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

function initializeHeroSlider() {
    setInterval(() => {
        changeHeroSlide(1);
    }, CONFIG.heroSlideInterval);
}

function changeHeroSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    const totalSlides = slides.length;
    
    let newIndex = appState.currentHeroSlide + direction;
    
    if (newIndex >= totalSlides) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = totalSlides - 1;
    }
    
    slides[appState.currentHeroSlide].classList.remove('active');
    slides[newIndex].classList.add('active');
    
    appState.currentHeroSlide = newIndex;
}

function loadInitialModels() {
    appState.displayedModels = CONFIG.modelsPerLoad;
    filterAndDisplayModels();
}

function loadMoreModels() {
    appState.displayedModels += CONFIG.modelsPerLoad;
    filterAndDisplayModels();
    
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
    
    let cars = getFilteredCars(searchTerm);
    cars = getSortedCars(cars);
    
    const carsToShow = cars.slice(0, appState.displayedModels);
    
    displayModels(carsToShow, modelsGrid);
    
    updateLoadMoreButton(cars.length);
}

function getFilteredCars(searchTerm) {
    return Object.values(CAR_DATABASE).filter(car => {
        const categoryMatch = appState.currentFilter === 'all' || 
                            (car.category && car.category.includes(appState.currentFilter));
        
        const searchMatch = !searchTerm || 
                           (car.title && car.title.toLowerCase().includes(searchTerm)) ||
                           (car.brand && car.brand.toLowerCase().includes(searchTerm)) ||
                           (car.description && car.description.toLowerCase().includes(searchTerm));
        
        return categoryMatch && searchMatch;
    });
}

function getSortedCars(cars) {
    switch (appState.currentSort) {
        case 'price-high':
            return [...cars].sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^\d.]/g, '')) || 0;
                const priceB = parseFloat(b.price.replace(/[^\d.]/g, '')) || 0;
                return priceB - priceA;
            });
        case 'price-low':
            return [...cars].sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[^\d.]/g, '')) || 0;
                const priceB = parseFloat(b.price.replace(/[^\d.]/g, '')) || 0;
                return priceA - priceB;
            });
        case 'power':
            return [...cars].sort((a, b) => {
                const powerA = parseFloat(a.specs?.power) || 0;
                const powerB = parseFloat(b.specs?.power) || 0;
                return powerB - powerA;
            });
        case 'newest':
        default:
            return cars;
    }
}

function displayModels(cars, container) {
    if (!container) return;
    
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
    
    attachModelCardEvents();
}

function createModelCard(car) {
    if (!car) return '';
    
    const badgeType = getBadgeType(car.category || []);
    const isFavorite = appState.favoriteCars.has(car.id);
    
    const specs = car.specs || {};
    
    return `
        <div class="model-card" data-car-id="${car.id}">
            <div class="model-image">
                <img src="${car.image || ''}" alt="${car.title || 'Car'}" loading="lazy">
                <div class="model-badge ${badgeType}">
                    <i class="fas ${getBadgeIcon(car.category || [])}"></i>
                    ${getBadgeText(car.category || [])}
                </div>
            </div>
            <div class="model-info">
                <div class="model-header">
                    <span class="model-brand">${car.brand || ''}</span>
                    <div class="model-price">${car.price || ''}</div>
                </div>
                <h3 class="model-name">${car.title || ''}</h3>
                <p class="model-description">${car.description || ''}</p>
                
                <div class="model-specs">
                    <div class="spec">
                        <i class="fas fa-bolt"></i>
                        <span>${specs.power || 'N/A'}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${specs.acceleration || 'N/A'}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-gauge-high"></i>
                        <span>${specs.topSpeed || 'N/A'}</span>
                    </div>
                </div>
                
                <div class="model-actions">
                    <button class="btn-details" data-car-id="${car.id}">
                        <i class="fas fa-eye"></i>
                        Vezi Detalii
                    </button>
                    <button class="btn-favorite ${isFavorite ? 'active' : ''}" data-car-id="${car.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function attachModelCardEvents() {
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach(card => {
        const detailsBtn = card.querySelector('.btn-details');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const carId = this.getAttribute('data-car-id');
                if (carId) openCarModal(carId);
            });
        }
        
        const favoriteBtn = card.querySelector('.btn-favorite');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const carId = this.getAttribute('data-car-id');
                if (carId) toggleFavorite(carId);
            });
        }
        
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn-details') && !e.target.closest('.btn-favorite')) {
                const carId = this.getAttribute('data-car-id');
                if (carId) openCarModal(carId);
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

function toggleFavorite(carId) {
    if (!carId) return;
    
    if (appState.favoriteCars.has(carId)) {
        appState.favoriteCars.delete(carId);
    } else {
        appState.favoriteCars.add(carId);
    }
    
    const favoriteBtns = document.querySelectorAll(`.btn-favorite[data-car-id="${carId}"]`);
    favoriteBtns.forEach(btn => {
        btn.classList.toggle('active');
    });
    
    saveFavorites();
}

function saveFavorites() {
    try {
        localStorage.setItem('motorvibe_favorites', JSON.stringify([...appState.favoriteCars]));
    } catch (e) {
        console.error('Failed to save favorites:', e);
    }
}

function loadFavorites() {
    try {
        const saved = localStorage.getItem('motorvibe_favorites');
        if (saved) {
            appState.favoriteCars = new Set(JSON.parse(saved));
        }
    } catch (e) {
        console.error('Failed to load favorites:', e);
    }
}

function openVideoModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openCarModal(carId) {
    const car = CAR_DATABASE[carId];
    if (!car) return;
    
    const modalBody = document.getElementById('carModalBody');
    if (!modalBody) return;
    
    modalBody.innerHTML = createCarModalContent(car);
    
    const modal = document.getElementById('carModal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    const favoriteBtn = modalBody.querySelector('.btn-favorite');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            const carId = this.getAttribute('data-car-id');
            if (carId) {
                toggleFavorite(carId);
                const isFavorite = appState.favoriteCars.has(carId);
                this.innerHTML = `<i class="fas fa-heart"></i> ${isFavorite ? 'Șters din Favorite' : 'Adaugă la Favorite'}`;
            }
        });
    }
    
    const testDriveBtn = modalBody.querySelector('.btn-primary');
    if (testDriveBtn) {
        testDriveBtn.addEventListener('click', function() {
            const carId = this.getAttribute('data-car-id');
            if (carId) handleTestDrive(carId);
        });
    }
}

function closeCarModal() {
    const modal = document.getElementById('carModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function createCarModalContent(car) {
    if (!car) return '';
    
    const isFavorite = appState.favoriteCars.has(car.id);
    const specs = car.specs || {};
    const features = car.features || [];
    
    return `
        <div class="car-modal">
            <div class="car-modal-image">
                <img src="${car.image || ''}" alt="${car.title || ''}">
            </div>
            <div class="car-modal-info">
                <div class="car-modal-header">
                    <div class="car-modal-brand">${car.brand || ''}</div>
                    <h2 class="car-modal-title">${car.title || ''}</h2>
                    <div class="car-modal-price">${car.price || ''}</div>
                </div>
                
                <div class="car-modal-specs">
                    ${Object.entries(specs).map(([key, value]) => `
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
                    <p>${car.description || ''}</p>
                </div>
                
                <div class="car-modal-features">
                    <h4>Dotări și Tehnologii</h4>
                    <div class="features-grid">
                        ${features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="car-modal-actions">
                    <button class="btn btn-primary" data-car-id="${car.id}">
                        <i class="fas fa-calendar"></i>
                        Programează Test Drive
                    </button>
                    <button class="btn btn-secondary btn-favorite ${isFavorite ? 'active' : ''}" data-car-id="${car.id}">
                        <i class="fas fa-heart"></i>
                        ${isFavorite ? 'Șters din Favorite' : 'Adaugă la Favorite'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

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
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    const root = document.documentElement;
    
    if (appState.isDarkMode) {
        root.style.setProperty('--dark', '#0f1419');
        root.style.setProperty('--darker', '#0a0e13');
        root.style.setProperty('--light', '#ffffff');
        icon.className = 'fas fa-moon';
    } else {
        root.style.setProperty('--dark', '#f8f9fa');
        root.style.setProperty('--darker', '#e9ecef');
        root.style.setProperty('--light', '#212529');
        icon.className = 'fas fa-sun';
    }
    
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
}

function saveTheme() {
    try {
        localStorage.setItem('motorvibe_theme', appState.isDarkMode ? 'dark' : 'light');
    } catch (e) {
        console.error('Failed to save theme:', e);
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.nav-hamburger');
    
    if (!mobileMenu || !hamburger) return;
    
    appState.isMobileMenuOpen = !appState.isMobileMenuOpen;
    mobileMenu.classList.toggle('active');
    
    const spans = hamburger.querySelectorAll('span');
    if (spans.length >= 3) {
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
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    showNotification('Mesajul tău a fost trimis cu succes!', 'success');
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    showNotification('Te-ai abonat cu succes la newsletter!', 'success');
    e.target.reset();
}

function handleTestDrive(carId) {
    const car = CAR_DATABASE[carId];
    if (!car) return;
    
    showNotification(`Test drive programat pentru ${car.title}! Vei fi contactat în curând.`, 'success');
    closeCarModal();
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

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
    if (!categories) return 'sport';
    if (categories.includes('electric')) return 'electric';
    if (categories.includes('sport')) return 'sport';
    if (categories.includes('luxury')) return 'luxury';
    if (categories.includes('suv')) return 'suv';
    if (categories.includes('hybrid')) return 'hybrid';
    return 'sport';
}

function getBadgeIcon(categories) {
    if (!categories) return 'fa-car';
    if (categories.includes('electric')) return 'fa-bolt';
    if (categories.includes('sport')) return 'fa-tachometer-alt';
    if (categories.includes('luxury')) return 'fa-crown';
    if (categories.includes('suv')) return 'fa-mountain';
    if (categories.includes('hybrid')) return 'fa-leaf';
    return 'fa-car';
}

function getBadgeText(categories) {
    if (!categories) return 'Premium';
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
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

loadFavorites();

window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    showNotification('A apărut o eroare. Încarcă din nou pagina.', 'error');
});

window.scrollToSection = scrollToSection;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openCarModal = openCarModal;
window.closeCarModal = closeCarModal;
window.toggleFavorite = toggleFavorite;
window.handleTestDrive = handleTestDrive;
window.changeHeroSlide = changeHeroSlide;