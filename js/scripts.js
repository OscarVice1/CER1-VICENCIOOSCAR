const fechaEvento = moment('2025-09-08T15:15:00');
document.getElementById('fecha-evento').textContent = fechaEvento.format('YY-MM-DD');
document.getElementById('hora-evento').textContent = fechaEvento.format('HH:mm');

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function Counter() {
    const now = moment();
    const duration = moment.duration(fechaEvento.diff(now));

    if (duration.asSeconds() <= 0) {
        document.getElementById('comenzo').textContent = "¡El evento ha comenzado!";
        clearInterval(intervalo);
        return;
    }

    days.textContent = Math.floor(duration.asDays()).toString().padStart(2, '0');
    hours.textContent = duration.hours().toString().padStart(2, '0');
    minutes.textContent = duration.minutes().toString().padStart(2, '0');
    seconds.textContent = duration.seconds().toString().padStart(2, '0');
}

const intervalo = setInterval(Counter, 1000);
Counter();




//comentarios
const form = document.getElementById('comentario-form');
const muroComentarios = document.getElementById('muro-comentarios');
const nombreInput = document.getElementById('nombre');
const mensajeInput = document.getElementById('mensaje'); 

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const mensaje = mensajeInput.value;


  const now = new Date();
  const fechaHora = now.toLocaleString();

  const nuevoComentario = document.createElement('div');
  nuevoComentario.classList.add('list-group-item');
  
  nuevoComentario.innerHTML = `
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${nombre}</h5>
      <small>${fechaHora}</small>
    </div>
    <p class="mb-1">${mensaje}</p>
  `;

  muroComentarios.prepend(nuevoComentario);

  form.reset();
});

