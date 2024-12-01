function imgSlider(anything) {
  document.querySelector('.starbucks').src = anything;
}

function colorCircle(color) {
  const circle = document.querySelector('.circle');
  
  
  circle.style.backgroundColor = color;
  

  circle.style.animation = 'none'; 
  requestAnimationFrame(() => {
    circle.style.animation = 'circleEffect 1s ease-in-out forwards';
  });
}

function colorSabor(color) {
  const sabores = document.querySelectorAll('.sabores');
  
 // Itera sobre os elementos e aplica a cor
 sabores.forEach(function(sabor){
   sabor.style.color = color;

 });

}
