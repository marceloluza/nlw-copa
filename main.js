function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.2;

function createCard(date, day, games) {
  delay = delay + 0.2;
  
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

/*Código ANTES da refatoração:
document.querySelector('#app').innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="logo nlw copa calendario">
  </header>
  <main id="cards">
    ${createCard("21/11", "segunda", createGame("brasil", "08:00", "camarões") + createGame("hungria", "13:00", "argentina"))}
    ${createCard("24/11", "quinta", createGame("brasil", "16:00", "servia"))}
    ${createCard("02/12", "sexta", createGame("brasil", "13:00", "suiça"))}
  </main>
`
*/

//Código DEPOIS da refatoração:
document.querySelector('#cards').innerHTML = 
  createCard("24/11", "quinta", createGame("brasil", "16:00", "servia")) +
  createCard("28/11", "segunda", createGame("suiça", "13:00", "brasil") +
  createGame("portugal", "16:00", "argentina")) +
  createCard("02/12", "sexta", createGame("brasil", "16:00", "camarões"))


