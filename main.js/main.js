/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/module/accordio.js":
/*!*******************************!*\
  !*** ./js/module/accordio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n\r\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n\r\n  const activeClass = 'ativo';\r\n  if (accordionList.length) {\r\n    accordionList[0].classList.add(activeClass);\r\n    accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n\r\n    function activeAccordion() {\r\n      this.classList.toggle(activeClass);\r\n      this.nextElementSibling.classList.toggle(activeClass);\r\n      // a missao dessa função é adicionar a classe ativo no elementos clicados. \r\n    };\r\n\r\n\r\n    accordionList.forEach((item) => {\r\n      item.addEventListener('click', activeAccordion);\r\n    });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/accordio.js?");

/***/ }),

/***/ "./js/module/animanumeros.js":
/*!***********************************!*\
  !*** ./js/module/animanumeros.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n  \r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const inscremento = Math.floor(total / 100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start = start + inscremento;\r\n        numero.innerText = start;\r\n        if(start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n  \r\n  function handleMutation(mutation) {\r\n   if(mutation[0].target.classList.contains('ativo')) {\r\n    observer.disconnect();\r\n    animaNumeros();\r\n   }\r\n  }\r\n  \r\n  const observerTarget = document.querySelector('.numeros');\r\n  const observer = new MutationObserver(handleMutation);\r\n  \r\n  observer.observe(observerTarget, {attributes:true});\r\n}\n\n//# sourceURL=webpack://projetofinal/./js/module/animanumeros.js?");

/***/ }),

/***/ "./js/module/animascroll.js":
/*!**********************************!*\
  !*** ./js/module/animascroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationScroll)\n/* harmony export */ });\nfunction animationScroll() {\r\n  //  construindo função anima scroll\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowMetade = window.innerHeight * 0.6;\r\n\r\n  if (sections.length > 0) {\r\n    function animaScroll() {\r\n      sections.forEach((section) => {  // mete um forEach na seleção sections vai analisar cada item\r\n        const sectionTop = section.getBoundingClientRect().top; \r\n        const isSectionVisible = (sectionTop - windowMetade) < 0; // metodo que gera um objeto com propriedades logo apos ele pegamos a propriedade top que nos interessa devido ao scroll\r\n\r\n        if (isSectionVisible) { // se elemento passar do topo do scrool, adicionar classe \"ativo\"\r\n          section.classList.add('ativo');\r\n        } else{\r\n          section.classList.remove('ativo');\r\n        }\r\n\r\n      })\r\n    }\r\n    // como é o evento que afeta a janela entao utilizaremos o window\r\n\r\n    animaScroll();\r\n    window.addEventListener('scroll', animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/animascroll.js?");

/***/ }),

/***/ "./js/module/dropdown-menu.js":
/*!************************************!*\
  !*** ./js/module/dropdown-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/module/outsideClick.js\");\n\r\nfunction dropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll('data-dropdown');\r\n\r\n\r\n\r\n  dropdownMenus.forEach((item) =>{\r\n    // item.addEventListener('click', handleClick); // adiciona a função ao click\r\n    // item.addEventListener('touchstart', handleClick);\r\n   ['touchstart', 'click'].forEach((userEvent => {\r\n    item.addEventListener(userEvent,handleClick);\r\n   }))\r\n   \r\n\r\n\r\n\r\n  })\r\n  // Função handle click que é ativada ao click ou ao touch\r\n   \r\n  function handleClick(event){\r\n    event.preventDefault();\r\n    this.classList.toggle('active'); // refere-se ao menu\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], ()=>{\r\n      this.classList.remove('active');\r\n    });\r\n  \r\n  };\r\n};\n\n//# sourceURL=webpack://projetofinal/./js/module/dropdown-menu.js?");

/***/ }),

/***/ "./js/module/fetch-animais.js":
/*!************************************!*\
  !*** ./js/module/fetch-animais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animanumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animanumeros.js */ \"./js/module/animanumeros.js\");\n\r\nfunction initFetchAnimais(){\r\n\r\n  \r\n  async function fetchAnimais(url){\r\n    try{\r\n    const animaisResponse = await fetch(url);\r\n    const animaisJson = await animaisResponse.json();\r\n    const numerosGrid =  document.querySelector('.numeros-grid');\r\n     \r\n    animaisJson.forEach(animal => {\r\n      const divAnimal = createAnimal(animal);\r\n      numerosGrid.appendChild(divAnimal);\r\n    });\r\n    (0,_animanumeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  } catch(erro){\r\n    console.log(erro);\r\n  }\r\n  }\r\n   \r\n  function createAnimal(animal){\r\n    const div = document.createAttribute('div');\r\n    div.classList.add('numero-animal');\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div \r\n  };\r\n  \r\n  fetchAnimais('./animaisapi.json');\r\n};\r\n\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/fetch-animais.js?");

/***/ }),

/***/ "./js/module/fetch-bitcoin.js":
/*!************************************!*\
  !*** ./js/module/fetch-bitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\n\r\nfunction initFetchBitcoin(){\r\n  fetch('https://blockchain.info/ticker')\r\n.then(response => response.json())\r\n.then(json => {\r\n  const btcBitcoin = document.querySelector('.btc-preco');\r\n  btcBitcoin.innerText = (100/json.BRL.sell).toFixed(4);\r\n  \r\n}).catch(erro => {\r\n  console.log(Error(erro));\r\n}\r\n)\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/module/funcionamento.js":
/*!************************************!*\
  !*** ./js/module/funcionamento.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(){\r\n  const funcionamento = document.querySelector('[data-semana]');\r\n  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);\r\n  const horarioSemana =  funcionamento.dataset.horario.split(',').map(Number);\r\n  \r\n  const dataAgora= new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;\r\n    \r\n  const  horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\r\n  \r\n  if(semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add('Aberto');\r\n  }\r\n};\r\n\r\n\r\n \n\n//# sourceURL=webpack://projetofinal/./js/module/funcionamento.js?");

/***/ }),

/***/ "./js/module/inittab.js":
/*!******************************!*\
  !*** ./js/module/inittab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n\r\n  // verificar se as const existem e ativar a classe ativo  na primeira seção \r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add('ativo');\r\n  };\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove('ativo') // Faz um for each para remover a classe ativo de todos os sections de tab content\r\n    });\r\n    const direcao = tabContent[index].dataset.anime;\r\n    tabContent[index].classList.add('ativo', direcao); //adiciona a classe ativo a seção selecionada atraves do indice \r\n\r\n  }\r\n\r\n  // criar função que ao clicar nas imagens adicione a classe ativo nas seções do tab content\r\n\r\n  tabMenu.forEach((itemMenu, index) => {\r\n    itemMenu.addEventListener('click', () => {\r\n      activeTab(index);\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/inittab.js?");

/***/ }),

/***/ "./js/module/menu-mobile.js":
/*!**********************************!*\
  !*** ./js/module/menu-mobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/module/outsideClick.js\");\n \r\n \r\n function initMenuMobile(){\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n \r\n  const menuList= document.querySelector('[data-menu=\"list\"]');\r\n  const eventos =['click', 'touchstart'];\r\n \r\n  function openMenu(event){\r\n   menuList.classList.add('active');\r\n   menuButton.classList.add('active');\r\n   (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos,() => {\r\n     menuList.classList.remove('active');\r\n     menuButton.classList.remove('active');\r\n   })\r\n  };\r\n \r\n eventos.forEach(evento => {\r\n  menuButton.addEventListener(evento,openMenu);\r\n });\r\n\r\n };\r\n\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/menu-mobile.js?");

/***/ }),

/***/ "./js/module/modal.js":
/*!****************************!*\
  !*** ./js/module/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  //  1°: selecionando os botões no html queryselector = primeiro elemeno unicamente\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n  \r\n  \r\n  //  verificar se os botoes existem no código\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    //  3° funções do abrir e fechaar o modal\r\n    function abrirModal(event) {\r\n      event.preventDefault();\r\n      containerModal.classList.add('ativo');\r\n    }\r\n  \r\n    function fecharModal(event) {\r\n      event.preventDefault();\r\n      containerModal.classList.remove('ativo');\r\n    }\r\n  \r\n  \r\n    function clickFora(event) {\r\n      if (event.target === containerModal) {\r\n        fecharModal(event);\r\n      }\r\n    }\r\n  \r\n  \r\n    // 2°adicionar evento aos botoes\r\n    botaoAbrir.addEventListener('click', abrirModal);\r\n    botaoFechar.addEventListener('click', fecharModal);\r\n    containerModal.addEventListener('click', clickFora);\r\n  \r\n  }\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/modal.js?");

/***/ }),

/***/ "./js/module/outsideClick.js":
/*!***********************************!*\
  !*** ./js/module/outsideClick.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element,events, callback){\r\n  const html = document.documentElement; // seleciona a paina html\r\n  const outside = 'data-outside';  // classe que fará a função outside\r\n\r\n  if(!element.hasAttribute(outside)){\r\n    // se element não tiver o atributo data-outside entao:\r\n   events.forEach((userEvent)=>{\r\n    setTimeout(() =>{ html.addEventListener(userEvent,handleOutsideClick);})\r\n   })\r\n   element.setAttribute(outside, '');\r\n  }\r\n\r\n  function handleOutsideClick (event){\r\n    if(!element.contains(event.target)){\r\n      element.removeAttribute(outside);\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent,handleOutsideClick);\r\n      })\r\n      callback();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://projetofinal/./js/module/outsideClick.js?");

/***/ }),

/***/ "./js/module/script.js":
/*!*****************************!*\
  !*** ./js/module/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-suave.js */ \"./js/module/scroll-suave.js\");\n/* harmony import */ var _animascroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animascroll.js */ \"./js/module/animascroll.js\");\n/* harmony import */ var _accordio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordio.js */ \"./js/module/accordio.js\");\n/* harmony import */ var _inittab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inittab.js */ \"./js/module/inittab.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./js/module/modal.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.js */ \"./js/module/tooltip.js\");\n/* harmony import */ var _dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-menu.js */ \"./js/module/dropdown-menu.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/module/menu-mobile.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./funcionamento.js */ \"./js/module/funcionamento.js\");\n/* harmony import */ var _fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-animais.js */ \"./js/module/fetch-animais.js\");\n/* harmony import */ var _fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch-bitcoin.js */ \"./js/module/fetch-bitcoin.js\");\n// modulos - diferentes arquivos com funções especificas\r\n// facilita compartilhamento, pois basta importar um modulo\r\n//  quando for exportar coloca default pq vai valer ualquer nome e nao serei obrigado a a ter que colocar o mesmo nome da função desejada ou colocar entre chaves para colocar mais de uma funão em chaves\r\n//  posso importar qualquer dado javascript desde function, var const e etc\r\n// se o arquivo for importado para masi de uma páginaz, ele sempre será  carregado somente uma vez.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_inittab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_animascroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_accordio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); \r\n(0,_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n// 'use strit'\r\n// modo restrito ue previne algumas ações consideradas erro \r\n\r\n// 'use strict'\r\n//  nome = 'Ford'; //erro, variavel global\r\n//  delete Array.prototype; // erro, nao deletavel\r\n//  window.top = 200  // erro nao pode mudar\r\n//  const arguments = 3.14 //  erro palavra reservada\r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/script.js?");

/***/ }),

/***/ "./js/module/scroll-suave.js":
/*!***********************************!*\
  !*** ./js/module/scroll-suave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]'); // selecionando os links internos na classe menu\r\n\r\n  // fazer função que liga o href com as abas do site\r\n  function scrollToSection(event) {\r\n    event.preventDefault(); // previnir o evento antes de executar a função\r\n    const href = event.currentTarget.getAttribute('href'); // pegar o atributo href\r\n    const section = document.querySelector(href); //seleciona o primeiro seçãp onde esta inserido atributo href\r\n\r\n    const topo = section.offsetTop; // selecionando o topo da seção selecionada\r\n    // window.scrollTo( eixo x , eixo y); mover scroll\r\n    section.scrollIntoView({ \r\n      behavior: 'smooth',\r\n      block:'start', // como o scroll ira se movimentar\r\n    });\r\n\r\n\r\n  }\r\n\r\n\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener('click', scrollToSection);\r\n\r\n  });\r\n}\n\n//# sourceURL=webpack://projetofinal/./js/module/scroll-suave.js?");

/***/ }),

/***/ "./js/module/tooltip.js":
/*!******************************!*\
  !*** ./js/module/tooltip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\ntooltips.forEach((item) => {\r\n  item.addEventListener('mouseover', onMouseOver);\r\n})\r\n\r\nfunction onMouseOver(event){\r\n  const tooltipBox = criarTooltipBox(this);\r\n  \r\n  onMouseMove.tooltipBox= tooltipBox;\r\n  this.addEventListener('mousemove', onMouseMove);\r\n  \r\n  onMouseLeave.tooltipBox = tooltipBox;\r\n  onMouseLeave.element = this;\r\n  this.addEventListener('mouseleave', onMouseLeave);\r\n  \r\n \r\n  \r\n}\r\n\r\nconst onMouseLeave = {\r\n\r\n  handleEvent () {\r\n    this.tooltipBox.remove();\r\n    this.removeElementListener('mouseleave', onMouseLeave);\r\n    this.removeElementListener('mousemove', onMouseMove);\r\n  }\r\n}\r\n\r\nconst onMouseMove = {\r\n  handleEvent(event){\r\n  this.tooltipBox.style.top = event.pageY + 20 +'px';\r\n  this.tooltipBox.style.left = event.pageX + 20 + 'px' ;\r\n\r\n  }\r\n}\r\n\r\n\r\n\r\nfunction criarTooltipBox(element){\r\n  const tooltipBox = document.createElement('div'); //  1°cria o elemento div\r\n  const text = element.getAttribute('aria-label'); // 2° pega o atributo aria - label\r\n  tooltipBox.classList.add('tooltip');  // adiciona a classe tooltip\r\n  tooltipBox.innerText = text; // acrescenta a variavel text no html\r\n  document.body.appendChild (tooltipBox); // coloca a criação do elemento no final do body\r\n  return tooltipBox;\r\n}\r\n\r\n \r\n  };\r\n\r\n  \r\n\n\n//# sourceURL=webpack://projetofinal/./js/module/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/module/script.js");
/******/ 	
/******/ })()
;