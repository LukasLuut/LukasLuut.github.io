function equip(item1,item2){
item1.src=item2.src

}






itemPistola={
    tipo:"Pistola 9mm",
    capacidadeCarregador:15,
    municaoAtual:15,
    reserva:45,
    src:"./img/pistola.png"
}

const equipa=document.getElementById("arma")

equip(equipa,itemPistola)
