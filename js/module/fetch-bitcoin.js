
export default function initFetchBitcoin(){
  fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(json => {
  const btcBitcoin = document.querySelector('.btc-preco');
  btcBitcoin.innerText = (100/json.BRL.sell).toFixed(4);
  
}).catch(erro => {
  console.log(Error(erro));
}
)
};


