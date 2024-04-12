let choices=document.querySelectorAll(".choice");
 let msg=document.querySelector('#msg')
 let userpara=document.querySelector('#user-score');
 let comppara=document.querySelector('#comp-score');

let userscore=0;
let compscore=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("clicked ion ", userchoice)
        playgame(userchoice)
    });
})

const playgame=(userchoice)=>{
   console.log("user clicked on =",userchoice);
  const CompChoice=genComchoice();
  console.log("COmputer clicked on =",CompChoice);
  let  userwin=true; 

  if(CompChoice==userchoice){
     drawgame();
  }

  if(CompChoice=="rock"){
    // user have scissors,paper 
    userwin=userchoice=="paper"?true:false;
  }
  else if(CompChoice=="paper"){
    // rock scissors
userwin=userchoice=="scissors"?true:false;
  }
  else{
    //  rock ,paper
    userwin=userchoice=="rock"?true:false;
    
  }
  showwinner(userwin,userchoice,CompChoice);

}

const genComchoice=()=>{
const options=["rock","paper","scissors"];
const rand=Math.floor(Math.random()*3);
return options[rand];
}

const drawgame=()=>{
    console.log("Draw")
    msg.innerHTML=` Draw computer choose ${CompChoice} user and  ${userchoice}`
}

const showwinner=(userwin,userchoice,CompChoice)=>{
    if(userwin){
        // console.log("user win");
        userscore++;
        userpara.innerText=userscore;
        msg.innerHTML=`user win ${userchoice} beats ${CompChoice}`
        msg.style.backgroundColor="green"; 

    }
    else{
        compscore++;
        comppara.innerText=compscore;
         msg.innerHTML=`user lose ! ${CompChoice} beats ${userchoice}`
        msg.style.backgroundColor="red"; 

    }
}