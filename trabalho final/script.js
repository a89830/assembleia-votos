document.addEventListener('DOMContentLoaded', function () {
  const toggleFormBtn1 = document.getElementById('toggleFormBtn1');
  const toggleFormBtn2 = document.getElementById('toggleFormBtn2');
  const loginFields = document.getElementById('loginFields');
  const registerFields = document.getElementById('registerFields');
  const participarSection = document.getElementById('participar');
  const criarSessaoSection = document.getElementById('criarSessao');
  const iniciarSessaoBtn = document.getElementById('iniciaSessaoBtn');
  const organizarBtn = document.getElementById('organizar_btn');
  const participarBtn = document.getElementById('participar_btn');

  const menu = document.getElementById('menu');
  const voltarInicioBtn = document.getElementById('voltarinicio_btn');
  const gerirSessaoBtn = document.getElementById('gerirsessao_btn');
  const voltarDaGestaoBtn = document.getElementById('voltarDaGestaoBtn');

  const vistaBtns = document.getElementById('vistaBtns');
  const vistaSalaBtn = document.getElementById('vistaSala_btn');
  const vistaParticipantesBtn = document.getElementById('vistaParticipantes_btn');

  // Inicialização ao carregar a página (ou após refresh)
  function resetPageState() {
    // Esconde o menu inicialmente
    menu.style.display = 'none';

    // Layout inicial como se tivesse clicado em "Organizar"
    loginFields.style.display = 'flex';
    registerFields.style.display = 'none';
    criarSessaoSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'block';
    toggleFormBtn2.style.display = 'block';

    // Exibindo os botões "Participar" e "Organizar" no layout inicial
    participarBtn.style.display = 'block';
    organizarBtn.style.display = 'block';

    // Esconde os campos específicos quando não estiver no layout "Participar" ou "Organizar"
    participarSection.style.display = 'none';
    vistaBtns.style.display = 'none'; // Inicialmente escondido
  }

  // Chama a função para garantir que a página começa no estado correto
  resetPageState();

  // Botão "Participar"
  participarBtn.addEventListener('click', () => {
    participarSection.style.display = 'flex';
    loginFields.style.display = 'none';
    registerFields.style.display = 'none';
    criarSessaoSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'none';
    toggleFormBtn2.style.display = 'none';
  });

  // Botão "Organizar"
  organizarBtn.addEventListener('click', () => {
    participarSection.style.display = 'none';
    loginFields.style.display = 'flex';
    registerFields.style.display = 'none';
    criarSessaoSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'block';
    toggleFormBtn2.style.display = 'block';
  });

  // Botão "Criar Conta" (do layout Organizar)
  toggleFormBtn2.addEventListener('click', () => {
    loginFields.style.display = 'none';
    registerFields.style.display = 'flex';
    criarSessaoSection.style.display = 'none';
    participarSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'none';
    toggleFormBtn2.style.display = 'none';
    participarBtn.style.display = 'none';
    organizarBtn.style.display = 'none';
  });

  // Botão "Voltar ao Login" (layout de registo)
  toggleFormBtn1.addEventListener('click', () => {
    registerFields.style.display = 'none';
    loginFields.style.display = 'flex';
    criarSessaoSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'block';
    toggleFormBtn2.style.display = 'block';
    participarBtn.style.display = 'block';
    organizarBtn.style.display = 'block';
  });

  // Botão "Iniciar Sessão"
  iniciarSessaoBtn.addEventListener('click', () => {
    loginFields.style.display = 'none';
    registerFields.style.display = 'none';
    participarSection.style.display = 'none';
    criarSessaoSection.style.display = 'block';
    iniciarSessaoBtn.style.display = 'none';
    toggleFormBtn2.style.display = 'none';
    menu.style.display = 'none'; // Esconde o menu ao iniciar sessão
    // Garantir que os botões "Participar" e "Organizar" sejam escondidos
    participarBtn.style.display = 'none';
    organizarBtn.style.display = 'none';
  });

  // Botão "Criar Sessão"
  const criarSessaoBtn = document.getElementById('criarsessao_btn');
  criarSessaoBtn.addEventListener('click', () => {
    const nomeSessao = document.querySelector('input[name="nomesessao"]').value.trim();
    if (nomeSessao === '') {
      alert('Por favor, insira um nome para a sessão.');
      return;
    }

    alert(`Sessão "${nomeSessao}" criada com sucesso!`);
    menu.style.display = 'block';  // Exibe o menu ao criar a sessão
    criarSessaoSection.style.display = 'none';  // Esconde a seção de criação de sessão

    // Exibe os botões "Vista da Sala" e "Vista de Participantes"
    vistaBtns.style.display = 'block';
  });

  // Botão "Voltar Ao Início"
  voltarInicioBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    criarSessaoSection.style.display = 'none';
    loginFields.style.display = 'flex';
    toggleFormBtn2.style.display = 'block';
    iniciarSessaoBtn.style.display = 'block';

    // Exibe novamente os botões "Participar" e "Organizar"
    participarBtn.style.display = 'block';
    organizarBtn.style.display = 'block';

    // Esconde os botões de vista ao voltar ao início
    vistaBtns.style.display = 'none';

    salaView.style.display = 'none';
    salaMembers.style.display = 'none'; // << esta linha é essencial

    // Esconde também todos os h2 que ficaram visíveis
    document.getElementById('propostaAtual').style.display = 'none';
    document.getElementById('participantes').style.display = 'none';
    document.getElementById('Nome').style.display = 'none';
    document.getElementById('Votos').style.display = 'none';
    document.getElementById('Assento').style.display = 'none';
  });

  // Botão "Gerir Sessão"
  // Botão "Gerir Sessão"
  gerirSessaoBtn.addEventListener('click', () => {
    // Esconde tudo
    document.querySelector('form').style.display = 'none';
    menu.style.display = 'none';
    vistaBtns.style.display = 'none';
    salaView.style.display = 'none';
    salaMembers.style.display = 'none';
    voltarDaGestaoBtn.style.display = 'none';
  
    // Esconde elementos de texto e sessões
    [
      'propostaAtual', 'participantes', 'Nome', 'Votos', 'Assento',
      'sala', 'nomeSessaoExibido'
    ].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  
    // Mostra apenas o quadrado
    document.getElementById('quadradoGerirSessao').style.display = 'block';
  });
  

// Botão "Voltar" do modo Gerir Sessão
voltarDaGestaoBtn.addEventListener('click', () => {
  // Esconde a interface de gestão de sessão
  criarSessaoSection.style.display = 'none';

  // Exibir o menu novamente
  menu.style.display = 'block';

  // Esconde o botão "Voltar"
  voltarDaGestaoBtn.style.display = 'none';

  // Exibir os botões "Vista da Sala" e "Vista de Participantes" novamente
  vistaBtns.style.display = 'block';
});


  // Botão "Vista da Sala"
  vistaSalaBtn.addEventListener('click', () => {
    // Esconde todos os campos do formulário
    loginFields.style.display = 'none';
    registerFields.style.display = 'none';
    criarSessaoSection.style.display = 'none';
    participarSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'none';
    toggleFormBtn2.style.display = 'none';
    salaMembers.style.display = 'none';

    // Mostra apenas o nome da sessão
    const nomeSessao = document.querySelector('input[name="nomesessao"]').value.trim();
    const nomeSessaoExibido = document.getElementById('nomeSessaoExibido');
    nomeSessaoExibido.textContent = `Sessão: ${nomeSessao}`;
    document.getElementById('salaView').style.display = 'block';
    document.getElementById('propostaAtual').style.display = 'block';
    document.getElementById('sala').style.display = 'block';
  });

  vistaParticipantesBtn.addEventListener('click', () => {
    // Esconde tudo o resto
    loginFields.style.display = 'none';
    registerFields.style.display = 'none';
    criarSessaoSection.style.display = 'none';
    participarSection.style.display = 'none';
    iniciarSessaoBtn.style.display = 'none';
    toggleFormBtn2.style.display = 'none';
    salaView.style.display = 'none';

    // Mostrar os elementos da vista de participantes
    document.getElementById('salaMembers').style.display = 'block';
    document.getElementById('propostaAtual').style.display = 'block';
    document.getElementById('participantes').style.display = 'block';
    document.getElementById('Nome').style.display = 'block';
    document.getElementById('Votos').style.display = 'block';
    document.getElementById('Assento').style.display = 'block';
  });

  // Quadrado interativo
  const quadrado = document.getElementById("quadrado");
  let tamanhoAtual = 100;
  
  function atualizarQuadrado() {
    quadrado.style.width = tamanhoAtual + "px";
    quadrado.style.height = tamanhoAtual + "px";
  
    // Define número de células baseado no tamanho (ex: uma célula a cada 20px)
    const celulasPorLinha = Math.floor(tamanhoAtual / 20);
    quadrado.innerHTML = ''; // Limpa células antigas
  
    quadrado.style.gridTemplateColumns = `repeat(${celulasPorLinha}, 1fr)`;
    quadrado.style.gridTemplateRows = `repeat(${celulasPorLinha}, 1fr)`;
  
   for (let i = 0; i < celulasPorLinha * celulasPorLinha; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  cell.textContent = i + 1; // Número do lugar

  // Evento de clique para selecionar lugar
  cell.addEventListener('click', () => {
    cell.classList.toggle('selected-seat');
  });

  quadrado.appendChild(cell);
}

  }
  
  document.getElementById("aumentarBtn").addEventListener("click", () => {
    tamanhoAtual += 20;
    atualizarQuadrado();
  });
  
  document.getElementById("diminuirBtn").addEventListener("click", () => {
    if (tamanhoAtual > 40) {
      tamanhoAtual -= 20;
      atualizarQuadrado();
    }
  });
  
  // Inicializar quadrado na primeira vez
  atualizarQuadrado();
  
});
