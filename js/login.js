// Função que redireciona o jogador para a página correspondente
document.getElementById('start-game').addEventListener('click', () => {
    localStorage.setItem("player-name", document.getElementById('player-name').value.trim())
    const playerName = localStorage.getItem("player-name");
    const difficulty = document.getElementById('difficulty').value;

    if (!playerName) {
        alert("Por favor, insira seu nome!");
        return;
    }

    // Salvar nome do jogador no localStorage
    sessionStorage.setItem('playerName', playerName);

    // Redireciona para a página de jogo de acordo com a dificuldade
    if (difficulty === 'facil') {
        window.location.href = 'pages/easy.html'; // Página Fácil (4x4)
    } else if (difficulty === 'medio') {
        window.location.href = 'pages/medium.html'; // Página Médio (4x6)
    } else if (difficulty === 'dificil') {
        window.location.href = 'pages/hard.html'; // Página Difícil (4x8)
    }
});

document.getElementById("difficulty-ranking").addEventListener('change', verificarSelecionado);

function verificarSelecionado() {
    console.log("ola")
    const select = document.getElementById('difficulty-ranking');
    const selecionado = select.value;
    const result = document.getElementById("result");
    let rank = null;
    result.innerHTML = "";
    if (selecionado == "facil") {
        rank = JSON.parse(localStorage.getItem("ranking"))
    }
    if (selecionado == "medio") {
        rank = JSON.parse(localStorage.getItem("ranking2"))
    }
    if (selecionado == "dificil") {
        rank = JSON.parse(localStorage.getItem("ranking3"))
    }

    if (rank) {
        
        result.innerHTML = "";
        rank.forEach((ranking, index) => {
            
            result.innerHTML = result.innerHTML + (index + 1) + "° " + ranking.nome + " | " + "tempo : " + ranking.tempo + "<br>"
        });

    }
}


