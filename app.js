document.addEventListener("keypress", (e) => {
    console.log(e)
    if (e.code == "Space") {
        document.querySelector(".center").classList.add("hide");
        document.querySelector("#right-info").innerHTML = `<h1>User Batting Press 1-5</h1>`;


        const imageArray = ["one", "two", "three", "four", "five"];

        function getRandom() {
            let n = Math.floor(Math.random() * 5);
            let imageName = imageArray[n];
            let computer = document.querySelector("#comp");
            // console.log(n);
            computer.setAttribute("src", "images/" + imageName + ".png");
            return n + 1;



        }
        let userScore;
        let computerScore;
        let isPlayerBatting;
        let isComputerBatting;

        function reset() {
            userScore = 0;
            computerScore = 0;
            isPlayerBatting = true;
            isComputerBatting = false;

        }
        reset();
        let rand;


        function getUserInput(e) {
            if (e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5") {
                let input = e.key;
                const player = document.querySelector("#player");
                player.setAttribute("src", "images/" + imageArray[input - 1] + ".png");
                rand = getRandom();
                if (isPlayerBatting) {
                    //  playerScore.innerHTML = `<h1>0</h1>`

                    if (rand != input) {
                        userScore += Number(input);
                        let playerScore = document.querySelector("#playerScore");
                        playerScore.innerHTML = `<h1>${userScore}</h1>`


                    } else {
                        isPlayerBatting = false;
                        document.querySelector(".right").classList.add("border");

                        setInterval(()=>{
                            document.querySelector(".right").classList.remove("border");
                        },1000)

                        playerScore.innerHTML = `<h1>Target=${userScore+1}</h1>`
                        document.querySelector("#right-info").innerHTML = `<h1>User Out </h1>`;


                        setTimeout(() => {
                        document.querySelector("#right-info").innerHTML = `<h1>User Bowling press 1-5 </h1>`;
                        document.querySelector("#left-info").innerHTML = `<h1>Computer Batting</h1>`;

                        }, 1500);




                    }
                } else {
                    if (rand != input) {
                        computerScore += rand;
                        let computerScoreElement = document.querySelector("#computerScore");
                        computerScoreElement.innerHTML = `<h1>Score=${computerScore}</h1>`
                        if (computerScore > userScore) {
                            alert("computer wins");
                            reset();
                            location.reload();

                        }


                    } else if (computerScore < userScore) {
                        
                        document.querySelector(".left").classList.add("border");
                        setInterval(() => {
                            document.querySelector(".left").classList.remove("border");
                            alert("User Wins");
                            location.reload();

                        }, 500);
                    //    reset();
                       

                        

                    }
                    else{
                        alert("Its a tie");
                    }


                }

                console.log(userScore);

            } else {
                alert("input value between 1 and 5");
            }

        }
        document.addEventListener("keypress", getUserInput);
    }
})