const container = document.getElementById('containerPreparar');
const slideToggleBtn = document.getElementById('slideToggle');

let isFirstState = true; // Variável para acompanhar o estado atual

slideToggleBtn.addEventListener('click', () => {
  container.classList.toggle('containerPreparar-active');
  container.classList.toggle('slide-active');

  const image = container.querySelector('img');

  // Primeiro, adiciona a classe fade-out para esconder a imagem atual
  image.classList.add('fade-out');

  // Espera o tempo da transição (0.6s) para então trocar a imagem
  setTimeout(() => {
    if (isFirstState) {
      // Altera a imagem para a "preparar 2"
      image.src = '/img/preparamento.jpg'; // Substitua pelo caminho correto da imagem "preparar 2"
    } else {
      // Restaura a imagem original
      image.src = '/img/preparo2.jpg'; // Substitua pelo caminho correto da imagem original
    }

    // Remove a classe fade-out para que a nova imagem entre com o efeito de fade-in
    image.classList.remove('fade-out');
    
    // Adiciona a classe fade-in à nova imagem para ela aparecer suavemente
    image.classList.add('fade-in');

    // Remove a classe fade-in após a transição de opacidade terminar (0.6s)
    setTimeout(() => {
      image.classList.remove('fade-in');
    }, 600); // Tempo igual à duração da transição de opacidade
  }, 600); // Atraso de 0.6s para garantir que a opacidade da imagem atual tenha tempo de mudar

  // Muda o conteúdo do texto quando o slide é ativado
  if (isFirstState) {
    container.querySelector('.texto p').innerHTML = `
      Lorem Ipsum is simply dummy text of the printing 
      <br>and typesetting industry.
    `;
  } else {
    container.querySelector('.texto p').innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br>Lorem Ipsum has been the industry';
  }
  
  isFirstState = !isFirstState; // Alterna o estado
});
