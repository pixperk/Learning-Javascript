let playgame = confirm("Do you want to play ROCK-PAPER-SCISSORS?")
if (playgame) {
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors.")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase()
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                    : "scissors"

            let result = playerOne === computer ? "Tie!"
                : playerOne === "rock" && computer === "paper" ? "Computer Wins!"
                    : playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
                        : playerOne === "scissors" && computer === "rock" ? "Compter Wins!"
                            : "playerOne wins!"
                            alert(`You chose ${playerOne}\nComputer chose ${computer}`)
            alert(result);
            
            let playAgain = confirm("Play Again?")
            playAgain ? location.reload() : alert("Ok, Thanks for playing!")
        } else {
            alert("You didn't enter rock, paper or scissors.")
        }
    } else {
        alert("Don't want to play, I guess.")
    }
} else {
    alert("Ok, maybe next time...")
}