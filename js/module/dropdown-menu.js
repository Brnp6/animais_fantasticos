import outsideClick from "./outsideClick.js";
export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll('data-dropdown');



  dropdownMenus.forEach((item) =>{
    // item.addEventListener('click', handleClick); // adiciona a função ao click
    // item.addEventListener('touchstart', handleClick);
   ['touchstart', 'click'].forEach((userEvent => {
    item.addEventListener(userEvent,handleClick);
   }))
   



  })
  // Função handle click que é ativada ao click ou ao touch
   
  function handleClick(event){
    event.preventDefault();
    this.classList.toggle('active'); // refere-se ao menu
    outsideClick(this, ['touchstart', 'click'], ()=>{
      this.classList.remove('active');
    });
  
  };
};