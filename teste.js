// funcao fight:
function batalha(jogador, inimigo) {
    let turno = 1; // variavel conta os turnos
  
    // funcao ataque do jogador
    function turnoDoJogador() {
      console.log(`Turno ${turno}: Sua vez de agir!`);
      console.log('Escolha uma ação: 1 - Atacar, 2 - Recarregar, 3 - Curar, 4 - Fugir');
  
      let acao = prompt('Digite o numero da acao:'); // Recebe acao jogador
  
      if (acao === '1') {
        atacar(); //escolhe atacar
      } else if (acao === '2') {
        recarregar(); // escolhe recarregar
      } else if (acao === '3') {
        curar(); // escolhe curar
      } else if (acao === '4') {
        fugir(); // escolhe fugir
      } else {
        console.log('Acao invalida. Perdeu o turno.'); // caso digitar algo invalido
        turnoDoInimigo(); //passa turno para o inimigo
      }
    }
  
    // funcao jogador atacar
    function atacar() {
      if (jogador.municao > 0) {
        jogador.municao--; // diminui uma bala da municao
        inimigo.vida -= jogador.equipamento1.dano; // diminui o dano da vida do inimigo
        console.log(`Você atacou! Inimigo perdeu ${jogador.equipamento1.dano} de vida. Munição restante: ${jogador.municao}`);
        if (inimigo.vida <= 0) {
          console.log('Você venceu! Inimigo derrotado.');
          return;
        }
        turnoDoInimigo(); // passa o turno para o inimigo
      } else {
        console.log('Sem municao! Recarregar arma.');
        turnoDoJogador(); // retorna para o jogador recarregar
      }
    }
  
  /* Função para recarregar a arma (ainda nao sei como fazer)
    function recarregar() {
      let balasRecarga =
  
      turnoDoInimigo(); // passar para inimigo
    }
  */
  
    // Função para curar o jogador
    function curar() {
      if (jogador.equipamento2.tipo === 'medicamento') {
        jogador.vida += jogador.equipamento2.valor; // cura o jogador com o 'valor' do medicamento
        console.log(`Você curou! Vida atual: ${jogador.vida}`);
        turnoDoInimigo(); // passa o turno para o inimigo
      } else {
        console.log('Você não tem medicamentos.');
        turnoDoJogador(); // retorna para o jogador, pois nao conseguiu curar
      }
    }
  
    // funcao jogador fugir
    function fugir() {
      console.log('voce fugiu da batalha.');
    }
  
    // funcao ataque do inimigo(pesquisei esse comando, nao sei se roda) 
    function turnoDoInimigo() {
      setTimeout(() => { // isso faz o que a funcao seja em segundos no final:
        // rspera r1 segundo antes de atacar
        console.log('Turno do inimigo!');
        jogador.vida -= inimigo.dano; // inimigo ataca o jogador
        console.log(`
          Inimigo atacou! Você perdeu ${inimigo.dano} de vida. Vida atual: ${jogador.vida}
        `);
  
        if (jogador.vida <= 0) {
          console.log('Você foi derrotado. Game Over.');
          return;
        }
  
        turno++; // aumentar o turno
        turnoDoJogador(); // passa o turno para o jogador
      }, 1000); // 1 seg
    }
  
    // comecar o primeiro turno
    turnoDoJogador();
  }
  
  // coisasdo jogador e inimigo
  let jogador = {
    vida: 100, // vida inicial jogador
    municao: 2, // municao no carregador
    equipamento1: {
      // equipamento 1 é a arma
      nome: 'Escopeta',
      dano: 10,
      capacidadeDoCarregador: 2,
      municaoReserva: 10,
    },
    equipamento2: {
      // equipameto 2 é o medicamento
      tipo: 'medicamento',
      valor: 20, // cura
    },
  };
  
  let inimigo = {
    vida: 50, // vida inicial vnimigo
    dano: 5, // dano do inimigo por ataque
  };
  
  //inicia
  batalha(jogador,inimigo);