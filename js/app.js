// Declaração das variáveis globais para armazenar o valor de um item e o valor total do carrinho
let valorItem = 0;
let valorTotal = 0;

// Função principal para adicionar um produto ao carrinho
function adicionar() {
    // Captura o valor do produto selecionado pelo usuário
    const produto = document.getElementById('produto').value;
    // Captura e converte a quantidade inserida pelo usuário para um número inteiro
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Valida a quantidade inserida, verificando se é um número positivo
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert('Por favor insira uma quantidade válida'); // Exibe um alerta se a quantidade for inválida
        return; // Interrompe a função caso a quantidade não seja válida
    }

    // Calcula o valor do item e atualiza o valor total do carrinho com base no produto e quantidade
    calculaValores(produto, quantidade);

    // Seleciona o elemento onde os produtos serão listados no carrinho
    const listaProdutos = document.getElementById('lista-produtos');

    // Cria uma nova seção para o produto no carrinho
    const sectionProdutos = document.createElement('section');
    sectionProdutos.className = 'carrinho__produtos__produto'; // Adiciona uma classe para estilo

    // Cria um elemento de texto para a quantidade do produto
    const spanQuantidade = document.createElement('span');
    spanQuantidade.className = 'texto-azul'; // Adiciona uma classe para estilo
    spanQuantidade.textContent = `${quantidade}x`; // Define o texto com a quantidade

    // Extrai e cria o nome do produto, removendo o preço (parte após o ' - ')
    const nomeProduto = document.createTextNode(` ${produto.split(' - ')[0]} `);

    // Cria um elemento de texto para o preço total do produto com base na quantidade
    const spanPreco = document.createElement('span');
    spanPreco.className = 'texto-azul'; // Adiciona uma classe para estilo
    spanPreco.textContent = `R$${valorItem.toFixed(2)}`; // Formata o valor do item com duas casas decimais

    // Adiciona os elementos (quantidade, nome e preço) à seção do produto
    sectionProdutos.append(spanQuantidade, nomeProduto, spanPreco);
    // Adiciona a seção do produto à lista de produtos no carrinho
    listaProdutos.append(sectionProdutos);

    // Atualiza o valor total do carrinho na interface
    document.getElementById('valor-total').textContent = `R$${valorTotal.toFixed(2)}`;
}

// Função para limpar o carrinho e resetar valores
function limpar() {
    // Reseta os valores globais de valorItem e valorTotal
    valorItem = 0;
    valorTotal = 0;

    // Seleciona a lista de produtos e remove todos os seus elementos
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Limpa o conteúdo da lista

    // Redefine o valor total exibido para zero
    document.getElementById('valor-total').textContent = 'R$0.00';
}

// Função para calcular o valor de um produto com base em seu nome e quantidade
function calculaValores(produto, quantidade) {
    // Define o valor do item e atualiza o valor total com base no produto selecionado
    if (produto.includes('Fone de ouvido')) {
        valorItem = 100 * quantidade; // Define o valor do item para 'Fone de ouvido'
        valorTotal += valorItem;      // Atualiza o valor total
    } else if (produto.includes('Celular')) {
        valorItem = 1400 * quantidade; // Define o valor do item para 'Celular'
        valorTotal += valorItem;       // Atualiza o valor total
    } else {
        valorItem = 5000 * quantidade; // Define o valor do item para 'Oculus VR' (padrão)
        valorTotal += valorItem;       // Atualiza o valor total
    }
}