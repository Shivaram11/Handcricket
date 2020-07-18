const imageArray=["one","two","three","four","five"];
function getRandom(){
    let n=Math.floor(Math.random()*5);
    let imageName=imageArray[n];
    let computer=document.querySelector("#comp");
    // console.log(n);
    computer.setAttribute("src","images/"+imageName+".png");
    return n+1;
    


}
let userScore;
let computerScore;
let isPlayerBatting;
let isComputerBatting;
function reset(){
     userScore = 0;
     computerScore = 0;
     isPlayerBatting = true;
     isComputerBatting = false;
    
}
reset();
let rand;


function getUserInput(e){
    if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" ){
        let input=e.key;
        const player=document.querySelector("#player");
        player.setAttribute("src", "images/" + imageArray[input-1]+".png");
         rand=getRandom();
        if (isPlayerBatting){        
        if(rand!=input){
            userScore+=Number(input);
            let playerScore = document.querySelector("#playerScore");
            playerScore.innerHTML=`<h1>${userScore}</h1>`


        }else{
            isPlayerBatting=false;

        }
    }else{
            if (rand != input) {
                computerScore += rand;
                let computerScoreElement = document.querySelector("#computerScore");
                computerScoreElement.innerHTML = `<h1>${computerScore}</h1>`
                if(computerScore>userScore){
                    alert("computer wins");
                    reset();

                }


            } else {
                alert("user wins");
                reset();

            }


    }

        console.log(userScore);

    }else{
        alert("input value between 1 and 5");
    }

}
document.addEventListener("keypress",getUserInput);

