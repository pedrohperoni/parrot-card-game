let cardAmount = 0;
const cards = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
cards.sort(shuffle)

function shuffle(){
   return Math.random() - 0.5;
}


countCards()
function countCards(){
   cardAmount = prompt("Quantas cartas você quer jogar (selecione de 4 a 14)")
   console.log(cardAmount)
   if(cardAmount <4 || cardAmount > 14 || cardAmount % 2 !== 0){
      countCards()
   } else {
      cardGenerator()
   }
}


function cardGenerator(){
   let slicedArray = cards.slice(0,(cardAmount/2));
   let duplicatedArray = slicedArray.slice()
   let newArray = slicedArray.concat(duplicatedArray)

   newArray.sort(shuffle)
   console.log(newArray)


   let counter = 0;
   while (counter < (cardAmount)){
      counter++
      const list = document.querySelector("ul")
      list.innerHTML = list.innerHTML + `
         <li class="card" data-identifier="card" onclick=flip(this)>
            <div class="front" data-identifier="front-face">
               <img src="./assets/front.png" alt="front">
            </div>
            <div class="back" data-identifier="back-face">
               <img src="./assets/${newArray[counter-1]}.gif" alt="parrot">
            </div>
         </li>`
   }
}