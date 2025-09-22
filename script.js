const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 80;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Criar partículas
for(let i=0;i<particleCount;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*3+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5,
    color: `rgba(255,255,255,${Math.random()*0.5+0.3})`
  });
}

// Seguir mouse
let mouse = { x:null, y:null };
window.addEventListener('mousemove', e=>{mouse.x=e.x; mouse.y=e.y;});

// Animar partículas
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += p.dx + (mouse.x?p.x*0.001:0);
    p.y += p.dy + (mouse.y?p.y*0.001:0);

    if(p.x>canvas.width)p.x=0;
    if(p.x<0)p.x=canvas.width;
    if(p.y>canvas.height)p.y=0;
    if(p.y<0)p.y=canvas.height;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx.fillStyle=p.color;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
