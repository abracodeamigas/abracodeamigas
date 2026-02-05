// Espera a página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Onde vamos colocar os botões
    const containerBotoes = document.getElementById('lista-botoes');

    // Função para buscar o JSON
    fetch('links.json')
        .then(resposta => resposta.json())
        .then(dados => {
            // Para cada item no JSON, cria um botão
            dados.forEach(item => {
                // Cria o elemento <a>
                const link = document.createElement('a');
                link.href = item.url;
                link.textContent = item.titulo;
                link.className = 'botao-link';
                link.target = '_blank'; // Abre em nova aba

                // Adiciona ao cartão branco
                containerBotoes.appendChild(link);
            });
        })
        .catch(erro => {
            console.error('Erro ao carregar os links:', erro);
            containerBotoes.innerHTML = '<p>Erro ao carregar opções.</p>';
        });
});