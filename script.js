console.log("SCRIPT LOADED!");
const exploreBtn = document.querySelector("button");
 const message = document.querySelector("#message");

 console.log(exploreBtn, message)

exploreBtn.addEventListener("click" , function() {
    console.log("BUTTON CLICKED")
 message.textContent = "One line at a time. keep exploring!" 
});



const AboutBtn = document.querySelector("AboutBtn");