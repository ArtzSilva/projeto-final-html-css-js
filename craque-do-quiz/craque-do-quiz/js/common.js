const CATEGORY_NAMES = {
  copa: 'Copa do Mundo',
  brasileiros: 'Futebol Brasileiro',
  jogadores: 'Jogadores e Lendas',
  regras: 'Regras e Curiosidades'
};

const DIFFICULTY_NAMES = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };

function readStorage(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch (error) {
    console.warn(`Não foi possível ler ${key}:`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Não foi possível salvar ${key}:`, error);
    return false;
  }
}

function shuffleArray(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return 'Data não disponível';
  return date.toLocaleDateString('pt-BR');
}
