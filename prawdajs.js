const BUTTON = document.querySelector('.buttons')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
  }


  sleep(6000).then(() => { BUTTON.innerHTML = `<a href="normalne.html" class='hithere'><button id="nor">Normalne</button></a>
  <span style='font-size:100px;' id="spnor" class='hithere'>&#128519;</span>
  <a href="zboczone.html"><button id="zb" class='hithere'>Zboczone</button></a>    
  <span style='font-size:100px;' id="spzb" class='hithere'>&#128520;</span>`});



  // let tak = 100
  // let test = document.getElementById('test')
  // testDobre = test.innerHTML
  // let tablica = ['0',`${testDobre}`, '3']
//   const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
// function pojaw(sleep) {
//     await sleep(3000)
//     HIDDEN.classList.remove('hidden')
// }
// pojaw()