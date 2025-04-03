namespace SpriteKind {
    export const Suspect = SpriteKind.create()
}
function whoDidIt () {
    tiles.setCurrentTilemap(tilemap`level1`)
    chances = 3
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
    game.showLongText("Talk to suspects and when you think you have figured out who stole the cake hit the menu button to make your quess! ", DialogLayout.Full)
    game.showLongText("WARNING: YOU CAN ONLY TALK TO EACH PERSON ONCE.", DialogLayout.Full)
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
    tiles.placeOnRandomTile(Investigator, sprites.dungeon.floorLight2)
    controller.moveSprite(Investigator)
    scene.cameraFollowSprite(Investigator)
    SuspectList = [
    "Charlie",
    "Avery",
    "Jesse",
    "Skylar",
    "Taylor",
    "Harper",
    "Madison",
    "Riley",
    "Jayden",
    "Finley",
    "Rowan",
    "Blythe",
    "Briar",
    "Marley",
    "Riki"
    ]
    job = [
    "lawyer",
    "doctor",
    "coach",
    "teacher",
    "government worker",
    "janitor"
    ]
    relation = [
    "I'm related to the person the party is for.",
    "I'm a friend of the family ",
    "I do the sound here",
    "I'm with the catering company"
    ]
    alibi = [
    "I was talking to " + SuspectList[randint(0, numberOfPeople)] + " when we heard a loud commotion. I'm still not sure what it was all about..",
    "I was at the food table getting some snacks.",
    "I was getting some punch.",
    "I was talking to the birthday girl.",
    "I was talking to the sound crew.",
    "I was complimenting the chef."
    ]
    numberOfPeople = 14
    Person = sprites.create(img`
        . . . . . e e e e e . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e 4 f 4 f 4 e . . . . . 
        . . . . . 4 4 f 4 4 . . . . . . 
        . . . . . 4 2 2 2 4 . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 1 1 f 1 1 f f . . . . 
        . e e f 1 1 1 1 1 1 1 f e e . . 
        . e e f 1 1 1 f 1 1 1 f e e . . 
        . . . f f 1 1 1 1 1 f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 1 f . f 1 f . . . . . 
        . . . . f 1 f . f 1 f . . . . . 
        . . . . f f f . f f f . . . . . 
        `, SpriteKind.Suspect)
    tiles.placeOnRandomTile(Person, sprites.dungeon.darkGroundCenter)
    Person = sprites.create(img`
        . . . . . f f f f f . . . . . . 
        . . . . . 8 8 8 7 8 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 4 f 4 f 4 f . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 2 4 2 4 . . . . . . 
        . . . . . 4 4 2 4 4 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f 1 f f f . . . . . 
        . . e e f f f f f f f e e . . . 
        . . e e f f f 1 f f f e e . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f 1 f . f 1 f . . . . . 
        . . . . f 1 f . f 1 f . . . . . 
        . . . . f f f . f f f . . . . . 
        `, SpriteKind.Suspect)
    tiles.placeOnRandomTile(Person, assets.tile`transparency16`)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game3 == true) {
        guess = game.askForString("Who is the suspect?")
        if (guess == "Fanny") {
            game.gameOver(true)
        } else {
            chances += -1
            if (chances == 0) {
                game.gameOver(false)
            } else {
                game.splash("Try again")
                game.splash("You have " + chances + " chances left.")
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Suspect, function (sprite, otherSprite) {
    game3 = true
    times = 0
    while (times == 0) {
        index = randint(0, numberOfPeople)
        decision = game.askForString("yes or no, would you like to ask for their name?", 3)
        if (decision == "yes") {
            otherSprite.sayText("My name is " + SuspectList[index])
            SuspectList.removeAt(0)
            numberOfPeople += -1
            pause(2000)
        }
        decision = game.askForString("yes or no, would you like to ask what their job is?", 3)
        if (decision == "yes") {
            otherSprite.sayText("I work as a " + job[randint(0, 5)])
            pause(2000)
        }
        decision = game.askForString("Would you like to ask why they went to the party", 3)
        if (decision == "yes") {
            otherSprite.sayText(relation[randint(0, 3)])
            pause(2000)
        }
        decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
        if (decision == "yes") {
            otherSprite.sayText(alibi[randint(0, 5)])
            pause(5000)
            otherSprite.sayText(":)")
            pause(2000)
        }
        sprites.destroy(otherSprite)
        times = 1
        number += 1
    }
})
let number = 0
let decision = ""
let index = 0
let times = 0
let guess = ""
let game3 = false
let Person: Sprite = null
let numberOfPeople = 0
let alibi: string[] = []
let relation: string[] = []
let job: string[] = []
let SuspectList: string[] = []
let Investigator: Sprite = null
let chances = 0
let choice = ""
let game2 = 0
while (game2 == 0) {
    choice = game.askForString("Do you want to play \"This or that? Yes or no?", 3)
    if (choice == "yes") {
        game2 = 1
    } else {
        choice = game.askForString("Do you want to play \"Unscramble?\" Yes or no?", 3)
        if (choice == "yes") {
            game2 = 2
        } else {
            choice = game.askForString("Do you want to play \"Who did it? Yes or no?", 3)
            if (choice == "yes") {
                game2 = 3
            } else {
                game.splash("You MUST pick a game.")
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
