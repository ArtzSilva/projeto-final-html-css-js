const startForm = document.querySelector('#start-form');

startForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#player-name').value.trim();
  const category = document.querySelector('#category').value;
  const difficulty = document.querySelector('#difficulty').value;
  const errorMessage = document.querySelector('#form-error');

  if (!name || !category || !difficulty) {
    errorMessage.textContent = 'Preencha seu nome e escolha a categoria e a dificuldade.';
    return;
  }

  if (name.length < 2) {
    errorMessage.textContent = 'Digite um nome com pelo menos 2 caracteres.';
    return;
  }

  const gameConfig = {
    name: name.slice(0, 20),
    category,
    difficulty,
    startedAt: new Date().toISOString()
  };

  sessionStorage.setItem('craqueQuizConfig', JSON.stringify(gameConfig));
  sessionStorage.removeItem('craqueQuizResult');
  window.location.href = 'quiz.html';
});
