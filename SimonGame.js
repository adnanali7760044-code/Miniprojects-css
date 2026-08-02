 let gameseq = [];
 let userseq = [];

 let btns =["yellow", "red", "purple", "green"];

 let started = false;
 let level =0;
 let score = 0;
 let highest=0;

 let h2 = document.querySelector("h2");
 let h3 = document.querySelector("h3");

 document.addEventListener("keypress", function(){
        if(started == false){
            console.log("game is started");
             started = true;

             levelup();
        }
       
 });

 function btnFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    }, 500);
 }

 

 function levelup(){
    userseq =[];
    level++;
    h2.innerText = `level ${level}`;
     
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
 }

 function checkAns(idx){
    
    if(userseq[idx] === gameseq[idx]){
         if(userseq.length == gameseq.length){
             setTimeout(levelup, 1000);
         }
    } else{
         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
         }, 150);
         score = level;
         reset();
         
    }
 }

 function btnPress(){
     let btn = this;
     btnFlash(btn);

     userColor = btn.getAttribute("id");
     userseq.push(userColor);

     checkAns(userseq.length-1);
 };

 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click", btnPress);
 }


 function reset(){
    if(score > highest){
         highest = score;
         h3.innerHTML = `Highest score : ${highest}`;
    }
    started =false;
    gameseq = [];
    userseq = [];
    level = 0;
 }