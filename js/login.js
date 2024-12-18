// Função que redireciona o jogador para a página correspondente
document.getElementById('start-game').addEventListener('click', () => {
    localStorage.setItem("player-name", document.getElementById('player-name').value.trim())
    const playerName = localStorage.getItem("player-name");
    const difficulty = document.getElementById('difficulty').value;

    if (!playerName) {
        alert("Por favor, insira seu nome!");
        return;
    }

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

function verificarSelecionado(){
    console.log("ola")
    const select = document.getElementById('difficulty-ranking');
    const selecionado = select.value;
    if(selecionado == "facil"){
    

    const result = document.getElementById("result");
    result.textContent = localStorage.getItem("ranking")

    }
}

let tempo1 = localStorage.getItem("tempo1");


primeiroLugar.textContent(tempo1);

function displayRanking(difficulty) {
   
    const ranking = JSON.parse(localStorage.getItem(`ranking-${difficulty}`)) || [];

   
    const result = document.getElementById('result');
    result.innerHTML = ''; 

  
    if (ranking.length === 0) {
        result.innerHTML = '<li>Sem registros para esta dificuldade</li>';
        return;
    }

    
    ranking.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.nome} - ${entry.tempo}s`;
        result.appendChild(listItem);
    });
}


document.getElementById('difficulty-ranking').addEventListener('change', (event) => {
    const selectedDifficulty = event.target.value;
    displayRanking(selectedDifficulty); 
});


document.addEventListener('DOMContentLoaded', () => {
    displayRanking('facil'); 
});
