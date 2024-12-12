export default class Tooltip {

  constructor (tooltips){
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  


 onMouseMove(event){
  this.tooltipBox.style.top = `${event.pageY + 20}px`;
  if(event.pageX + 240 > window.innerWidth){
    this.tooltipBox.style.left = `${event.pageX - 190}px`;
  } else {
    this.tooltipBox.style.left = `${event.pageX + 20}px`
  }
  
}

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeElementListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeElementListener('mousemove', this.onMouseMove);
  }



 criarTooltipBox(element){
  const tooltipBox = document.createElement('div'); //  1°cria o elemento div
  const text = element.getAttribute('aria-label'); // 2° pega o atributo aria - label
  tooltipBox.classList.add('tooltip');  // adiciona a classe tooltip
  tooltipBox.innerText = text; // acrescenta a variavel text no html
  document.body.appendChild (tooltipBox); // coloca a criação do elemento no final do body
  this.tooltipBox = tooltipBox;
}

// cria a tooltip e adiciona os eventos de mouse move e mouseleave ao target 
onMouseOver({currentTarget}){
this.criarTooltipBox(currentTarget);
currentTarget.addEventListener('mousemove',this.onMouseMove);
currentTarget.addEventListener('mouseleave',this.onMouseLeave);
}

// adiciona eventos
addTooltipsEvent(){
  this.tooltips.forEach((item) => {
    item.addEventListener('mouseover', this.onMouseOver);
  })
}

init(){
  if(this.tooltips.length){
    this.addTooltipsEvent();
  }
  return this;
}
}


  
