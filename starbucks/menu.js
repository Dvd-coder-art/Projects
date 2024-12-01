const menuIcon = document.getElementById('menu-icon');
const menuLista = document.getElementById('menu-lista');

// Adiciona o evento de clique no ícone
menuIcon.addEventListener('click', function() {
  // Alterna a classe "show" no menu
  menuLista.classList.toggle('show');
});