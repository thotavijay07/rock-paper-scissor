let userScore=0;
let compScore=0;
let p=document.querySelector(".hide");
let msg=document.querySelector(".msg");
let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");
let newgame=document.querySelector("#new-game");

const choices=document.querySelectorAll(".choice");
const playGame=(userChoice)=>{
let options = ["rock","paper","scissor"];
    let ram=Math.floor(Math.random()*3);
    let comChoice=options[ram];
    if(userChoice === comChoice)
    {
        p.innerText="Tie";
        msg.classList.remove("hide");
    }
    if(userChoice==="rock" && comChoice==="paper")
    {
        p.innerText="computer win using paper";
        msg.classList.remove("hide");
        compScore+=1;
    }
    if(userChoice==="paper" && comChoice==="scissor")
    {
        p.innerText="You lost because computer choosed scissor";
        msg.classList.remove("hide");
        compScore+=1;
    }
    if(userChoice==="paper" && comChoice==="rock")
    {
        p.innerText="You win because computer choosed rock";
        msg.classList.remove("hide");
        userScore+=1;
    }
    if(userChoice==="scissor" && comChoice==="paper")
    {
        p.innerText="You win Computer choosed paper";
        msg.classList.remove("hide");
        userScore+=1;
    }
    if(userChoice==="rock" && comChoice==="scissor")
    {
        p.innerText="You win Computer choosed scissor";
        msg.classList.remove("hide");
        userScore+=1;
    }
    if(userChoice==="scissor" && comChoice==="rock")
    {
        p.innerText="You lost Computer choosed rock";
        msg.classList.remove("hide");
        compScore+=1
    }
    us.innerText=userScore;
    cs.innerText=compScore;
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

newgame.addEventListener('click',()=>
{
    userScore=0;
    compScore=0;
    us.innerText=0;
    cs.innerText=0;
    msg.classList.add("hide");


})