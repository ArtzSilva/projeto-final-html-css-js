(() => {
  const config = JSON.parse(sessionStorage.getItem('craqueQuizConfig') || 'null');
  if (!config || !config.name || !config.category || !config.difficulty) {
    window.location.replace('index.html');
    return;
  }

  const QUESTION_TIME = 15;
  const QUESTIONS_PER_GAME = 6;
  const DIFFICULTY_MULTIPLIER = { facil: 1, medio: 1.5, dificil: 2 };
  const filteredQuestions = QUESTIONS.filter((item) => item.category === config.category && item.difficulty === config.difficulty);
  const gameQuestions = shuffleArray(filteredQuestions).slice(0, QUESTIONS_PER_GAME);

  if (gameQuestions.length === 0) {
    alert('Ainda não há perguntas para essa combinação. Escolha outra dificuldade.');
    window.location.replace('index.html');
    return;
  }

  const elements = {
    category: document.querySelector('#quiz-category'),
    player: document.querySelector('#quiz-player'),
    counter: document.querySelector('#question-counter'),
    percent: document.querySelector('#progress-percent'),
    progress: document.querySelector('#progress-fill'),
    question: document.querySelector('#question-text'),
    timer: document.querySelector('#timer'),
    timerValue: document.querySelector('#timer-value'),
    answers: document.querySelector('#answers'),
    help: document.querySelector('#help-button'),
    feedback: document.querySelector('#feedback')
  };

  let currentIndex = 0;
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let timeLeft = QUESTION_TIME;
  let timerId = null;
  let locked = false;
  let helpUsed = false;

  elements.category.textContent = CATEGORY_NAMES[config.category];
  elements.player.textContent = config.name;
  elements.help.addEventListener('click', useFiftyFifty);

  function startTimer() {
    clearInterval(timerId);
    timeLeft = QUESTION_TIME;
    updateTimer();
    timerId = setInterval(() => {
      timeLeft -= 1;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timerId);
        handleAnswer(null, true);
      }
    }, 1000);
  }

  function updateTimer() {
    elements.timerValue.textContent = timeLeft;
    elements.timer.classList.toggle('timer-warning', timeLeft <= 5);
  }

  function renderQuestion() {
    locked = false;
    const question = gameQuestions[currentIndex];
    const progress = ((currentIndex + 1) / gameQuestions.length) * 100;
    elements.counter.textContent = `Pergunta ${currentIndex + 1} de ${gameQuestions.length}`;
    elements.percent.textContent = `${Math.round(progress)}%`;
    elements.progress.style.width = `${progress}%`;
    elements.question.textContent = question.question;
    elements.feedback.textContent = 'Escolha uma alternativa para marcar seu ponto.';
    elements.feedback.className = 'feedback';
    elements.answers.innerHTML = '';

    question.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-option';
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span class="answer-text"></span>`;
      button.querySelector('.answer-text').textContent = answer;
      button.addEventListener('click', () => handleAnswer(index, false));
      elements.answers.appendChild(button);
    });

    elements.help.disabled = helpUsed;
    elements.help.innerHTML = helpUsed ? '✂ Ajuda utilizada' : '✂ Ajuda 50/50 <span class="help-count">1 uso</span>';
    startTimer();
  }

  function useFiftyFifty() {
    if (helpUsed || locked) return;
    helpUsed = true;
    const question = gameQuestions[currentIndex];
    const wrongButtons = [...elements.answers.querySelectorAll('.answer-option')]
      .filter((button, index) => index !== question.correct && !button.disabled);
    shuffleArray(wrongButtons).slice(0, 2).forEach((button) => {
      button.disabled = true;
      button.classList.add('answer-hidden');
      button.querySelector('.answer-text').textContent = 'Alternativa removida';
    });
    elements.help.disabled = true;
    elements.help.textContent = '✂ Ajuda utilizada';
    elements.feedback.textContent = 'Duas alternativas incorretas foram removidas.';
  }

  function handleAnswer(selectedIndex, timedOut) {
    if (locked) return;
    locked = true;
    clearInterval(timerId);
    const question = gameQuestions[currentIndex];
    const buttons = [...elements.answers.querySelectorAll('.answer-option')];
    buttons.forEach((button) => { button.disabled = true; });

    if (selectedIndex === question.correct) {
      correctCount += 1;
      const basePoints = 100 * DIFFICULTY_MULTIPLIER[config.difficulty];
      const speedBonus = Math.round((timeLeft / QUESTION_TIME) * 50);
      const earned = Math.round(basePoints + speedBonus);
      score += earned;
      buttons[selectedIndex].classList.add('answer-correct');
      elements.feedback.textContent = `Resposta certa! +${earned} pontos (${speedBonus} de bônus por rapidez).`;
      elements.feedback.classList.add('feedback-good');
    } else {
      wrongCount += 1;
      if (selectedIndex !== null && buttons[selectedIndex]) buttons[selectedIndex].classList.add('answer-wrong');
      buttons[question.correct].classList.add('answer-correct');
      elements.feedback.textContent = timedOut
        ? `O tempo acabou! A resposta era: ${question.answers[question.correct]}.`
        : `Não foi dessa vez. A resposta era: ${question.answers[question.correct]}.`;
      elements.feedback.classList.add('feedback-bad');
    }

    setTimeout(() => {
      currentIndex += 1;
      if (currentIndex >= gameQuestions.length) finishGame();
      else renderQuestion();
    }, 1100);
  }

  function finishGame() {
    clearInterval(timerId);
    const result = {
      name: config.name,
      category: config.category,
      difficulty: config.difficulty,
      score,
      correct: correctCount,
      wrong: wrongCount,
      total: gameQuestions.length,
      accuracy: Math.round((correctCount / gameQuestions.length) * 100),
      date: new Date().toISOString()
    };
    sessionStorage.setItem('craqueQuizResult', JSON.stringify(result));

    const ranking = readStorage('craqueQuizRanking', []);
    ranking.push(result);
    ranking.sort((a, b) => b.score - a.score || new Date(a.date) - new Date(b.date));
    writeStorage('craqueQuizRanking', ranking.slice(0, 100));
    window.location.href = 'resultado.html';
  }

  renderQuestion();
})();
