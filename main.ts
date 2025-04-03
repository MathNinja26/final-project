function whoDidIt () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
let choice = ""
let game2 = 0
while (game2 == 0) {
    choice = game.askForString("Do you want to play \"This or that? Yes or no?", 3)
    if (choice == "yes") {
        game2 = 1
    } else {
        choice = game.askForString("Do you want to play \"Unscramble? Yes or no?", 3)
        if (choice == "yes") {
            game2 = 2
        } else {
            choice = game.askForString("Do you want to play \"Who did it? Yes or no?", 3)
            if (choice == "yes") {
                game2 = 3
            } else {
                game.splash("You must pick a game.")
            }
        }
    }
    if (game2 == 1) {
    	
    }
    if (game2 == 2) {
    	
    }
    if (game2 == 3) {
        whoDidIt()
    }
}
