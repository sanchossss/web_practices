var contentsElement = document.getElementById('contents');

contentsElement.addEventListener('click', function(event) {
  var targetElement = event.target;

  // Проверяем, является ли кликнутый элемент ссылкой или находится внутри ссылки
  var isLinkClick = targetElement.tagName === 'A' || targetElement.closest('a');

  if (isLinkClick) {
    // Запрашиваем подтверждение перед переходом по ссылке
    var confirmLeave = confirm('нажми уже наконец....');
    
    // Если пользователь не хочет покидать страницу, отменяем действие по умолчанию
    if (!confirmLeave) {
      event.preventDefault();
    }
  }
});

// Пример динамической загрузки содержимого с использованием innerHTML
setTimeout(function() {
  contentsElement.innerHTML += '<p>Это рик рол честно говорю. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Сделай это</a></p>';
  contentsElement.innerHTML += '<p>Просто вомбаты <a href="https://www.youtube.com/shorts/m7e2Sv4NBpo">няшка)</a></p>';
}, 3000);

document.getElementById('gallery').addEventListener('click', function(event) {
    var targetThumbnail = event.target.closest('.thumbnail');
  
    // Проверяем, является ли кликнутый элемент уменьшенным изображением
    if (targetThumbnail) {
      // Получаем путь к уменьшенному изображению и устанавливаем его в основной блок галереи
      var thumbnailSrc = targetThumbnail.src;
      document.getElementById('mainImage').innerHTML = '<img src="' + thumbnailSrc + '" alt="Main Image">';
    }
  });

  var fileList = document.getElementById('fileList');

fileList.addEventListener('click', function(event) {
  var clickedItem = event.target;

  // Проверяем, является ли кликнутый элемент элементом списка
  if (clickedItem.tagName === 'LI') {
    // Проверяем, была ли нажата клавиша Ctrl (Cmd для Mac) в момент клика
    var isCtrlPressed = event.ctrlKey || event.metaKey;

    // Если нажата клавиша Ctrl (Cmd для Mac), переключаем выделение элемента
    if (isCtrlPressed) {
      clickedItem.classList.toggle('selected');
    } else {
      // Если не нажата клавиша Ctrl (Cmd для Mac), выделяем только этот элемент
      var allItems = fileList.getElementsByTagName('li');
      for (var i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove('selected');
      }
      clickedItem.classList.add('selected');
    }
  }
});

// Предотвращаем стандартное выделение текста при кликах
fileList.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

var slider = document.getElementById('slider');
var sliderTrack = document.getElementById('sliderTrack');
var sliderHandle = document.getElementById('sliderHandle');

var isDragging = false;

sliderHandle.addEventListener('mousedown', function(event) {
  isDragging = true;
  sliderHandle.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    var newPosition = event.clientX - slider.offsetLeft;
    var sliderWidth = slider.offsetWidth;
    newPosition = Math.max(0, Math.min(newPosition, sliderWidth));

    sliderHandle.style.left = newPosition - sliderHandle.offsetWidth / 2 + 'px';
  }
});

document.addEventListener('mouseup', function() {
  if (isDragging) {
    isDragging = false;
    sliderHandle.style.cursor = 'grab';
  }
});



var cart = document.getElementById('cart');
  var totalCost = 0;

  cart.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  cart.addEventListener('drop', function (e) {
    e.preventDefault();
    var draggedItem = document.querySelector('.dragging');

    if (draggedItem) {
      var price = parseFloat(draggedItem.getAttribute('data-price'));
      totalCost += price;

      var paragraph = document.createElement('p');
      paragraph.textContent = draggedItem.textContent + ' - $' + price;
      cart.appendChild(paragraph);

      updateCartTotal();
      draggedItem.classList.remove('dragging');
    }
  });

  document.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('item')) {
      e.target.classList.add('dragging');
    }
  });

  function updateCartTotal() {
    cart.firstChild.textContent = 'Стоимость - $' + totalCost.toFixed(2);
  }


var rotateSquare = document.getElementById('rotateSquare');
var colorChangingCircle = document.getElementById('colorChangingCircle');

// Анимация перемещения
function rotateElement() {
  var current = 0;

  function animate() {
    current += 4;
    rotateSquare.style.transform = `rotate(${current}deg)`;

    setTimeout(animate, 100);
  }

  animate();
}

// Анимация цвета
function changeColor() {
  var colors = ['#007BFF', '#28a745', '#dc3545', '#ffc107'];
  var currentColorIndex = 0;

  function animateColor() {
    colorChangingCircle.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    setTimeout(animateColor, 1000);
  }

  animateColor();
}

rotateElement();
changeColor();
