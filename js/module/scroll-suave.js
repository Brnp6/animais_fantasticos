export default function initScrollSuave() {
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