const result = JSON.parse(sessionStorage.getItem('craqueQuizResult') || 'null');

if (!result) {
  window.location.replace('index.html');
} else {
  let title = 'Pé de Rato';
  let message = 'Não desanime! Treino e conhecimento fazem parte do jogo.';
  if (result.accuracy >= 90) {
    title = 'Lenda';
    message = 'Que partida histórica! Você mostrou conhecimento de um verdadeiro craque.';
  } else if (result.accuracy >= 75) {
    title = 'Craque';
    message = 'Você jogou muito! Seu conhecimento está em alto nível.';
  } else if (result.accuracy >= 55) {
    title = 'Titular';
    message = 'Boa atuação! Você está no caminho para virar um craque.';
  } else if (result.accuracy >= 30) {
    title = 'Reserva';
    message = 'Você tem potencial. Mais uma partida pode melhorar esse placar.';
  }

  document.querySelector('#result-title').textContent = title;
  document.querySelector('#result-message').textContent = message;
  document.querySelector('#score-value').textContent = result.score;
  document.querySelector('#correct-value').textContent = result.correct;
  document.querySelector('#wrong-value').textContent = result.wrong;
  document.querySelector('#accuracy-value').textContent = `${result.accuracy}%`;
  document.querySelector('#result-detail').textContent = `${result.name} · ${CATEGORY_NAMES[result.category]} · Nível ${DIFFICULTY_NAMES[result.difficulty]} · ${result.total} perguntas`;
}
