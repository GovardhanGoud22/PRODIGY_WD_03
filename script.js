let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newbtn");
let emoji=document.querySelector("#emoji");
let player1=prompt("Enter the player1 name:");
let player2=prompt("Enter the player1 name:");
let count=0;
let turnO=true;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    trueO=true;
    enableBoxes();
    count=0;
    msgcontainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
     if(turnO){
         box.innerText="O";
         turnO=false;
     }
     else{
        box.innerText="X";
        turnO="true";
     }
     box.disabled=true;
     count=count+1;
     checkWinner();
    });
});
let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(pos1val)=>{
      if(pos1val==="O"){
        emoji.innerText="🎉"
    
        msg.innerText=`Congratulations! Winner is ${player1}`;
      }
      else{
        emoji.innerText="🎉"
        msg.innerText=`Congratulations! Winner is ${player2}`;
      }
      msgcontainer.classList.remove("hide");
      disableBoxes();
    
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner");
            showWinner(pos1val);
        }
        else if(count==9){
            draw();
        }
    }

    }
};
const draw=()=>{
    msg.innerText="It was tie! please,try again!";
    emoji.innerText="😪"
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
