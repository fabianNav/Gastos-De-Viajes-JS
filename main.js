import './css/style.css'

let vacationCalc = document.getElementById("vacacionCalc");

vacationCalc.addEventListener('submit', calcExpens);

//TODO Esta funcion calcula las expensas
function calcExpens(e) {
  e.preventDefault();

  //? Destino
  let destiny = document.getElementById('destino').value; 
  console.log(destiny);

  //? Presupuesto
  let budget = document.getElementById('presupuesto').value;
  console.log(budget);

  //? Alojamiento
  let acomodation = document.getElementById('alojamiento').value;
  console.log(acomodation);

  //? Transporte
  let transport = document.getElementById('transporte').value;
  console.log(transport);

  //? Comida
  let food = document.getElementById('comida').value;
  console.log(food);
}
