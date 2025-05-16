let pedido = 3;
let nomeCombo = "";
let preco = 0;

switch (pedido){
    case 1:
        nomeCombo = "Batata + suco";
        preco = 12;
        break;
    case 2:
        nomeCombo = "Hamburger";
        preco = 15;
        break;
    case 3:
        nomeCombo = "pizza broto";
        preco = 20;
        break;
    default:
       
if (nomeCombo != ""){    
        console.log("Combo Escolhido: ", nomeCombo);
        console.log("preço: R$", preco);     
}

}