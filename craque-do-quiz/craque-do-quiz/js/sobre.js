const suggestionForm = document.querySelector('#suggestion-form');
const suggestionStatus = document.querySelector('#suggestion-status');

suggestionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const suggestion = {
    category: document.querySelector('#suggestion-category').value,
    question: document.querySelector('#suggestion-question').value.trim(),
    answer: document.querySelector('#suggestion-answer').value.trim(),
    date: new Date().toISOString()
  };

  if (!suggestion.category || !suggestion.question || !suggestion.answer) {
    suggestionStatus.textContent = 'Preencha todos os campos.';
    return;
  }

  const suggestions = readStorage('craqueQuizSuggestions', []);
  suggestions.push(suggestion);
  if (!writeStorage('craqueQuizSuggestions', suggestions)) {
    suggestionStatus.textContent = 'Não foi possível salvar. Verifique o armazenamento do navegador.';
    return;
  }

  suggestionForm.reset();
  suggestionStatus.textContent = 'Sugestão registrada neste navegador. Obrigado por participar!';
});
