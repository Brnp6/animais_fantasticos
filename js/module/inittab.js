export default class TabNav {
  constructor(menu,content){
  this.tabMenu = document.querySelectorAll(menu);
  this.tabContent = document.querySelectorAll(content);
  this.activeClass = 'ativo';
}

  activeTab(index) {
  this.tabContent.forEach((section) => {
    section.classList.remove(this.activeClass) // Faz um for each para remover a classe ativo de todos os sections de tab content
  });
  const direcao = this.tabContent[index].dataset.anime;
  this.tabContent[index].classList.add(this.activeClass, direcao); //adiciona a classe ativo a seção selecionada atraves do indice 
}
 
 addTabNavEvent(){
  this.tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => { this.activeTab(index)});
  });
 }

 init(){
  // verificar se as const existem e ativar a classe ativo  na primeira seção 
  if (this.tabMenu.length && this.tabContent.length) {
    this.activeTab(0);
    this.addTabNavEvent();
  };
  return this;
 }
  
};

