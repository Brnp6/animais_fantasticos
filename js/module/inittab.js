export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');


  // verificar se as const existem e ativar a classe ativo  na primeira seção 
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
  };

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo') // Faz um for each para remover a classe ativo de todos os sections de tab content
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao); //adiciona a classe ativo a seção selecionada atraves do indice 

  }

  // criar função que ao clicar nas imagens adicione a classe ativo nas seções do tab content

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
};

