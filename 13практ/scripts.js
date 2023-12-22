// scripts.js
function updateCoordinatesDisplay(x, y) {
  const coordinatesDisplay = document.getElementById('coordinates-display');
  coordinatesDisplay.textContent = `Координаты клика: x=${x}, y=${y}`;
}

document.addEventListener('DOMContentLoaded', () => {

  document.body.addEventListener('click', positionImage);

  function positionImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    updateCoordinatesDisplay(x, y);
  }




  window.addEventListener('scroll', function () {
    const parallaxBg = document.getElementById('parallax-bg');
    const scrollPosition = window.scrollY;
    parallaxBg.style.backgroundPositionY = `-${scrollPosition * 0.5}px`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var centeredImage = document.getElementById('centered-image');
  var parallaxBg = document.getElementById('parallax-bg');
  var coordinatesDisplay = document.getElementById('coordinates-display');

  var imageSources = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

  function updateImageOnScroll() {
    var scrollTop = window.scrollY;
    var imageIndex = Math.floor(scrollTop / (parallaxBg.offsetHeight / imageSources.length));

    
    centeredImage.src = imageSources[imageIndex];
    coordinatesDisplay.innerText = `Координаты скрола: ${scrollTop}px`;
    coordinatesDisplay.style.position = 'fixed';
    coordinatesDisplay.style.bottom = '0px';
    coordinatesDisplay.style.zIndex = '200';
    coordinatesDisplay.style.color = 'red';
    coordinatesDisplay.style.fontSize = '24px';
    coordinatesDisplay.style.fontWeight = '600';
  }
  window.addEventListener('scroll', updateImageOnScroll);

  updateImageOnScroll();
});
