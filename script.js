document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.topnav a');
    const sections = document.querySelectorAll('.section');
    const searchInput = document.querySelector('.topnav input[type="text"]');
    const masiniCards = document.querySelectorAll('.masina-card');
    const modal = document.getElementById('carModal');
    const closeBtn = document.querySelector('.close');
    const modalBody = document.getElementById('modalBody');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            const target = this.getAttribute('href');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.querySelector(target).classList.add('active');
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchValue = this.value.toLowerCase();
                if(searchValue.trim() !== '') {
                    masiniCards.forEach(card => {
                        const marca = card.querySelector('.categorie').textContent.toLowerCase();
                        const titlu = card.querySelector('h3').textContent.toLowerCase();
                        
                        if (marca.includes(searchValue) || titlu.includes(searchValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                } else {
                    masiniCards.forEach(card => {
                        card.style.display = 'block';
                    });
                }
            }
        });
    }
    
    masiniCards.forEach(card => {
        card.addEventListener('click', function() {
            const marca = this.querySelector('.categorie').textContent;
            const titlu = this.querySelector('h3').textContent;
            const autor = this.querySelector('.autor').textContent;
            
            const carDetails = {
                'Mercedes': {pret: '150.000€', motor: '3.0L V6', cai: '435 CP'},
                'Porsche': {pret: '200.000€', motor: '3.7L Flat-6', cai: '640 CP'},
                'Audi': {pret: '120.000€', motor: 'Electric', cai: '590 CP'},
                'BMW': {pret: '140.000€', motor: '4.4L V8', cai: '530 CP'}
            };
            
            const detalii = carDetails[marca] || {pret: 'Necunoscut', motor: 'Necunoscut', cai: 'Necunoscut'};
            
            modalBody.innerHTML = `
                <h2>${marca} - ${titlu}</h2>
                <p><strong>Autor:</strong> ${autor}</p>
                <p><strong>Preț:</strong> ${detalii.pret}</p>
                <p><strong>Motor:</strong> ${detalii.motor}</p>
                <p><strong>Putere:</strong> ${detalii.cai}</p>
            `;
            modal.style.display = 'block';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 

// ---- PAGINARE ----
const masiniPerPage = 5;
const cards = document.querySelectorAll('.masina-card');
const pagination = document.querySelector('.pagination');

let currentPage = 1;
const totalPages = Math.ceil(cards.length / masiniPerPage);

function showPage(page) {
  const start = (page - 1) * masiniPerPage;
  const end = start + masiniPerPage;

  cards.forEach((card, index) => {
    if (index >= start && index < end) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.pagination button[data-page="${page}"]`).classList.add('active');
}

function createPagination() {
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '« Prev';
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.setAttribute('data-page', i);
    btn.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });
    pagination.appendChild(btn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next »';
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });
  pagination.appendChild(nextBtn);
}

createPagination();
showPage(currentPage);
    