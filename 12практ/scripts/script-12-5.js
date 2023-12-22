let imgDiv = document.createElement('div');
let img = document.createElement('img');
let coord = document.createElement('div');
let x = document.createElement('div');
let y = document.createElement('div');

coord.style.display = 'flex';
coord.style.position = 'absolute';
coord.style.top = '40px';
coord.style.right = '40px';
coord.style.flexDirection = 'column';
coord.style.gap = "10px";
coord.style.fontFamily = 'Arial';

window.addEventListener('click', e => {
    x.textContent = e.clientX + ' по X';
    y.textContent = e.clientY + ' по Y';
})

img.src = "panda.jpg";
img.style.display = "flex";
img.style.height = "160px";
img.style.width = "200px";
img.style.borderRadius = "10px";

imgDiv.style.display = "flex";
imgDiv.style.position = "absolute";
imgDiv.style.justifyContent = "center";
imgDiv.style.alignItems = "center";
imgDiv.style.backgroundColor = 'red';
imgDiv.style.height = "400px";
imgDiv.style.width = "400px";
imgDiv.style.borderRadius = "60px";
imgDiv.style.top = "50%";
imgDiv.style.left = "50%";
imgDiv.style.transform = "translate(-50%, -50%)";


imgDiv.appendChild(img);
document.body.appendChild(imgDiv);
coord.appendChild(x);
coord.appendChild(y);
document.body.appendChild(coord);

