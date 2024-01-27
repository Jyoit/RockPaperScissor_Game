const computersChoice= document.getElementById('computers-choice');
const usersChoice=document.getElementById('your-choice');
const result= document.getElementById('result');
const choices=document.querySelectorAll('button');
let UChoice;
let CChoice;
let Result;





choices.forEach(choice => {
  choice.addEventListener('click', () => {
    choice.classList.add('active');
    setTimeout(() => {
      choice.classList.remove('active');
    }, 1000); // 1000ms = 1 second
  });
});


choices.forEach(choice=> choice.addEventListener('click',function(e){
    UChoice=e.target.id;
    usersChoice.innerHTML=UChoice;
    getComputerChoice(); 
    getresult();
}));



function getComputerChoice(){
    var randomNumber=( Math.floor(Math.random()*choices.length)+1);
    if(randomNumber===1){
        CChoice="Rock";
    }
    if(randomNumber===2){
        CChoice="Paper";
    }
    if(randomNumber===3){
        CChoice="Scissor";
    }
    computersChoice.innerHTML=CChoice;
}

function getresult(){
    if(UChoice===CChoice){
        Result="!!🫤Match Draws🫤!!";
    }
    else if(UChoice==='Rock' && CChoice==='Paper'){
        Result="!!🥹YOU LOOSE🥹!!";
    }
    
    else if(UChoice==='Rock' && CChoice==='Scissor'){
        Result="!!🎊YOU WINS🎊!!";
    }
    
    else if(UChoice==='Paper' && CChoice==='Rock'){
        Result="!!🎊YOU WINS🎊!!";
    }
    
    else if(UChoice==='Paper' && CChoice==='Scissor'){
        Result="!!🥹YOU LOOSE🥹!!";
    }
    
    else if(UChoice==='Scissor' && CChoice==='Rock'){
        Result="!!🥹YOU LOOSE🥹!!";
    }
    
    else if(UChoice==='Scissor' && CChoice==='Paper'){
        Result="!!🎊YOU WINS🎊!!";
    }
    result.innerHTML=Result;
    console.log(Result);
    
}

