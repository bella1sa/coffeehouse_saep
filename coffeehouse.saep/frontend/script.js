
const menuInicio = document.getElementById('menu-inicio');
const menuPedidos = document.getElementById('menu-pedidos');
const telaInicio = document.getElementById('tela-inicio');
const telapedidos = document.getElementById('tela-pedidos');

menuInicio.addEventListener('click', function(evento) {
    evento.preventDefault();
    telaInicio.style.display = 'block';
    telapedidos.style.display = 'none';
    menuInicio.classList.add('active');
    menuPedidos.classList.remove('active');
});

menuPedidos.addEventListener('click', function(evento) {
    evento.preventDefault();
    telaInicio.style.display = 'none';
    telapedidos.style.display = 'block';
    menuPedidos.classList.add('active');
    menuInicio.classList.remove('active');
});


const formPedido = document.getElementById('form-novo-pedido');
const selectProduto = document.getElementById('select-produto');
const inputQuantidade = document.getElementById('input-quantidade');
const containerCards = document.getElementById('container-cards');
const totalPedidosLateral = document.getElementById('total-pedidos-lateral');


let listaDePedidos = [
    { produto: "Café Expresso", quantidade: 1, precoTotal: 7.00, tempo: 10 }
];


function desenharPedidosNaTela() {
    
    containerCards.innerHTML = '';
    
    listaDePedidos.forEach(function(pedido) {
        const novoCard = document.createElement('div');
        novoCard.classList.add('card-pedido');
        
        novoCard.innerHTML = `
            <div class="card-topo">
                <h4> ${pedido.produto}</h4>
                <span class="tempo">⏱ ${pedido.tempo} min</span>
            </div>
            <p class="detalhes">Quantidade: ${pedido.quantidade} unidade(s) | Preço total: R$ ${pedido.precoTotal.toFixed(2)}</p>
            <div class="interacoes">
                <button class="btn-like"> Curtir (0)</button>
            </div>
        `;
        
       
        containerCards.appendChild(novoCard);
    });

   
    totalPedidosLateral.innerText = listaDePedidos.length;
}


formPedido.addEventListener('submit', function(evento)
{
   

    const opcaoSelecionada = selectProduto.options[selectProduto.selectedIndex];
    

    const nomeProduto = opcaoSelecionada.value;
    const precoUnitario = parseFloat(opcaoSelecionada.getAttribute('data-preco'));
    const tempoPreparo = parseInt(opcaoSelecionada.getAttribute('data-tempo'));
    const quantidade = parseInt(inputQuantidade.value);
    

    const precoFinal = precoUnitario * quantidade;
    

    const novoPedido = {
        produto: nomeProduto,
        quantidade: quantidade,
        precoTotal: precoFinal,
        tempo: tempoPreparo
    };
    
  
    listaDePedidos.push(novoPedido);

    desenharPedidosNaTela();
    
    formPedido.reset();
    
    menuPedidos.click();
});