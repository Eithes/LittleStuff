function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateX(${e.clientX*speed/50}px)`;
  });
}

document.addEventListener('mousemove', parallax);