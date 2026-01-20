// Marca "Abierto ahora" según horario (L–S 09–21)
(function(){
  const statusEl = document.querySelector('.status');
  if(!statusEl) return;
  const now = new Date();
  const day = now.getDay(); // 0=Domingo, 6=Sábado
  const hour = now.getHours() + now.getMinutes()/60;
  const isOpenDay = (day >= 1 && day <= 6); // Lunes–Sábado
  const isOpenHour = (hour >= 9 && hour < 21);
  if(isOpenDay && isOpenHour){
    statusEl.textContent = 'Abierto ahora';
    statusEl.style.background = '#16a34a';
  }else{
    statusEl.textContent = 'Cerrado';
    statusEl.style.background = '#b91c1c';
  }
})();
