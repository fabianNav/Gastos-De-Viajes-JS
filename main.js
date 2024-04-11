import './css/style.css'

let vacationCalc = document.getElementById("vacacionCalc");

vacationCalc.addEventListener('submit', calcExpens);

//TODO Esta funcion calcula las expensas
function calcExpens(e) {
  e.preventDefault();

  //? Destino
  let destiny = document.getElementById('destino').value;
  //console.log(destiny);

  //? Presupuesto
  let budget = document.getElementById('presupuesto').value;
  //console.log(budget);

  //? Alojamiento
  let acomodation = document.getElementById('alojamiento').value;
  //console.log(acomodation);

  //? Transporte
  let transport = document.getElementById('transporte').value;
  //console.log(transport);

  //? Comida
  let food = document.getElementById('comida').value;
  //console.log(food);

  //? Gastos
  let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food);

  //? Balance
  let balance = budget - expenses;
  //console.log(budget, balance);

  //? Si no se pasan esos parametros entonces el programa no va a reconocer que son ni de donde son.
  UI(destiny, budget, balance);
}

//TODO Inserta resultados en el DOM
function UI(destiny, budget, balance) {
  let result = document.getElementById('resultado');
  result.innerHTML =
    `
    <section class="iconos">
      <div class="vuelo">
        <h5><i class="fa-solid fa-plane"></i></h5>
        <h4>${destiny}</h4>
      </div>
      <div class="disponible">
        <h5><i class="fa-solid fa-wallet"></i></h5>
        <h4>${budget}</h4>
      </div>
      <div class="restante">
        <h5><i class="fa-solid fa-money-bill"></i></h5>
        <h4>${balance}</h4>
      </div>
      
    </section>
  `

  reset();
}

//TODO resetea el form
const reset = () => {
  vacationCalc.reset();
}

//TODO Modo Oscuro
const colorPredeterminado = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');
const setTheme = (tema) => {
  document.documentElement.setAttribute('data-theme', tema);
  localStorage.setItem('theme', tema);
}
slider.addEventListener('click', () => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
})
setTheme(localStorage.getItem('theme') || colorPredeterminado);





