const canvas = document.getElementById('rainy-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
function animate() {
    // Borra el canvas
    const rainDrops = [
        { x: 100, y: 0, length: 10, speed: 5 },
        { x: 200, y: 0, length: 15, speed: 7 },
        // etc.
    ];
      

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Dibuja las gotas de lluvia
    for (let i = 0; i < rainDrops.length; i++) {
      const rainDrop = rainDrops[i];
      ctx.beginPath();
      ctx.moveTo(rainDrop.x, rainDrop.y);
      ctx.lineTo(rainDrop.x + rainDrop.length, rainDrop.y + rainDrop.length);
      ctx.stroke();
    }
  
    // Mueve las gotas de lluvia hacia abajo
    for (let i = 0; i < rainDrops.length; i++) {
      const rainDrop = rainDrops[i];
      rainDrop.y += rainDrop.speed;
    }
  
    // Vuelve a llamar a la función animate en el siguiente frame
    requestAnimationFrame(animate);
  }
  function init() {
    // Crea las gotas de lluvia
    for (let i = 0; i < 100; i++) {
      const rainDrop = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 10 + 5,
        speed: Math.random() + 0.5,
      };
      rainDrops.push(rainDrop);
    }
  }
  
  // Inicia la animación
  animate();
  init();
