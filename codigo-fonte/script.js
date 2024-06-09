// Função de Troca de Abas
const tabs = document.querySelectorAll('.tab-button');
const listings = document.querySelectorAll('.listing-item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove a classe ativa de todas as abas
        tabs.forEach(t => t.classList.remove('active'));
        // Adiciona a classe ativa à aba clicada
        tab.classList.add('active');

        // Obtém a categoria da aba clicada
        const category = tab.getAttribute('data-tab');

        // Mostra/Esconde itens de listagem com base na categoria selecionada
        listings.forEach(listing => {
            if (listing.getAttribute('data-category') === category) {
                listing.classList.remove('hidden');
            } else {
                listing.classList.add('hidden');
            }
        });
    });
});

// Função de Busca
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    listings.forEach(listing => {
        const title = listing.querySelector('.details h3').textContent.toLowerCase();
        if (title.includes(searchText)) {
            listing.classList.remove('hidden');
        } else {
            listing.classList.add('hidden');
        }
    });
});