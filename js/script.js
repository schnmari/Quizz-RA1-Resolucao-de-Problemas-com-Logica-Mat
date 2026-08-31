/* ===================== DADOS DOS QUIZZES ===================== */

const QUESTIONS = {
  1: [
    {
      q: "Qual das alternativas abaixo é uma proposição lógica?",
      options: ["Feche a janela, por favor.", "Que dia lindo!", "O número 7 é primo.", "x + 5 = 12"],
      correct: 2,
      explain: "\"O número 7 é primo\" é uma sentença declarativa com valor de verdade definido (V). As outras são uma ordem, uma exclamação e uma sentença aberta (depende de x)."
    },
    {
      q: "Por que a sentença \"x + 2 = 9\" NÃO é considerada uma proposição lógica?",
      options: ["Porque tem um número maior que 5", "Porque não podemos atribuir um único valor V ou F sem saber o valor de x", "Porque não tem verbo", "Porque é uma pergunta"],
      correct: 1,
      explain: "Sentenças abertas (com variável livre) só viram proposições quando a variável recebe um valor específico."
    },
    {
      q: "\"O Brasil fica na América do Sul\" é uma proposição:",
      options: ["Falsa", "Verdadeira", "Não é uma proposição", "Verdadeira e falsa ao mesmo tempo"],
      correct: 1,
      explain: "É uma sentença declarativa cujo valor de verdade é V."
    },
    {
      q: "Qual das frases abaixo NÃO é uma proposição lógica?",
      options: ["2 é um número par.", "Paris é a capital da França.", "Você já terminou a tarefa?", "Todo triângulo tem três lados."],
      correct: 2,
      explain: "Perguntas não recebem valor de verdade, então nunca são proposições."
    },
    {
      q: "Uma proposição simples (atômica) é aquela que:",
      options: ["Tem no máximo duas palavras", "Não contém nenhum conectivo lógico", "É sempre verdadeira", "Só pode ser usada em tabelas-verdade"],
      correct: 1,
      explain: "Proposições simples não usam conectivos (¬, ∧, ∨, →, ↔); quando usam, viram proposições compostas."
    },
    {
      q: "A frase \"Está chovendo e faz frio\" é um exemplo de proposição:",
      options: ["Simples", "Composta", "Aberta", "Sem valor lógico"],
      correct: 1,
      explain: "Duas proposições simples (\"está chovendo\" e \"faz frio\") foram unidas pelo conectivo \"e\", formando uma proposição composta."
    },
    {
      q: "Sobre proposições lógicas, é correto afirmar que:",
      options: ["Podem ser verdadeiras e falsas simultaneamente", "Toda pergunta é uma proposição", "Toda proposição tem exatamente um valor lógico: V ou F", "Só existem proposições compostas"],
      correct: 2,
      explain: "Esse é o princípio central: uma proposição tem um, e apenas um, valor lógico."
    },
    {
      q: "\"Este bolo está delicioso\" geralmente NÃO é considerada uma proposição lógica porque:",
      options: ["É uma frase muito curta", "Depende de opinião pessoal, sem um critério objetivo de verdade", "Não tem sujeito", "É uma ordem"],
      correct: 1,
      explain: "Sem um critério objetivo para decidir V ou F, a sentença não é tratada como proposição em lógica."
    },
    {
      q: "Em lógica, usamos letras como p, q, r para representar:",
      options: ["Somente proposições falsas", "Proposições simples", "Somente números", "Conectivos lógicos"],
      correct: 1,
      explain: "As letras minúsculas p, q, r... são a notação padrão para proposições simples."
    },
    {
      q: "Qual conjunto de frases é formado só por proposições lógicas?",
      options: ["\"Feche a porta.\" e \"2 + 2 = 4.\"", "\"O gato subiu no telhado.\" e \"Que horas são?\"", "\"5 é maior que 3.\" e \"A Terra é um planeta.\"", "\"x > 10\" e \"Vamos embora!\""],
      correct: 2,
      explain: "As duas frases são declarativas e têm valor de verdade definido (ambas V)."
    }
  ],

  2: [
    {
      q: "O conectivo ∧ (também escrito como ^) representa:",
      options: ["Negação", "Disjunção (ou)", "Conjunção (e)", "Condicional"],
      correct: 2,
      explain: "∧ é o símbolo da conjunção, lido como \"e\"."
    },
    {
      q: "O símbolo ∨ (às vezes escrito como \"v\" minúsculo) representa:",
      options: ["Conjunção", "Disjunção (ou)", "Bicondicional", "Negação"],
      correct: 1,
      explain: "∨ é o símbolo da disjunção, lido como \"ou\"."
    },
    {
      q: "Se p é Verdadeiro (V) e q é Falso (F), qual o valor de p ∧ q?",
      options: ["V", "F", "Não é possível saber", "V e F ao mesmo tempo"],
      correct: 1,
      explain: "A conjunção só é V quando as duas proposições são V. Como q é F, o resultado é F."
    },
    {
      q: "Se p é Verdadeiro (V) e q é Falso (F), qual o valor de p ∨ q?",
      options: ["V", "F", "Depende do contexto", "Nenhum dos dois"],
      correct: 0,
      explain: "A disjunção é V quando pelo menos uma das proposições é V. Como p é V, o resultado é V."
    },
    {
      q: "A condicional p → q só é FALSA quando:",
      options: ["p é F e q é F", "p é V e q é V", "p é V e q é F", "p é F e q é V"],
      correct: 2,
      explain: "Esse é o único caso em que a condicional falha: uma condição verdadeira que não leva ao resultado prometido."
    },
    {
      q: "Se p é Falso (F) e q é Verdadeiro (V), qual o valor de p → q?",
      options: ["V", "F", "Indeterminado", "Depende de r"],
      correct: 0,
      explain: "A condicional só é F quando p=V e q=F. Em qualquer outro caso, inclusive p=F, ela é V."
    },
    {
      q: "A bicondicional p ↔ q é VERDADEIRA quando:",
      options: ["p e q têm valores diferentes", "p e q têm o mesmo valor lógico (ambas V ou ambas F)", "Apenas quando ambas são V", "Apenas quando ambas são F"],
      correct: 1,
      explain: "A bicondicional \"testa\" se as duas proposições concordam no valor lógico."
    },
    {
      q: "Se p é Falso (F), qual o valor de ¬p (negação de p)?",
      options: ["V", "F", "Indefinido", "Depende de q"],
      correct: 0,
      explain: "A negação sempre inverte o valor: se p é F, ¬p é V."
    },
    {
      q: "Qual é a ordem correta de precedência dos conectivos, do mais forte (resolvido primeiro) para o mais fraco?",
      options: ["↔, →, ∨, ∧, ¬", "¬, ∧, ∨, →, ↔", "∧, ¬, →, ↔, ∨", "→, ↔, ¬, ∧, ∨"],
      correct: 1,
      explain: "A ordem é: negação primeiro, depois conjunção, depois disjunção, depois condicional, e por último bicondicional."
    },
    {
      q: "Na expressão ¬p ∨ q, o que é calculado primeiro?",
      options: ["p ∨ q, depois a negação do resultado", "¬p, depois o \"ou\" com q", "q, depois p", "A ordem não importa"],
      correct: 1,
      explain: "Como ¬ tem precedência maior que ∨, a negação de p é calculada antes de aplicar a disjunção com q."
    }
  ],

  3: [
    {
      q: "Considere p: \"Eu estudo\" e q: \"Eu passo na prova\". Qual expressão representa \"Se eu estudo, então eu passo na prova\"?",
      options: ["p ∧ q", "p ∨ q", "p → q", "p ↔ q"],
      correct: 2,
      explain: "\"Se ..., então ...\" é a estrutura clássica da condicional →."
    },
    {
      q: "Considere p: \"Está sol\" e q: \"Está calor\". Como traduzir \"Está sol e está calor\"?",
      options: ["p ∨ q", "p ∧ q", "¬p ∧ q", "p → q"],
      correct: 1,
      explain: "A palavra \"e\" indica a conjunção ∧ entre as duas proposições."
    },
    {
      q: "Considere p: \"João estuda\" e q: \"Maria estuda\". Traduza: \"João não estuda.\"",
      options: ["¬p", "¬q", "p ∧ ¬q", "¬p ∨ q"],
      correct: 0,
      explain: "A frase só nega p (João), então a tradução direta é ¬p — q nem entra na expressão."
    },
    {
      q: "Qual palavra da língua portuguesa normalmente indica o conectivo ∨ (disjunção)?",
      options: ["e", "ou", "não", "se...então"],
      correct: 1,
      explain: "\"Ou\" é a palavra-chave clássica da disjunção."
    },
    {
      q: "A expressão p ↔ q normalmente é lida como:",
      options: ["\"p ou q\"", "\"p e q\"", "\"p se, e somente se, q\"", "\"não p\""],
      correct: 2,
      explain: "\"Se, e somente se\" é a leitura padrão da bicondicional."
    },
    {
      q: "Considere p: \"Ana chega cedo\" e q: \"Ana pega o ônibus das 7h\". Traduza para linguagem natural: p ↔ q.",
      options: ["\"Ana chega cedo ou pega o ônibus das 7h.\"", "\"Ana chega cedo se, e somente se, pega o ônibus das 7h.\"", "\"Se Ana chega cedo, então pega o ônibus das 7h.\"", "\"Ana não chega cedo e não pega o ônibus das 7h.\""],
      correct: 1,
      explain: "O símbolo ↔ sempre se traduz como \"... se, e somente se, ...\"."
    },
    {
      q: "Considere p: \"Você estuda\" e q: \"Você tira boa nota\". Traduza: \"Se você não estuda, então você não tira boa nota.\"",
      options: ["p → q", "¬p → ¬q", "¬p ∧ ¬q", "q → p"],
      correct: 1,
      explain: "As duas partes da condicional foram negadas: \"se ¬p, então ¬q\" é exatamente ¬p → ¬q."
    },
    {
      q: "Considerando p: \"Está chovendo\" e q: \"Está fazendo sol\", qual expressão traduz diretamente a frase \"Não é verdade que está chovendo e fazendo sol ao mesmo tempo\"?",
      options: ["¬p ∧ ¬q", "¬(p ∧ q)", "p ∨ q", "¬p ∨ q"],
      correct: 1,
      explain: "\"Não é verdade que ...\" nega a proposição composta inteira, por isso a negação envolve os parênteses: ¬(p ∧ q)."
    },
    {
      q: "Considere p: \"O aluno estuda\" e q: \"O aluno tira nota alta\". Qual frase em português corresponde a p → q?",
      options: ["\"O aluno estuda ou tira nota alta.\"", "\"O aluno estuda e tira nota alta.\"", "\"Se o aluno estuda, então tira nota alta.\"", "\"O aluno não estuda.\""],
      correct: 2,
      explain: "p → q sempre se traduz como \"se p, então q\"."
    },
    {
      q: "Qual palavra-chave costuma indicar o conectivo de negação (¬) em uma frase?",
      options: ["e", "ou", "não / não é verdade que", "se e somente se"],
      correct: 2,
      explain: "\"Não\" e \"não é verdade que\" são os indicadores clássicos da negação."
    }
  ],

  4: [
    {
      q: "Uma proposição composta tem 3 proposições simples diferentes (p, q, r). Quantas linhas terá a tabela-verdade?",
      options: ["3", "6", "8", "9"],
      correct: 2,
      explain: "O número de linhas é 2ⁿ. Com n = 3, temos 2³ = 8 linhas."
    },
    {
      q: "Uma proposição composta tem 2 proposições simples diferentes (p, q). Quantas linhas terá a tabela-verdade?",
      options: ["2", "4", "6", "8"],
      correct: 1,
      explain: "Com n = 2, temos 2² = 4 linhas."
    },
    {
      q: "Na tabela-verdade de p ∧ q, quantas linhas têm resultado Verdadeiro (V)?",
      options: ["0", "1", "2", "4"],
      correct: 1,
      explain: "Das 4 linhas possíveis, só V-V dá resultado V na conjunção — apenas 1 linha."
    },
    {
      q: "Na tabela-verdade de p ∨ q, quantas linhas têm resultado Falso (F)?",
      options: ["0", "1", "2", "3"],
      correct: 1,
      explain: "Das 4 linhas possíveis, só F-F dá resultado F na disjunção — apenas 1 linha."
    },
    {
      q: "Uma proposição composta é chamada de tautologia quando:",
      options: ["O resultado é sempre Falso em todas as linhas da tabela", "O resultado é sempre Verdadeiro em todas as linhas da tabela", "O resultado varia entre V e F", "A tabela não tem nenhuma linha"],
      correct: 1,
      explain: "Tautologia = resultado sempre V, independentemente dos valores das proposições simples."
    },
    {
      q: "Uma proposição composta é chamada de contradição quando:",
      options: ["O resultado é sempre Verdadeiro", "O resultado é sempre Falso em todas as linhas", "O resultado é V em metade das linhas", "Ela não pode ter tabela-verdade"],
      correct: 1,
      explain: "Contradição = resultado sempre F, em todas as linhas da tabela."
    },
    {
      q: "Quando uma proposição composta tem, entre as linhas de sua tabela-verdade, pelo menos um resultado V e pelo menos um F, ela é chamada de:",
      options: ["Tautologia", "Contradição", "Contingência", "Proposição simples"],
      correct: 2,
      explain: "Contingência é o caso \"misto\": nem sempre V, nem sempre F."
    },
    {
      q: "Dado p = V e q = F, qual o valor de p → q na tabela-verdade?",
      options: ["V", "F", "Indefinido", "V e F"],
      correct: 1,
      explain: "p=V e q=F é exatamente o único caso em que a condicional é F."
    },
    {
      q: "Dado p = F e q = F, qual o valor de p ↔ q?",
      options: ["V", "F", "Indefinido", "Depende de r"],
      correct: 0,
      explain: "Como as duas têm o mesmo valor (ambas F), a bicondicional é V."
    },
    {
      q: "Ao montar uma tabela-verdade de uma expressão com parênteses, como (p ∧ q) → r, a ordem correta de cálculo é:",
      options: ["Calcular → antes de calcular o que está dentro dos parênteses", "Calcular primeiro o que está dentro dos parênteses (p ∧ q), depois aplicar o →", "A ordem não importa, o resultado é sempre o mesmo", "Calcular r primeiro, sempre"],
      correct: 1,
      explain: "Parênteses sempre são resolvidos primeiro, assim como em expressões matemáticas comuns."
    }
  ],

  5: [
    {
      q: "Uma fórmula em forma normal (FND ou FNC) pode conter, no máximo, quais conectivos?",
      options: ["→ e ↔", "¬, ∨ e ∧", "Apenas ∨ e ∧", "¬, → e ↔"],
      correct: 1,
      explain: "As formas normais usam só ¬, ∨ e ∧. Condicional e bicondicional precisam ser eliminados por equivalências antes."
    },
    {
      q: "A Forma Normal Conjuntiva (FNC) é:",
      options: ["Uma disjunção de conjunções: ( ∧ ) ∨ ( ∧ )", "Uma conjunção de disjunções: ( ∨ ) ∧ ( ∨ )", "Qualquer fórmula sem parênteses", "Uma fórmula que só usa negações"],
      correct: 1,
      explain: "FNC = ConjuntivA por fora: blocos de \"ou\" ligados por \"e\", no formato ( ∨ ) ∧ ( ∨ )."
    },
    {
      q: "A Forma Normal Disjuntiva (FND) é:",
      options: ["Uma disjunção de conjunções: ( ∧ ) ∨ ( ∧ )", "Uma conjunção de disjunções: ( ∨ ) ∧ ( ∨ )", "Uma fórmula sem nenhuma negação", "Uma fórmula que contém → ou ↔"],
      correct: 0,
      explain: "FND = DisjuntivA por fora: blocos de \"e\" ligados por \"ou\", no formato ( ∧ ) ∨ ( ∧ )."
    },
    {
      q: "Ao converter uma fórmula para forma normal, qual costuma ser o primeiro passo?",
      options: ["Distribuir ∧ sobre ∨", "Montar a tabela-verdade", "Eliminar → e ↔ usando as equivalências", "Remover todos os parênteses"],
      correct: 2,
      explain: "Como as formas normais só admitem ¬, ∨ e ∧, o primeiro passo é trocar → e ↔ por suas equivalências (A → B ≡ ¬A ∨ B)."
    },
    {
      q: "Pela equivalência da condicional, p → q é equivalente a:",
      options: ["p ∧ q", "¬p ∨ q", "¬p ∧ ¬q", "p ∨ ¬q"],
      correct: 1,
      explain: "A → B ≡ ¬A ∨ B. Essa equivalência já entrega a FND (e a FNC) de p → q: ¬p ∨ q."
    },
    {
      q: "Pela lei de De Morgan, ¬(p ∧ q) é equivalente a:",
      options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "¬(p ∨ q)"],
      correct: 1,
      explain: "De Morgan troca o conectivo e nega cada parte: ¬(A ∧ B) ≡ ¬A ∨ ¬B."
    },
    {
      q: "Qual é a forma normal de ¬(p ∨ q)?",
      options: ["¬p ∨ ¬q", "p ∧ q", "¬p ∧ ¬q", "¬p → ¬q"],
      correct: 2,
      explain: "Por De Morgan, ¬(p ∨ q) ≡ ¬p ∧ ¬q — a negação não pode ficar sobre o ∨, então ela é \"empurrada para dentro\"."
    },
    {
      q: "Qual das fórmulas abaixo já está em FNC?",
      options: ["(p ∨ q) ∧ (r ∨ ¬s)", "(p ∧ q) ∨ r", "¬(p ∨ q)", "p → q"],
      correct: 0,
      explain: "É uma conjunção de disjunções, com negação só sobre proposição simples. (p ∧ q) ∨ r é FND; as outras duas ainda têm ¬ sobre ∨ ou o conectivo →."
    },
    {
      q: "Qual é a FND de p ∧ (q ∨ r)?",
      options: ["(p ∨ q) ∧ (p ∨ r)", "(p ∧ q) ∨ (p ∧ r)", "p ∨ (q ∧ r)", "¬p ∨ q ∨ r"],
      correct: 1,
      explain: "Distribuindo ∧ sobre ∨: A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C). O resultado é uma disjunção de conjunções."
    },
    {
      q: "Qual é a FNC de ¬p ∨ (q ∧ ¬r)?",
      options: ["(¬p ∧ q) ∨ (¬p ∧ ¬r)", "¬p ∧ q ∧ ¬r", "(¬p ∨ q) ∧ (¬p ∨ ¬r)", "(p ∨ q) ∧ (p ∨ r)"],
      correct: 2,
      explain: "Distribuindo ∨ sobre ∧: A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C). O resultado é uma conjunção de disjunções."
    }
  ]
};

/* ===================== PROGRESSO PERSISTENTE ===================== */

const STORAGE_KEY = 'vf-logica-progress';
const TOTAL_QUESTIONS = Object.values(QUESTIONS).reduce(function (sum, arr) { return sum + arr.length; }, 0);

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* storage indisponível ou corrompido — segue sem persistência */ }
  return {};
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) { /* modo privado etc. — o quiz continua funcionando na sessão */ }
}

/* progress[moduleNum] = array de true/false, um por questão respondida */
let progress = loadProgress();

function getAnswers(moduleNum) {
  if (!Array.isArray(progress[moduleNum])) progress[moduleNum] = [];
  return progress[moduleNum];
}

function countCorrect(answers) {
  return answers.filter(function (a) { return a === true; }).length;
}

/* ===================== HOME: PROGRESSO GERAL E CARDS ===================== */

function updateHome() {
  let totalCorrect = 0;
  let totalAnswered = 0;

  Object.keys(QUESTIONS).forEach(function (moduleNum) {
    const answers = getAnswers(moduleNum);
    const correct = countCorrect(answers);
    const total = QUESTIONS[moduleNum].length;
    totalCorrect += correct;
    totalAnswered += answers.length;

    const card = document.querySelector('[data-card="' + moduleNum + '"]');
    if (!card) return;
    card.querySelector('[data-fill]').style.width = (correct / total) * 100 + '%';
    card.querySelector('[data-score]').textContent = correct + ' / ' + total + ' corretas';
  });

  const pct = Math.round((totalCorrect / TOTAL_QUESTIONS) * 100);
  document.getElementById('overallCorrect').textContent = totalCorrect;
  document.getElementById('overallFill').style.width = (totalCorrect / TOTAL_QUESTIONS) * 100 + '%';
  document.getElementById('overallSub').textContent =
    'questões corretas no total (' + pct + '%) — ' + totalAnswered + ' respondidas';
}

/* ===================== RENDERIZAÇÃO DO QUIZ ===================== */

function renderQuestion(moduleNum) {
  const questions = QUESTIONS[moduleNum];
  const answers = getAnswers(moduleNum);
  const index = answers.length; /* retoma da primeira questão não respondida */
  const section = document.querySelector('[data-quiz-module="' + moduleNum + '"]');
  const body = section.querySelector('[data-quiz-body]');
  const statusEl = section.querySelector('[data-status]');

  if (index >= questions.length) {
    const correct = countCorrect(answers);
    statusEl.textContent = 'concluído';
    body.innerHTML = '';

    const results = document.createElement('div');
    results.className = 'q-results';

    const score = document.createElement('p');
    score.className = 'score';
    score.textContent = correct + '/' + questions.length;
    results.appendChild(score);

    const msg = document.createElement('p');
    msg.textContent = 'Você acertou ' + correct + ' de ' + questions.length + ' questões neste módulo.';
    results.appendChild(msg);

    const retry = document.createElement('button');
    retry.className = 'q-retry';
    retry.type = 'button';
    retry.textContent = 'Refazer quiz';
    retry.addEventListener('click', function () {
      progress[moduleNum] = [];
      saveProgress();
      updateHome();
      renderQuestion(moduleNum);
    });
    results.appendChild(retry);

    body.appendChild(results);
    return;
  }

  statusEl.textContent = 'questão ' + (index + 1) + ' de ' + questions.length;

  const q = questions[index];
  body.innerHTML = '';

  const prompt = document.createElement('p');
  prompt.className = 'q-prompt';
  prompt.textContent = q.q;
  body.appendChild(prompt);

  const optsWrap = document.createElement('div');
  optsWrap.className = 'q-options';
  optsWrap.setAttribute('role', 'radiogroup');

  q.options.forEach(function (opt, i) {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.type = 'button';
    btn.textContent = opt;
    btn.addEventListener('click', function () { selectAnswer(moduleNum, i); });
    optsWrap.appendChild(btn);
  });

  body.appendChild(optsWrap);
}

function selectAnswer(moduleNum, choiceIndex) {
  const questions = QUESTIONS[moduleNum];
  const answers = getAnswers(moduleNum);
  const q = questions[answers.length];
  const section = document.querySelector('[data-quiz-module="' + moduleNum + '"]');
  const body = section.querySelector('[data-quiz-body]');
  const buttons = body.querySelectorAll('.q-option');

  buttons.forEach(function (btn, i) {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === choiceIndex) btn.classList.add('incorrect');
  });

  answers.push(choiceIndex === q.correct);
  saveProgress();
  updateHome();

  const feedback = document.createElement('div');
  feedback.className = 'q-feedback';
  feedback.textContent = q.explain;
  body.appendChild(feedback);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'q-next';
  nextBtn.type = 'button';
  nextBtn.textContent = (answers.length < questions.length) ? 'Próxima questão' : 'Ver resultado';
  nextBtn.addEventListener('click', function () { renderQuestion(moduleNum); });
  body.appendChild(nextBtn);
  nextBtn.focus();
}

/* ===================== NAVEGAÇÃO HOME <-> MÓDULO ===================== */

function openModule(num) {
  document.getElementById('home').hidden = true;
  document.querySelectorAll('.module').forEach(function (sec) {
    sec.hidden = sec.dataset.module !== num;
  });
  renderQuestion(num);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
  document.querySelectorAll('.module').forEach(function (sec) { sec.hidden = true; });
  document.getElementById('home').hidden = false;
  updateHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-open]').forEach(function (btn) {
  btn.addEventListener('click', function () { openModule(btn.dataset.open); });
});

document.querySelectorAll('[data-back]').forEach(function (btn) {
  btn.addEventListener('click', showHome);
});

document.getElementById('resetAll').addEventListener('click', function () {
  if (!confirm('Zerar todo o progresso salvo neste navegador?')) return;
  progress = {};
  saveProgress();
  updateHome();
  Object.keys(QUESTIONS).forEach(function (moduleNum) { renderQuestion(moduleNum); });
});

/* ===================== INICIALIZAÇÃO ===================== */

updateHome();
Object.keys(QUESTIONS).forEach(function (moduleNum) { renderQuestion(moduleNum); });