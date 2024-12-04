// modulos - diferentes arquivos com funções especificas
// facilita compartilhamento, pois basta importar um modulo
//  quando for exportar coloca default pq vai valer ualquer nome e nao serei obrigado a a ter que colocar o mesmo nome da função desejada ou colocar entre chaves para colocar mais de uma funão em chaves
//  posso importar qualquer dado javascript desde function, var const e etc
// se o arquivo for importado para masi de uma páginaz, ele sempre será  carregado somente uma vez.
import initScrollSuave from "./scroll-suave.js";
import animationScroll from "./animascroll.js";
import initAccordion from "./accordio.js";
import  initTabNav from "./inittab.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import dropdownMenu from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import  initFuncionamento from "./funcionamento.js" ;
import  initFetchAnimais from "./fetch-animais.js";
import initFetchBitcoin from "./fetch-bitcoin.js";


initTabNav();
initScrollSuave();
animationScroll();
initAccordion();
initModal();
initTooltip(); 
dropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
// 'use strit'
// modo restrito ue previne algumas ações consideradas erro 

// 'use strict'
//  nome = 'Ford'; //erro, variavel global
//  delete Array.prototype; // erro, nao deletavel
//  window.top = 200  // erro nao pode mudar
//  const arguments = 3.14 //  erro palavra reservada
