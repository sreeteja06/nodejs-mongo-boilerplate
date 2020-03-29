/* eslint-disable no-undef */
document.addEventListener('mousemove', function(e) {
  const body = document.querySelector('body');
  const circle = document.createElement('span');
  const x = e.offsetX;
  const y = e.offsetY;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  const size = Math.random() * 100;
  circle.style.width = `${20 + size}px`;
  circle.style.height = `${20 + size}px`;
  body.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 1800);
});
