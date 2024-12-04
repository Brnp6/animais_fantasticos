export default function outsideClick(element,events, callback){
  const html = document.documentElement; // seleciona a paina html
  const outside = 'data-outside';  // classe que fará a função outside

  if(!element.hasAttribute(outside)){
    // se element não tiver o atributo data-outside entao:
   events.forEach((userEvent)=>{
    setTimeout(() =>{ html.addEventListener(userEvent,handleOutsideClick);})
   })
   element.setAttribute(outside, '');
  }

  function handleOutsideClick (event){
    if(!element.contains(event.target)){
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent,handleOutsideClick);
      })
      callback();
    }
  }
}