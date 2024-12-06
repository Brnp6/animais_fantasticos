export default class ScrollSuave {
  constructor(links,options) {
    this.linksInternos = document.querySelectorAll(links)
    if(options==undefined){
      this.options = { behavior: 'smooth', block:'start'}; // como o scroll ira se movimentar
    }else{
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }
   // selecionando os links internos na classe menu

  // fazer função que liga o href com as abas do site
     scrollToSection(event) {
    event.preventDefault(); // previnir o evento antes de executar a função
    const href = event.currentTarget.getAttribute('href'); // pegar o atributo href
    const section = document.querySelector(href); //seleciona o primeiro seçãp onde esta inserido atributo href
    section.scrollIntoView(this.options);
  }

  addLinkEvent(){
   this.linksInternos.forEach((link) => {
    link.addEventListener('click', this.scrollToSection);

  });
  }

  init(){
    if(this.linksInternos.length){
    this.addLinkEvent();
    }
    
    return this;
  }
}