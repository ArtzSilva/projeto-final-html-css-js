const rankingBody = document.querySelector('#ranking-body');
const rankingEmpty = document.querySelector('#ranking-empty');
const rankingCount = document.querySelector('#ranking-count');
const rankingFilter = document.querySelector('#ranking-filter');

function renderRanking() {
  const ranking = readStorage('craqueQuizRanking', []);
  const selectedCategory = rankingFilter.value;
  const filtered = ranking
    .filter((entry) => selectedCategory === 'todas' || entry.category === selectedCategory)
    .sort((a, b) => b.score - a.score || new Date(a.date) - new Date(b.date));

  rankingBody.innerHTML = '';
  rankingCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'partida registrada' : 'partidas registradas'}`;
  rankingEmpty.hidden = filtered.length > 0;
  document.querySelector('.table-wrap').hidden = filtered.length === 0;

  filtered.slice(0, 50).forEach((entry, index) => {
    const row = document.createElement('tr');
    const values = [
      index + 1,
      entry.name,
      CATEGORY_NAMES[entry.category] || entry.category,
      DIFFICULTY_NAMES[entry.difficulty] || entry.difficulty,
      `${entry.score} pts`
    ];
    values.forEach((value, columnIndex) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      if (columnIndex === 0) cell.className = 'rank-position';
      if (columnIndex === 4) cell.className = 'rank-score';
      row.appendChild(cell);
    });
    rankingBody.appendChild(row);
  });
}

rankingFilter.addEventListener('change', renderRanking);
renderRanking();
