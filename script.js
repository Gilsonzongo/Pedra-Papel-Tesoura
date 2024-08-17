const jogadasDisponiveis = ["pedra", "papel", "tesoura"];
let wins = 0;
let losses = 0;
let ties = 0;
let pontoUsuario = 0;
let pontoComputador = 0;

function pontuacoes(resultado, jogadaComputador) {
  if (resultado === "empate") {
    ties++;

    alert(`EMPATE, o jogador fez a mesma jogada`);
  } else if (resultado === "ganhou") {
    pontoUsuario++;
    wins++;

    alert(`GANHOU, o computador jogou ${jogadaComputador}`);
  } else if (resultado === "perdeu") {
    pontoComputador++;
    losses++;

    alert(`PERDEU, o computador jogou ${jogadaComputador}`);
  }

  document.querySelector("#pontuacaoUsuario").innerText = pontoUsuario;
  document.querySelector("#wins").innerText = wins;
  document.querySelector("#losses").innerText = losses;
  document.querySelector("#ties").innerText = ties;
  document.querySelector("#pontuacaoComputador").innerText = pontoComputador;
}

function jogar(jogadaDoUsuario) {
  const jogadaAleatoria = Math.floor(Math.random() * 3);
  const jogadaDoComputador = jogadasDisponiveis[jogadaAleatoria];

  if (jogadaDoComputador === jogadaDoUsuario) {
    pontuacoes("empate", jogadaDoComputador);
  } else {
    const regras = { pedra: "tesoura", papel: "pedra", tesoura: "papel" };

    if (jogadaDoUsuario === regras[jogadaDoComputador]) {
      pontuacoes("perdeu", jogadaDoComputador);
    } else {
      pontuacoes("ganhou", jogadaDoComputador);
    }
  }
}
