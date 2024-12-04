function initTabNav() {
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

initTabNav();
function initAccordion() {

  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);


    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
      // a missao dessa função é adicionar a classe ativo no elementos clicados. 
    };


    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // selecionando os links internos na classe menu

  // fazer função que liga o href com as abas do site
  function scrollToSection(event) {
    event.preventDefault(); // previnir o evento antes de executar a função
    const href = event.currentTarget.getAttribute('href'); // pegar o atributo href
    const section = document.querySelector(href); //seleciona o primeiro seçãp onde esta inserido atributo href

    const topo = section.offsetTop; // selecionando o topo da seção selecionada
    // window.scrollTo( eixo x , eixo y); mover scroll
    section.scrollIntoView({ 
      behavior: 'smooth',
      block:'start', // como o scroll ira se movimentar
    });


  }


  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);

  });
}
initScrollSuave();


function animationScroll() {
  //  construindo função anima scroll
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  if (sections.length > 0) {
    function animaScroll() {
      sections.forEach((section) => {  // mete um forEach na seleção sections vai analisar cada item
        const sectionTop = section.getBoundingClientRect().top; 
        const isSectionVisible = (sectionTop - windowMetade) < 0; // metodo que gera um objeto com propriedades logo apos ele pegamos a propriedade top que nos interessa devido ao scroll

        if (isSectionVisible) { // se elemento passar do topo do scrool, adicionar classe "ativo"
          section.classList.add('ativo');
        } else{
          section.classList.remove('ativo');
        }

      })
    }
    // como é o evento que afeta a janela entao utilizaremos o window

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

animationScroll();