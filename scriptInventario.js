
// Carregamento da tela com fade do BG
window.addEventListener('load', () => {
    const fadeImage = document.getElementById('bg-inicial');
    fadeImage.style.opacity = 1; // Altera a opacidade para 1 ao carregar a página
    
});

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////>> AQUI FUNÇÕES <<///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function escreverTexto(texto, caixa, tempo) {
    
    caixa.innerHTML=''
    let index = 0;

    function escrever() {
        if (index < texto.length) {
            const char = texto.charAt(index);
            caixa.innerHTML += char === '\n' ? '<br>' : char; // Adiciona uma quebra de linha se necessário
            index++;
            setTimeout(escrever, tempo); // Ajuste a velocidade aqui
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
            
            divArmaEquipada.innerHTML= `<div class="armaEquipada" ><p class="ammunEquip">${array[i].municaoAtual}</p><img id="arma" class="itemEquip" src="${array[i].src}"     alt="${array[i].alt}" style="cursor: pointer;"></div>`
            }
            if(array[i].classe==='medicamento'){
                
            divEquipamentoEquipado.innerHTML= `<img id="vida" class="itemEquip" src="${array[i].src}"     alt="${array[i].alt}" style="cursor: pointer;">`
            }
            if(array[i].classe==='munição'){
                
            divEquipamentoEquipado.innerHTML= `<img id="vida" class="itemEquip" src="${array[i].src}"     alt="${array[i].alt}" style="cursor: pointer;">`
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
                escreverTexto(textoA, container, 108); // Inicia a escrita 
                maquinaDeEscrever.play();
            }, 3000);
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

const divArmaEquipada=document.getElementById('div-arma')
const divEquipamentoEquipado=document.getElementById('div-vida')

const atualizarMunicao=document.querySelector('.ammunEquip')


const modalMapa=document.getElementById('modalMap')

const btnEquip= document.querySelectorAll('.btn-equip')

const boxDanger=document.getElementById('box-danger-div')

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
const btnEquipar=document.getElementById("equipar")
const btnExaminar=document.getElementById("examinar")
const btnDescartar=document.getElementById("descartar")

const boxExaminar=document.getElementById('img-box-container')

 const startBattle=document.getElementById('startBattle')

const modalMap=document.getElementById('modal-map')
const imagemContainer=document.getElementById('inventario-container')

//Areas clicaveis do MODAL MAPA 
const areas = document.querySelectorAll('.areas');


////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////>> AQUI VARIÁVEIS DE TEXTO <</////////////////////////
////////////////////////////////////////////////////////////////////////////////////


const textoA = "28 de setembro. Luz do dia... Os monstros tomaram conta da cidade. \nDe alguma forma... ainda estou viva...";
const textoAberturaDeMapa="Cuidado, as áreas contornadas em veremlho estão infestadas de mortos-vivos. \nVocê deve eliminar-los para receber a recompensa de cada área.\nTente sobreviver..."








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

let descImg=null
//serve para salvar o objeto clicado no inventário
let selectedImage=null;
        //adiciona um evento de clique em cada imagem
        imagens.forEach(imagem => {
            imagem.addEventListener('click', function() {
                descImg=this
                selectedImage=this.alt//aqui vai vir o objeto da imagem clicada, no futuro
                //agora só está salvando o objeto já foi criado a cima

                //apresenta o texto alt baseado na imagem clicada
               

               
                //mostra o modal depois de atualizad o texto que será apresentado
                confirmEquip.showModal()
                
                somClick.currentTime = 0.3; // Reinicia o som
                 somClick.play();

                 

                // MENU DE INTERAÇÃO QUANDO CLICA EM UMA IMAGEM DO INVENTÁRIO

                btnEquip.forEach(btn=>{
                    //Som desses botões HOVER
                    btn.addEventListener('mouseover', function(){
                        somHover.currentTime = 0.3; // Reinicia o som
                        somHover.play();
                     });
                    //som Click
                    btn.addEventListener('click', function(){
                        somClick.currentTime = 0.3; // Reinicia o som
                        somClick.play();
                    });
                    
                });



                // EQUIPAR
                btnEquipar.onclick=function(){
                    if(selectedImage){
                        equipar(armas,selectedImage)
                        somClick.currentTime = 0.3; // Reinicia o som
                        somClick.play();
                        confirmEquip.close()
                    }
                }


                // EXAMINAR
                btnExaminar.onclick=function(){

                    //Adiciona a imagem que foi clicada no BOX-M 
                    boxExaminar.innerHTML=`<img id="img-box-m" src="${imagem.src}">`
                    somClick.currentTime = 0.3; // Reinicia o som
                        somClick.play();                        
                        confirmEquip.close()

                        //Aqui serve para buscar o item com alt igual da imagem para pegar a descrição 
                        for (let i = 0; i < armas.length; i++) {
                            if (armas[i].alt === imagem.alt) {
                                escreverTexto( armas[i].descricao,container, 50)
                            }}
                             
                            //ESC para apagar o HTML da imagem e o texto do box-P
                            document.addEventListener('keydown', function(event) {
                                // Verifica se a tecla pressionada é a tecla "Esc"
                                if (event.key === 'Escape') {
                                    boxExaminar.innerHTML=""
                                    container.innerHTML=""
                                }
                            });
                       
                       
                }

                // DESCARTAR

                btnDescartar.onclick=function(){
                    imagem.remove();
                    fechar.play()
                    fechar.currentTime = 0.5;
                    confirmEquip.close()
                }





               
               
            });
            //aqui acontece o som em cima de cada imagem
            //deve ser dentro do forEach para que ocorra em cada imagem
            imagem.addEventListener('mouseover', function() {
                somHover.currentTime = 0.3; // Reinicia o som
                somHover.play(); // Toca o som
                
            });

                 //Fecha o Modal se eu clicar fora da caixa do modal
                 window.addEventListener('click', function(event) {
                    if (event.target === confirmEquip) {
                        fechar.play()
                        fechar.currentTime = 0.5;
                        confirmEquip.close(); // Fecha o modal
                    }
                });
            
        });


////////////////////////////////////////////////////////////////////////////////////
//////////////////////>> AQUI MENU NAV DO INVENTÁRIO <</////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


let primeiroStart=true

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

                
                    if(primeiroStart){
                        startBattle.showModal()
                        primeiroStart=false
                        }
                        escreverTexto(textoAberturaDeMapa,boxDanger,50)
                        window.addEventListener('click', function(event) {
                            if (event.target === startBattle) {
                                fechar.play()
                                fechar.currentTime = 0.5;
                                startBattle.close(); // Fecha o modal
                                boxDanger.innerHTML=''
                            }
                        });

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

                if(div.id==='file'){

                    armas[0].municaoAtual-=1
                    atualizarMunicao.innerHTML=armas[0].municaoAtual
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
        descricao:'Compacta e letal, ela permite disparos rápidos em momentos de desespero. Cada bala é preciosa, exigindo que você mire com precisão, pois os mortos-vivos estão sempre à espreita.',
        src:"./img/pistola.png"
        
    },
    {
        classe:'arma',
        alt:"Escopeta",
        capacidadeCarregador:7,
        municaoAtual:7,
        reserva:45,
        descricao:'A escopeta é a arma definitiva para enfrentar hordas de zumbis. Com seu cano longo e potente, ela oferece um poder de parada devastador, capaz de eliminar múltiplos inimigos com um único disparo.',
        src:"./img/escopeta.png"
        
    },
    {
        classe:'arma',
        alt:"Faca",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'',
        descricao:'A faca é uma arma silenciosa e letal, perfeita para a sobrevivência em um mundo tomado por zumbis. Compacta e fácil de manusear',
        src:"./img/faca.png"
        
    },
    {
        classe:'medicamento',
        alt:"Erva",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'',
        descricao:'As ervas medicinais são aliadas essenciais na luta pela sobrevivência. Elas oferecem uma fonte valiosa de cura e revitalização',
        src:"./img/erva.png"
        
    },
    {
        classe:'medicamento',
        alt:"Erva extraída",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'',
        descricao:'Erva medicinal tratada e adiciona a uma bandagem, tem maior eficácia no tratamento de feridas',
        src:"./img/erva extraída.png"
        
    },
    {
        classe:'munição',
        alt:"Munição",
        capacidadeCarregador:'',
        municaoAtual:'',
        reserva:'25',
        descricao:`Munição de Pistola 9mm com munição reserva`,
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

function moverJogador(quadrado){

areas.forEach(area=>{
    area.innerHTML= area.innerHTML.replace(/<img.*?>/, '')
    
})
const jogadorImg =`<img class="player" src="/img/Jill.webp" ></img>`
quadrado.innerHTML += jogadorImg;
}
//para não repetir o aviso vermelho ao clicar no mapa 2x


areas.forEach(area => {
    area.addEventListener('click', function() {
        moverJogador(area);
        
    });
});
   //Fecha o Modal se eu clicar fora da caixa do modal
   
