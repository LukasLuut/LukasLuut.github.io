
// Carregamento da tela com fade do BG
window.addEventListener('load', () => {
    const fadeImage = document.getElementById('bg-inicial');
    fadeImage.style.opacity = 1; // Altera a opacidade para 1 ao carregar a página
    
});

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////>> AQUI FUNÇÕES <<///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function escreverTexto(texto) {
    
    const container = document.getElementById('box-dialogo-p');
    let index = 0;

    function escrever() {
        if (index < texto.length) {
            const char = texto.charAt(index);
            container.innerHTML += char === '\n' ? '<br>' : char; // Adiciona uma quebra de linha se necessário
            index++;
            setTimeout(escrever, 108); // Ajuste a velocidade aqui
        }
    }

    escrever(); // Inicia a escrita
}


//Array deve ser o inventário do jogador 
//alt está dentro do loop das imagens do inventário que busca a propriedade "alt" no HTML
function equipar(array, alt) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].alt === alt) {
            if(array[i].classe==='arma'){
            const divExistente=document.getElementById('div-arma')
            divExistente.innerHTML= `<img id="arma" class="itemEquip" src="${array[i].src}"     alt="${array[i].alt}" style="cursor: pointer;">`
            }
            if(array[i].classe==='medicamento'){
                const divExistente=document.getElementById('div-vida')
            divExistente.innerHTML= `<img id="vida" class="itemEquip" src="${array[i].src}"     alt="${array[i].alt}" style="cursor: pointer;">`
            }
            if(array[i].classe==='munição'){
                const divExistente=document.getElementById('div-vida')
            divExistente.innerHTML= `<img id="vida" class="itemEquip" src="${array[i].src}"     alt="${array[i].alt}" style="cursor: pointer;">`
            }


        }}}

function start(){ 
            const fadeImage = document.getElementById('bg-inicial');
            fadeImage.style.opacity = 0; // para sumir a imagem
            somStartRe.currentTime = 0.6; //  o som
                somStartRe.play();
        
                const element = document.documentElement; // O elemento que deseja colocar em tela cheia
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) { // Firefox
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) { // Chrome, Safari e Opera
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) { // IE/Edge
                    element.msRequestFullscreen();
                }
        
            setTimeout(() => {
        
                //Aqui o display é alterado
                trocaPagina1.style.display='none' 
                trocaPagina2.style.display='flex' 
                musicaDeFundo.play()
                musicaBG.pause()
                escreverTexto(textoA); // Inicia a escrita 
                maquinaDeEscrever.play();
            }, 3500);
        }

















/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//--------------------VOLUME DA MÚSICA-------------------------//
const fechar=document.getElementById('fechar')
fechar.volume=0.1;

const glitchSom=document.getElementById('glitch')
glitchSom.volume=0.1;
glitchSom.playbackRate=0.9;

const maquinaDeEscrever=document.getElementById('maquina-de-escrever')
maquinaDeEscrever.volume=1
maquinaDeEscrever.playbackRate=1.5;

const somStartRe=document.getElementById('re-btn')
somStartRe.volume=0.1

const musicaBG = document.getElementById('musicaTelaStart');
musicaBG.volume = 0.3;

const musicaDeFundo = document.getElementById('musicaDeFundo');
musicaDeFundo.volume = 0.3; 

const somHover = document.getElementById("somHover")
somHover.volume=0.1;

const somClick= document.getElementById("somClick")
somClick.volume=0.1

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//-----------------DECLARAÇÃO DE VÁRIÁVEIS DO HTML-----------------//
const modalMapa=document.getElementById('modalMap')



//Aqui são as varáveis para alterar o tipo de display de cada parte do HTML
const trocaPagina1=document.getElementById('display-Inicial')
const trocaPagina2=document.getElementById('display-inventario')
const btnStart=document.getElementById('btnStart')
//busca o local onde está equipada arma
const armaEquipada=document.getElementById("arma")
//const da caixa de digitação de texto
const container = document.getElementById('box-dialogo-p');
let index = 0;

//const do menu NAV do inventário
const menuNav = document.querySelectorAll('.nav1');

//const do modal de confirmação de equipamento
const confirmEquip= document.getElementById("confirm-equipar")

//const da lista de imagens do inventário
const imagens = document.querySelectorAll('.item1');

//botão SIM e NÃO do Modal
const btnSim=document.getElementById("btn-sim")
const btnNao=document.getElementById("btn-nao")

//texto que aparece no modal de confirmação 
const html=document.getElementById("text")
const modalMap=document.getElementById('modal-map')
const imagemContainer=document.getElementById('inventario-container')


const textoA = "28 de setembro. Luz do dia... Os monstros tomaram conta da cidade. \nDe alguma forma... ainda estou viva...";


//Botão de Start
//Com som
//Faz o BG sumir aos poucos 
//Pausa a música do BG
//Deixa a tela em fullScreen
//Muda o display de alguns containers 
//Da play na música do inventário


btnStart.addEventListener('click', () => {start()});
btnStart.addEventListener('mouseover', function() {
    glitchSom.currentTime = 0.5; // Reinicia o som
    glitchSom.play(); // Toca o som
    
});


////////////////////////////////////////////////////////////////////////////////////
///////////////////////////>>AQUI FUNCIONALIDADES DO MENU<</////////////////////////
////////////////////////////////////////////////////////////////////////////////////



//modal de confirmação para equipar
//pode ser implementado para apresentar descrição dos itens e apresentar 
//itens dropados pelos mostros mortos


//serve para salvar o objeto clicado no inventário
let selectedImage=null;
        //adiciona um evento de clique em cada imagem
        imagens.forEach(imagem => {
            imagem.addEventListener('click', function() {

                selectedImage=this.alt//aqui vai vir o objeto da imagem clicada, no futuro
                //agora só está salvando o objeto já foi criado a cima

                //apresenta o texto alt baseado na imagem clicada
                html.innerHTML=`<p>Você deseja equipar ${imagem.alt}?</p>`

               
                //mostra o modal depois de atualizad o texto que será apresentado
                confirmEquip.showModal()
                
                somClick.currentTime = 0.3; // Reinicia o som
                 somClick.play();

                //se clicar no botão sim, equipa o item
                //no momento só equipa o item de testes
                btnSim.onclick=function(){
                    if(selectedImage){
                        equipar(armas,selectedImage)
                        somClick.currentTime = 0.3; // Reinicia o som
                        somClick.play();
                        confirmEquip.close()
                    }
                }

                //quando clica em NÃO, fecha o Modal
                btnNao.onclick = function() {
                    confirmEquip.close() 
                    fechar.play()
                    fechar.currentTime = 0.6;// Fecha o modal
                };
               
            });
            //aqui acontece o som em cima de cada imagem
            //deve ser dentro do forEach para que ocorra em cada imagem
            imagem.addEventListener('mouseover', function() {
                somHover.currentTime = 0.3; // Reinicia o som
                somHover.play(); // Toca o som
                
            });
            
        });
////////////////////////////////////////////////////////////////////////////////////
//////////////////////>> AQUI MENU NAV DO INVENTÁRIO <</////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

        menuNav.forEach(div => {
            div.addEventListener('mouseover', function() {
                somHover.currentTime = 0.3; // Reinicia o som
                somHover.play(); // Toca o som de hover
            });

            div.addEventListener('click', function() {
                somClick.currentTime = 0.3; // Reinicia o som
                somClick.play(); // Toca o som de clique
                if(div.id==='mapClick'){
                    modalMapa.showModal()
                    window.addEventListener('click', function(event) {
                        if (event.target === modalMapa) {
                            fechar.play()
                            fechar.currentTime = 0.5;
                            modalMapa.close(); // Fecha o modal
                        }
                    });
                }

                //aqui ele para várias coisas 
                if(div.id==='exit'){
                    trocaPagina1.style.display='flex' 
                    trocaPagina2.style.display='none'
                    musicaDeFundo.pause()
                    musicaBG.play()
                    const fadeImage = document.getElementById('bg-inicial');
                    fadeImage.style.opacity = 1;
                    maquinaDeEscrever.pause()
                    const container = document.getElementById('box-dialogo-p');
                    container.innerHTML=''
                    
                }
                
            });
        });





////////////////////////////////////////////////////////////////////////////////////
//////////////////////>>AQUI ARRAY COM OS ITENS E OBJETOS<<////////////////////////
////////////////////////////////////////////////////////////////////////////////////
       



//array é um array de armas
/*function equipar(array, alt) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].alt === alt) {
            const novaDiv = document.createElement('div');
            novaDiv.className = 'item';
            novaDiv.innerHTML = `
                <p class="ammun">${array[i].municaoAtual}</p>
                <img class="item1" src="${array[i].src}" alt="${array[i].alt}" style="cursor: pointer">
            `;

            // Adiciona o listener de clique à nova imagem
            novaDiv.querySelector('img').addEventListener('click', function() {
                
                confirmEquip.showModal()
                
                somClick.currentTime = 0.3; // Reinicia o som
                 somClick.play();

                //se clicar no botão sim, equipa o item
                //no momento só equipa o item de testes
                btnSim.onclick=function(){
                    if(selectedImage){
                        equipar(armas,selectedImage)
                        confirmEquip.close()
                    }
                }

                //quando clica em NÃO, fecha o Modal
                btnNao.onclick = function() {
                    confirmEquip.close() // Fecha o modal
                };
                
                
            });

            // Adiciona o listener de hover à nova imagem
            novaDiv.querySelector('img').addEventListener('mouseover', function() {
                somHover.currentTime = 0.3; // Reinicia o som
                somHover.play(); // Toca o som
            });

            const inventarioContainer = document.getElementById('inventario-container');
            inventarioContainer.appendChild(novaDiv);
            
        }
    }
}
*/


const armas=[
    {
        classe:'arma',
        alt:"Pistola",
        capacidadeCarregador:15,
        municaoAtual:15,
        reserva:45,
        descricao:'',
        src:"./img/pistola.png"
        
    },
    {
        classe:'arma',
        alt:"Escopeta",
        capacidadeCarregador:7,
        municaoAtual:7,
        reserva:45,
        descricao:'',
        src:"./img/escopeta.png"
        
    },
    {
        classe:'arma',
        alt:"Faca",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'',
        descricao:'',
        src:"./img/faca.png"
        
    },
    {
        classe:'medicamento',
        alt:"Erva",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'',
        descricao:'',
        src:"./img/erva.png"
        
    },
    {
        classe:'medicamento',
        alt:"Erva extraída",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'',
        descricao:'',
        src:"./img/erva extraída.png"
        
    },
    {
        classe:'munição',
        alt:"Munição",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'25',
        descricao:'',
        src:"./img/bala.png"
        
    },
    

]  

//Função para recarregar a arma
/*
   let jogador={
        vida:10,
        equip1:{
            tipo:"pistola 9mm",
            dano:10,
            capacidadeCarregador:15,
            municaoAtual:15,
            reserva:45,
            },
        equip2:{

        },
        dano:jogador.equi1.dano,
        inventario:{
        }
    }


  function recarregar(jogador) {
        //verifica se o jogador tem munição suficiente para colocar no carregador
    if(jogador.equip1.reserva>=jogador.equip1.capacidadeCarregador){

        //Cria uma variável com o valor que sobrou no carregador, caso recarregar antes da munição chegar a 0
        let municaoSobressalente = jogador.equip1.municaoAtual

        //Coloca na munição atual, o valor que cabe no carregador
    jogador.equip1.municaoAtual=jogador.equip1.capacidadeCarregador

    //Diminui da reserva, o valor utilizado, considerando se tiver sobrado no carregador
    jogador.equip1.reserva-=capacidadeCarregador-municaoSobressalente
}

    turnoDoInimigo(); // passar para inimigo
}*/


////////////////////////////////////////////////////////////////////////////////////
//////////////////////>>AQUI INTERAÇÃO COM MODAL DO MAPA<<//////////////////////////
////////////////////////////////////////////////////////////////////////////////////



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

//aqui serve para comandar o player no mapa
//ele vai para a area clicada e apaga da area anterior no HTML
const areas = document.querySelectorAll('.areas');
function moverJogador(quadrado){

areas.forEach(area=>{
    area.innerHTML= area.innerHTML.replace(/<img.*?>/, '')
})
const jogadorImg =`<img class="player" src="/img/Jill.webp" ></img>`
quadrado.innerHTML += jogadorImg;
}

areas.forEach(area => {
    area.addEventListener('click', function() {
        moverJogador(area);
    });
});