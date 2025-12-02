const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.search-item');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.textContent.toLowerCase();
            
            if (title.includes(term) || content.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    
    const memberCards = document.querySelectorAll('.search-item');

    searchInput.addEventListener('input', function(e) {
        const searchText = e.target.value.toLowerCase();

        memberCards.forEach(card => {
            const memberName = card.querySelector('h3').innerText.toLowerCase();

            if (memberName.includes(searchText)) {
                card.style.display = ""; 
                
                card.classList.add('aos-animate'); 
            } else {
                card.style.display = "none";
                
                card.classList.remove('aos-animate');
            }
        });
    });
});