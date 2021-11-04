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



function flip(card){

   const activeFirstCard = document.querySelector(".active1")
   const activeSecondCard = document.querySelector(".active2")
   if(activeFirstCard === null){
      card.querySelector(".front").classList.add("hide1")
      card.querySelector(".back").classList.add("active1")
   } else if (activeSecondCard === null){
      card.querySelector(".front").classList.add("hide2")
      card.querySelector(".back").classList.add("active2")
      checkIfEqual()
   }


}

function checkIfEqual(){
   const activeCard = document.querySelector(".active1 img")
   const currentCard = document.querySelector(".active2 img")

   const activeFirstCard = document.querySelector(".active1")
   const activeSecondCard = document.querySelector(".active2")


   if(activeCard.isEqualNode(currentCard)){
      console.log("teste")
      activeFirstCard.classList.add("checked")
      activeFirstCard.classList.remove("active1")
      activeSecondCard.classList.add("checked")
      activeSecondCard.classList.remove("active2")
   } else {
      document.querySelector(".hide1").classList.remove("hide1")
      document.querySelector(".hide2").classList.remove("hide2")
      document.querySelector(".active1").classList.remove("active1")
      document.querySelector(".active2").classList.remove("active2")
   }
}