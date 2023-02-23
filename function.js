const body = document.body;
const intro = document.querySelector(".intro");
const light = document.getElementById("ball-1");
const dark = document.getElementById("ball-2");
const toggle = document.querySelector(".toggle-box");
const cards= document.querySelectorAll(".card-dark")
const cardContent = document.querySelectorAll(".card-content")
const social = document.getElementById("social")
const cardsP = document.querySelectorAll(".cards h1");
const cardsP2 = document.querySelectorAll(".card-today h2");
const likes = document.querySelectorAll(".views p")
const overview =document.getElementById("overview")

light.addEventListener("click", ()=>{
    body.style.background = "hsl(230, 17%, 14%)";
    toggle.style.background = "linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
    light.style.display = "none"
    dark.style.display = "block"
    intro.style.background = "hsl(232, 19%, 15%)";
    cards.forEach(card =>{
      card.style.background = "hsl(228, 28%, 20%)"
    });
     cardContent.forEach(content =>{
        content.style.background = "hsl(228, 28%, 20%)"
     });
     social.style.color = "white";
     overview.style.color = "white"
     cardsP.forEach(contents =>{
        contents.style.color = "white"
     });
     cardsP2.forEach(contents =>{
        contents.style.color = "white"
     });
})

dark.addEventListener("click", ()=>{
    body.style.background = "initial";
    toggle.style.background = "hsl(230, 22%, 74%)";
    light.style.display = "block"
    dark.style.display = "none"
    intro.style.background = "hsl(225, 100%, 98%)";
    cards.forEach(card =>{
        card.style.background = "hsl(227, 47%, 96%)"
      });
       cardContent.forEach(content =>{
          content.style.background = "hsl(227, 47%, 96%)"
       });
       social.style.color = "hsl(230, 17%, 14%)";
       overview.style.color = "hsl(228, 12%, 44%)"
       cardsP.forEach(contents =>{
        contents.style.color = "hsl(230, 17%, 14%)"
     });
     cardsP2.forEach(contents =>{
        contents.style.color = "hsl(230, 17%, 14%)"
     });
})