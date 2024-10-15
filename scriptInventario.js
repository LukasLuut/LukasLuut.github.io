window.addEventListener('load', () => {
    const fadeImage = document.getElementById('bg-inicial');
    fadeImage.style.opacity = 1; // Altera a opacidade para 1 ao carregar a página
    
});

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////
       //--------------------VOLUME DA MÚSICA-------------------------//
       
       const musicaBG = document.getElementById('musicaTelaStart');
       musicaBG.volume = 0.2;
       
       const musicaDeFundo = document.getElementById('musicaDeFundo');
       musicaDeFundo.volume = 0.5; // 50% de volume

       const somHover = document.getElementById("somHover")
       somHover.volume=0.05;

       const somClick= document.getElementById("somClick")
       somClick.volume=0.05
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////

//Aqui são as varáveis para alterar o tipo de display de cada parte do HTML
const trocaPagina1=document.getElementById('display-Inicial')
const trocaPagina2=document.getElementById('display-inventario')


const somStartRe=document.getElementById('re-btn')
const btnStart=document.getElementById('btnStart')

btnStart.addEventListener('click', () => {
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
    }, 3500);
}); 










//função para subistituir img da arma, pode ser implementado para funções javascript
function equip(item1,item2){
item1.src=item2.src

}
//objeto de exeplo para testes
itemPistola={
    tipo:"Pistola 9mm",
    capacidadeCarregador:15,
    municaoAtual:15,
    reserva:45,
    src:"./img/escopeta.png"
}
//busca o local onde está equipada arma
const equipa=document.getElementById("arma")




        




////////////////////////////////////////////////////////////////////////////////////
///////////////////////////>>AQUI FUNCIONALIDADES DO MENU<</////////////////////////
////////////////////////////////////////////////////////////////////////////////////











//serve para salvar o objeto clicado no inventário
let selectedImage=null;
//equip(equipa,itemPistola)

//modal de confirmação para equipar
//pode ser implementado para apresentar descrição dos itens e apresentar 
//itens dropados pelos mostros mortos
const confirmEquip= document.getElementById("confirm-equipar")
const imagens = document.querySelectorAll('.item');
const btnSim=document.getElementById("btn-sim")
const btnNao=document.getElementById("btn-nao")
const html=document.getElementById("text")
const modalMap=document.getElementById('modal-map')

        //adiciona um evento de clique em cada imagem
        imagens.forEach(imagem => {
            imagem.addEventListener('click', function() {
                selectedImage=itemPistola//aqui vai vir o objeto da imagem clicada, no futuro
                //agora só está salvando o objeto já foi criado a cima

                //apresenta o texto alt baseado na imagem clicada
                html.innerHTML=`<p>Você deseja equipar ${this.alt}?</p>`

               
                //mostra o modal depois de atualizad o texto que será apresentado
                confirmEquip.showModal()
                
                somClick.currentTime = 0.3; // Reinicia o som
        somClick.play();

                //se clicar no botão sim, equipa o item
                //no momento só equipa o item de testes
                btnSim.onclick=function(){
                    if(selectedImage){
                        equip(equipa,selectedImage)
                        confirmEquip.close()
                    }
                }

                //quando clica em NÃO, fecha o Modal
                btnNao.onclick = function() {
                    confirmEquip.close() // Fecha o modal
                };
               
            });
            //aqui acontece o som em cima de cada imagem
            //deve ser dentro do forEach para que ocorra em cada imagem
            imagem.addEventListener('mouseover', function() {
                somHover.currentTime = 0.3; // Reinicia o som
                somHover.play(); // Toca o som
            });
            
        });
       


       

        





