export default function initModal() {
  //  1°: selecionando os botões no html queryselector = primeiro elemeno unicamente
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  
  //  verificar se os botoes existem no código
  if (botaoAbrir && botaoFechar && containerModal) {
    //  3° funções do abrir e fechaar o modal
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add('ativo');
    }
  
    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove('ativo');
    }
  
  
    function clickFora(event) {
      if (event.target === containerModal) {
        fecharModal(event);
      }
    }
  
  
    // 2°adicionar evento aos botoes
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', clickFora);
  
  }

};



