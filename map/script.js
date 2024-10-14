// inicia funcao depois de clicar:
function iniciarBatalha(areaId) {
    alert("Você iniciou uma batalha na " + areaId + "!"); 
    
    // Simula a batalha (falta arrumar a funcao de batalha):
    setTimeout(function() {
        alert("Você venceu a batalha!"); 
        mostrarVitoria(areaId);
    }, 2000); // duracao da batalha esta em2 segundos (modificar)
}

// funcao que mostra a imagem de vitoria com area clicada:

function mostrarVitoria(areaId) {
    if (areaId === 'area1') {
        document.querySelector('.popup-image1').style.display = 'block';
    } else if (areaId === 'area2') {
        document.querySelector('.popup-image2').style.display = 'block';
    } else if (areaId === 'area3') {
        document.querySelector('.popup-image3').style.display = 'block';
    }
}

// add eventos de clique para cada área do mapa:

document.getElementById('area1').addEventListener('click', function() {
    iniciarBatalha('Área 1'); // inicia a batalha na area1
});
document.getElementById('area2').addEventListener('click', function() {
    iniciarBatalha('Área 2'); // inicia a batalha na area2
});
document.getElementById('area3').addEventListener('click', function() {
    iniciarBatalha('Área 3'); // inicia a batalha na area3
});


