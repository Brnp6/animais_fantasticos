export default function animationScroll() {
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
