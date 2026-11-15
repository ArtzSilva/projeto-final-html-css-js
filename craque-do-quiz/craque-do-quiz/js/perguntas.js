// Banco de perguntas de exemplo. Cada questão possui quatro alternativas e o índice da resposta correta.
const QUESTIONS = [
  // COPA DO MUNDO
  { id: 1, category: 'copa', difficulty: 'facil', question: 'Qual seleção venceu a primeira Copa do Mundo, em 1930?', answers: ['Brasil', 'Uruguai', 'Itália', 'Argentina'], correct: 1 },
  { id: 2, category: 'copa', difficulty: 'facil', question: 'Em que ano o Brasil conquistou seu primeiro título mundial?', answers: ['1950', '1958', '1962', '1970'], correct: 1 },
  { id: 3, category: 'copa', difficulty: 'medio', question: 'Qual país sediou a Copa do Mundo de 2010?', answers: ['Alemanha', 'México', 'África do Sul', 'Japão'], correct: 2 },
  { id: 4, category: 'copa', difficulty: 'medio', question: 'Quem marcou o gol do título da Espanha na final da Copa de 2010?', answers: ['David Villa', 'Xavi', 'Fernando Torres', 'Andrés Iniesta'], correct: 3 },
  { id: 5, category: 'copa', difficulty: 'dificil', question: 'Qual seleção foi a primeira a conquistar três títulos de Copa do Mundo?', answers: ['Alemanha', 'Itália', 'Brasil', 'Argentina'], correct: 2 },
  { id: 6, category: 'copa', difficulty: 'dificil', question: 'Qual jogador marcou cinco gols em uma única partida na Copa de 1994?', answers: ['Romário', 'Oleg Salenko', 'Hristo Stoichkov', 'Roberto Baggio'], correct: 1 },

  // CLUBES E CAMPEONATOS BRASILEIROS
  { id: 7, category: 'brasileiros', difficulty: 'facil', question: 'Qual clube é conhecido como Timão?', answers: ['Palmeiras', 'Corinthians', 'Santos', 'São Paulo'], correct: 1 },
  { id: 8, category: 'brasileiros', difficulty: 'facil', question: 'Quais são as cores tradicionais do Flamengo?', answers: ['Azul e branco', 'Verde e amarelo', 'Vermelho e preto', 'Preto e branco'], correct: 2 },
  { id: 9, category: 'brasileiros', difficulty: 'medio', question: 'Qual estádio é conhecido como Mineirão?', answers: ['Estádio em Belo Horizonte', 'Estádio em Recife', 'Estádio em Curitiba', 'Estádio em Salvador'], correct: 0 },
  { id: 10, category: 'brasileiros', difficulty: 'medio', question: 'Qual destes clubes é conhecido como Imortal Tricolor?', answers: ['Internacional', 'Grêmio', 'Fluminense', 'Bahia'], correct: 1 },
  { id: 11, category: 'brasileiros', difficulty: 'dificil', question: 'Qual clube venceu a primeira edição do Campeonato Brasileiro reconhecida pela CBF, em 1971?', answers: ['Santos', 'Atlético Mineiro', 'São Paulo', 'Botafogo'], correct: 1 },
  { id: 12, category: 'brasileiros', difficulty: 'dificil', question: 'Qual clube brasileiro é conhecido como Vozão?', answers: ['Fortaleza', 'Sport', 'Ceará', 'Náutico'], correct: 2 },

  // JOGADORES E LENDAS
  { id: 13, category: 'jogadores', difficulty: 'facil', question: 'Qual jogador brasileiro ficou conhecido como Rei do Futebol?', answers: ['Zico', 'Romário', 'Pelé', 'Ronaldo Fenômeno'], correct: 2 },
  { id: 14, category: 'jogadores', difficulty: 'facil', question: 'Qual jogador é conhecido pelo apelido de CR7?', answers: ['Lionel Messi', 'Cristiano Ronaldo', 'Neymar', 'Kylian Mbappé'], correct: 1 },
  { id: 15, category: 'jogadores', difficulty: 'medio', question: 'Em qual país nasceu o jogador Lionel Messi?', answers: ['Brasil', 'Espanha', 'Uruguai', 'Argentina'], correct: 3 },
  { id: 16, category: 'jogadores', difficulty: 'medio', question: 'Qual goleiro brasileiro era conhecido como São Marcos?', answers: ['Dida', 'Marcos', 'Taffarel', 'Rogério Ceni'], correct: 1 },
  { id: 17, category: 'jogadores', difficulty: 'dificil', question: 'Quem foi o capitão da seleção brasileira na conquista da Copa do Mundo de 1994?', answers: ['Romário', 'Bebeto', 'Dunga', 'Taffarel'], correct: 2 },
  { id: 18, category: 'jogadores', difficulty: 'dificil', question: 'Qual jogador marcou o gol conhecido como “La Mano de Dios” na Copa de 1986?', answers: ['Diego Maradona', 'Gabriel Batistuta', 'Jorge Valdano', 'Mario Kempes'], correct: 0 },

  // REGRAS E CURIOSIDADES
  { id: 19, category: 'regras', difficulty: 'facil', question: 'Quantos jogadores de cada equipe começam uma partida de futebol?', answers: ['9', '10', '11', '12'], correct: 2 },
  { id: 20, category: 'regras', difficulty: 'facil', question: 'Qual cartão indica a expulsão de um jogador?', answers: ['Azul', 'Amarelo', 'Verde', 'Vermelho'], correct: 3 },
  { id: 21, category: 'regras', difficulty: 'medio', question: 'A partir de quantos jogadores uma equipe não pode continuar uma partida, segundo a regra?', answers: ['Menos de 7', 'Menos de 8', 'Menos de 9', 'Menos de 10'], correct: 0 },
  { id: 22, category: 'regras', difficulty: 'medio', question: 'Qual é a distância da marca do pênalti até a linha do gol?', answers: ['9 metros', '10 metros', '11 metros', '12 metros'], correct: 2 },
  { id: 23, category: 'regras', difficulty: 'dificil', question: 'Qual entidade é responsável por estabelecer as regras do futebol?', answers: ['FIFA', 'IFAB', 'COI', 'UEFA'], correct: 1 },
  { id: 24, category: 'regras', difficulty: 'dificil', question: 'Em uma cobrança de pênalti, o goleiro deve ter ao menos parte de um pé sobre ou alinhada à linha do gol até o chute. Essa regra trata de qual momento?', answers: ['Antes da cobrança', 'Depois do chute', 'Após a defesa', 'Durante a comemoração'], correct: 0 },


  // PERGUNTAS EXTRAS — COPA DO MUNDO
  { id: 25, category: 'copa', difficulty: 'facil', question: 'Qual país sediou a Copa do Mundo de 1998?', answers: ['França', 'Brasil', 'Inglaterra', 'Espanha'], correct: 0 },
  { id: 26, category: 'copa', difficulty: 'facil', question: 'Qual seleção venceu a Copa do Mundo de 2022?', answers: ['França', 'Argentina', 'Croácia', 'Marrocos'], correct: 1 },
  { id: 27, category: 'copa', difficulty: 'facil', question: 'Qual país recebeu a Copa do Mundo de 2014?', answers: ['Alemanha', 'África do Sul', 'Brasil', 'Rússia'], correct: 2 },
  { id: 28, category: 'copa', difficulty: 'facil', question: 'Qual seleção venceu a Copa do Mundo de 2018?', answers: ['Croácia', 'França', 'Bélgica', 'Inglaterra'], correct: 1 },
  { id: 29, category: 'copa', difficulty: 'medio', question: 'Qual jogador marcou 13 gols na Copa do Mundo de 1958?', answers: ['Pelé', 'Garrincha', 'Just Fontaine', 'Vavá'], correct: 2 },
  { id: 30, category: 'copa', difficulty: 'medio', question: 'Qual seleção eliminou o Brasil na Copa do Mundo de 2006?', answers: ['Itália', 'França', 'Alemanha', 'Portugal'], correct: 1 },
  { id: 31, category: 'copa', difficulty: 'medio', question: 'Em qual país foi disputada a Copa do Mundo de 2002?', answers: ['China e Japão', 'Coreia do Sul e Japão', 'Japão e Austrália', 'Coreia do Sul e China'], correct: 1 },
  { id: 32, category: 'copa', difficulty: 'medio', question: 'Qual seleção perdeu a final da Copa do Mundo de 2014?', answers: ['Argentina', 'Holanda', 'Brasil', 'Bélgica'], correct: 0 },
  { id: 33, category: 'copa', difficulty: 'dificil', question: 'Quem marcou os dois gols do Brasil na final da Copa do Mundo de 2002?', answers: ['Rivaldo', 'Ronaldinho Gaúcho', 'Ronaldo', 'Juninho Paulista'], correct: 2 },
  { id: 34, category: 'copa', difficulty: 'dificil', question: 'Qual seleção participou de todas as edições da Copa do Mundo masculina até 2022?', answers: ['Alemanha', 'Brasil', 'Itália', 'Argentina'], correct: 1 },
  { id: 35, category: 'copa', difficulty: 'dificil', question: 'Qual país sediou a Copa do Mundo em 1970 e novamente em 1986?', answers: ['México', 'Itália', 'França', 'Alemanha'], correct: 0 },
  { id: 36, category: 'copa', difficulty: 'dificil', question: 'Qual seleção enfrentou a Hungria na final da Copa do Mundo de 1954?', answers: ['Brasil', 'Uruguai', 'Alemanha Ocidental', 'Inglaterra'], correct: 2 },

  // PERGUNTAS EXTRAS — CLUBES E CAMPEONATOS BRASILEIROS
  { id: 37, category: 'brasileiros', difficulty: 'facil', question: 'Qual clube manda seus jogos na Vila Belmiro?', answers: ['Santos', 'Corinthians', 'São Paulo', 'Palmeiras'], correct: 0 },
  { id: 38, category: 'brasileiros', difficulty: 'facil', question: 'Qual clube é conhecido como Raposa?', answers: ['Atlético Mineiro', 'Cruzeiro', 'América Mineiro', 'Goiás'], correct: 1 },
  { id: 39, category: 'brasileiros', difficulty: 'facil', question: 'Qual destes clubes é do Rio Grande do Sul?', answers: ['Bahia', 'Sport', 'Internacional', 'Fluminense'], correct: 2 },
  { id: 40, category: 'brasileiros', difficulty: 'facil', question: 'Qual é o clássico entre Corinthians e Palmeiras?', answers: ['San-São', 'Majestoso', 'Choque-Rei', 'Derby Paulista'], correct: 3 },
  { id: 41, category: 'brasileiros', difficulty: 'medio', question: 'Qual clube brasileiro é conhecido como Furacão?', answers: ['Athletico Paranaense', 'Coritiba', 'Paraná Clube', 'Chapecoense'], correct: 0 },
  { id: 42, category: 'brasileiros', difficulty: 'medio', question: 'Em qual estado fica o estádio Maracanã?', answers: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia'], correct: 1 },
  { id: 43, category: 'brasileiros', difficulty: 'medio', question: 'Qual clube tem como mascote o Galo?', answers: ['Atlético Mineiro', 'Cruzeiro', 'Botafogo', 'Flamengo'], correct: 0 },
  { id: 44, category: 'brasileiros', difficulty: 'medio', question: 'Qual competição reúne clubes campeões das copas nacionais e ligas da América do Sul?', answers: ['Copa do Brasil', 'Copa Sul-Americana', 'Copa Libertadores', 'Recopa Europeia'], correct: 2 },
  { id: 45, category: 'brasileiros', difficulty: 'dificil', question: 'Qual clube venceu a Copa Libertadores de 2013?', answers: ['Fluminense', 'Atlético Mineiro', 'Corinthians', 'Grêmio'], correct: 1 },
  { id: 46, category: 'brasileiros', difficulty: 'dificil', question: 'Qual foi o primeiro clube brasileiro campeão mundial interclubes no formato da Copa Intercontinental?', answers: ['Santos', 'Flamengo', 'São Paulo', 'Grêmio'], correct: 0 },
  { id: 47, category: 'brasileiros', difficulty: 'dificil', question: 'Qual clube venceu a primeira edição da Copa do Brasil, em 1989?', answers: ['Grêmio', 'Sport', 'Flamengo', 'Vasco'], correct: 0 },
  { id: 48, category: 'brasileiros', difficulty: 'dificil', question: 'Qual clube brasileiro conquistou a Libertadores de 1997?', answers: ['Cruzeiro', 'Vasco', 'Palmeiras', 'São Paulo'], correct: 0 },

  // PERGUNTAS EXTRAS — JOGADORES E LENDAS
  { id: 49, category: 'jogadores', difficulty: 'facil', question: 'Qual posição normalmente utiliza luvas e protege o gol?', answers: ['Zagueiro', 'Goleiro', 'Lateral', 'Volante'], correct: 1 },
  { id: 50, category: 'jogadores', difficulty: 'facil', question: 'Qual jogador brasileiro é conhecido como Fenômeno?', answers: ['Ronaldo', 'Ronaldinho', 'Rivaldo', 'Kaká'], correct: 0 },
  { id: 51, category: 'jogadores', difficulty: 'facil', question: 'Qual destes jogadores é um atacante argentino famoso pelo número 10?', answers: ['Luka Modrić', 'Lionel Messi', 'Erling Haaland', 'Kevin De Bruyne'], correct: 1 },
  { id: 52, category: 'jogadores', difficulty: 'facil', question: 'Qual jogador ficou conhecido pelo apelido de Bruxo?', answers: ['Neymar', 'Ronaldinho Gaúcho', 'Kaká', 'Rivaldo'], correct: 1 },
  { id: 53, category: 'jogadores', difficulty: 'medio', question: 'Qual goleiro marcou mais de 100 gols oficiais na carreira?', answers: ['Júlio César', 'Rogério Ceni', 'Dida', 'Alisson'], correct: 1 },
  { id: 54, category: 'jogadores', difficulty: 'medio', question: 'Qual jogador português foi eleito melhor do mundo pela FIFA em 2001?', answers: ['Luís Figo', 'Cristiano Ronaldo', 'Deco', 'Rui Costa'], correct: 0 },
  { id: 55, category: 'jogadores', difficulty: 'medio', question: 'Qual ex-jogador brasileiro era conhecido como Capitão do Tetra?', answers: ['Dunga', 'Cafu', 'Bebeto', 'Zinho'], correct: 0 },
  { id: 56, category: 'jogadores', difficulty: 'medio', question: 'Em qual clube europeu Neymar atuou antes de se transferir para o Paris Saint-Germain?', answers: ['Real Madrid', 'Barcelona', 'Chelsea', 'Milan'], correct: 1 },
  { id: 57, category: 'jogadores', difficulty: 'dificil', question: 'Quem venceu a Bola de Ouro de 2007?', answers: ['Kaká', 'Cristiano Ronaldo', 'Lionel Messi', 'Ronaldinho Gaúcho'], correct: 0 },
  { id: 58, category: 'jogadores', difficulty: 'dificil', question: 'Qual jogador marcou o gol do título da França na final da Copa do Mundo de 1998?', answers: ['Thierry Henry', 'Zinedine Zidane', 'Youri Djorkaeff', 'David Trezeguet'], correct: 1 },
  { id: 59, category: 'jogadores', difficulty: 'dificil', question: 'Qual jogador brasileiro recebeu o apelido de “Anjo das Pernas Tortas”?', answers: ['Garrincha', 'Jairzinho', 'Didi', 'Nilton Santos'], correct: 0 },
  { id: 60, category: 'jogadores', difficulty: 'dificil', question: 'Qual jogador venceu a Chuteira de Ouro da Copa do Mundo de 2014?', answers: ['Thomas Müller', 'Lionel Messi', 'James Rodríguez', 'Neymar'], correct: 2 },

  // PERGUNTAS EXTRAS — REGRAS E CURIOSIDADES
  { id: 61, category: 'regras', difficulty: 'facil', question: 'Como é chamado o reinício do jogo quando a bola sai pela lateral?', answers: ['Tiro de meta', 'Arremesso lateral', 'Escanteio', 'Tiro livre'], correct: 1 },
  { id: 62, category: 'regras', difficulty: 'facil', question: 'Qual é a duração normal de uma partida profissional, sem acréscimos?', answers: ['Duas partes de 30 minutos', 'Duas partes de 40 minutos', 'Duas partes de 45 minutos', 'Quatro partes de 20 minutos'], correct: 2 },
  { id: 63, category: 'regras', difficulty: 'facil', question: 'O que acontece quando a bola ultrapassa completamente a linha de fundo após toque de um defensor, sem gol?', answers: ['Escanteio', 'Arremesso lateral', 'Bola ao chão', 'Tiro livre indireto'], correct: 0 },
  { id: 64, category: 'regras', difficulty: 'facil', question: 'Qual equipamento é obrigatório para os jogadores de linha?', answers: ['Relógio', 'Caneleiras', 'Boné', 'Luvas'], correct: 1 },
  { id: 65, category: 'regras', difficulty: 'medio', question: 'Qual é a distância mínima que os adversários devem respeitar em uma cobrança de tiro livre, se não estiverem na própria linha do gol?', answers: ['7,15 metros', '9,15 metros', '10,15 metros', '11 metros'], correct: 1 },
  { id: 66, category: 'regras', difficulty: 'medio', question: 'O que caracteriza uma cobrança de tiro de meta?', answers: ['A bola é colocada na área de meta para ser chutada', 'A bola é lançada com as mãos pelo goleiro', 'A bola é colocada no escanteio', 'A bola é chutada do meio-campo'], correct: 0 },
  { id: 67, category: 'regras', difficulty: 'medio', question: 'Quantas substituições podem ser feitas normalmente em competições que adotam a regra atual de cinco substituições?', answers: ['3', '4', '5', '6'], correct: 2 },
  { id: 68, category: 'regras', difficulty: 'medio', question: 'Quando um jogador está em posição de impedimento?', answers: ['Sempre que está no campo de ataque', 'Quando está mais perto da linha de gol adversária que a bola e o penúltimo adversário, no momento do passe', 'Quando recebe a bola dentro da área', 'Quando está atrás do árbitro'], correct: 1 },
  { id: 69, category: 'regras', difficulty: 'dificil', question: 'Em qual situação um jogador não pode ser punido por impedimento?', answers: ['Ao receber diretamente a bola de um tiro de meta', 'Ao receber um passe comum', 'Ao disputar a bola com um defensor', 'Ao interferir na visão do goleiro'], correct: 0 },
  { id: 70, category: 'regras', difficulty: 'dificil', question: 'De acordo com as regras, a bola está fora de jogo quando...', answers: ['toca a trave e volta', 'toca o árbitro e permanece no campo, em qualquer situação', 'ultrapassa completamente uma linha lateral ou de meta', 'sobe muito alto'], correct: 2 },
  { id: 71, category: 'regras', difficulty: 'dificil', question: 'Qual é o raio do círculo central do campo de futebol?', answers: ['9,15 metros', '10 metros', '11 metros', '12 metros'], correct: 0 },
  { id: 72, category: 'regras', difficulty: 'dificil', question: 'Qual é a medida oficial da largura da marca de pênalti?', answers: ['10 cm', '22 cm', '30 cm', '40 cm'], correct: 1 }

];
