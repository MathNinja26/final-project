function whoDidIt () {
    tiles.setCurrentTilemap(tilemap`level1`)
    game.setDialogFrame(img`
        4 5 9 5 3 3 3 3 3 3 3 5 9 5 4 
        5 9 5 b 6 1 e e e 1 6 b 5 9 5 
        9 5 b 7 d 6 1 e 1 6 d 7 b 5 9 
        5 b 7 2 d d 6 1 6 d d 2 7 b 5 
        3 6 d d d d d 6 d d d d d 6 3 
        3 1 6 d d d d d d d d d 6 1 3 
        3 e 1 6 d d d d d d d 6 1 e 3 
        3 e e 1 6 d d d d d 6 1 e e 3 
        3 e 1 6 d d d d d d d 6 1 e 3 
        3 1 6 d d d d d d d d d 6 1 3 
        3 6 d d d d d 6 d d d d d 6 3 
        5 b 7 2 d d 6 1 6 d d 2 7 b 5 
        9 5 b 7 d 6 1 e 1 6 d 7 b 5 9 
        5 9 5 b 6 1 e e e 1 6 b 5 9 5 
        4 5 9 5 3 3 3 3 3 3 3 5 9 5 4 
        `)
    game.showLongText("You are an investagator. You have been hired to figure out who stole the cake. ", DialogLayout.Full)
    game.showLongText("Talk to people and when you think you have figured out who stole the cake hit the menu button to make your quess! ", DialogLayout.Full)
    Investigator = sprites.create(img`
        . . . . . . . . . . . . . 
        . . f f f f f f f . . . . 
        . . f f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . 2 2 2 2 2 2 2 2 2 . . . 
        f f f f f f f f f f f . . 
        . f e e e e e e e f . . . 
        . f 4 b 4 4 4 b 4 f . . . 
        . f 4 1 4 4 4 1 4 f . . . 
        . f 4 4 4 4 4 4 4 f . . . 
        . f f f e f e f f f . . . 
        4 4 f e e e e e f 4 4 . . 
        4 4 f e e f e e f 4 4 . . 
        . . f e e e e e f . . . . 
        . . . f f f f f . . . . . 
        . . . f f . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Investigator)
}
let Investigator: Sprite = null
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
