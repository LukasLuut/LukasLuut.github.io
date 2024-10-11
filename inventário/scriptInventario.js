
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

//serve para salvar o objeto clicado no inventário
let selectedImage=null;
//equip(equipa,itemPistola)

//modal de confirmação para equipar
//pode ser implementado para apresentar descrição dos itens e apresentar 
//itens dropados pelos mostros mortos
const modal= document.querySelector("dialog")
const imagens = document.querySelectorAll('.item');
const btnSim=document.getElementById("btn-sim")
const btnNao=document.getElementById("btn-nao")
const html=document.getElementById("text")


        /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////
       //--------------------VOLUME DA MÚSICA-------------------------//
       const musicaDeFundo = document.getElementById('musicaDeFundo');
       musicaDeFundo.volume = 0.1; // 50% de volume

       const somHover = document.getElementById("somHover")
       somHover.volume=0.2;
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////




        //adiciona um evento de clique em cada imagem
        imagens.forEach(imagem => {
            imagem.addEventListener('click', function() {
                selectedImage=itemPistola//aqui vai vir o objeto da imagem clicada, no futuro
                //agora só está salvando o objeto já foi criado a cima

                //apresenta o texto alt baseado na imagem clicada
                html.innerHTML=`<p>Você deseja equipar ${this.alt}?</p>`

               
                //mostra o modal depois de atualizad o texto que será apresentado
                modal.showModal()
                
                
                //se clicar no botão sim, equipa o item
                //no momento só equipa o item de testes
                btnSim.onclick=function(){
                    if(selectedImage){
                        equip(equipa,selectedImage)
                        modal.close()
                    }
                }

                //quando clica em NÃO, fecha o Modal
                btnNao.onclick = function() {
                    modal.close() // Fecha o modal
                };
               
            });

            imagem.addEventListener('mouseover', function() {
                somHover.currentTime = 0.3; // Reinicia o som
                somHover.play(); // Toca o som
            });
        });
       










