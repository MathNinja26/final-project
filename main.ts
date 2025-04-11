namespace SpriteKind {
    export const Suspect = SpriteKind.create()
    export const birthdayGirl = SpriteKind.create()
    export const guilty = SpriteKind.create()
}
function instructions () {
    game.showLongText("You are an investagator. You have been hired to figure out who stole the cake. ", DialogLayout.Full)
    game.showLongText("Talk to suspects and when you think you have figured out who stole the cake hit the menu button to make your quess! ", DialogLayout.Full)
    game.showLongText("When you guess put the person's name that you think did it.", DialogLayout.Full)
    game.showLongText("WARNING: YOU CAN ONLY TALK TO EACH PERSON ONCE.", DialogLayout.Full)
}
function isItRight (text: string) {
    optionOne = "Fanny"
    optionTwo = "fanny"
    if (text == (optionOne || optionTwo)) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.Suspect)
        game.gameOver(true)
    } else if (text != (optionOne || optionTwo)) {
        options = chances
        while (chances == options) {
            chances += -1
            if (chances == 0) {
                game.gameOver(false)
            } else {
                game.splash("Try again")
                game.splash("You have " + chances + " chances left.")
            }
        }
    }
}
function createFourArrays () {
    relation = [
    "I'm related to the person the party is for.",
    "I'm a friend of the family ",
    "I do the sound here",
    "I'm with the catering company"
    ]
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
    alibi = [
    "I was talking to " + SuspectList[randint(0, numberOfPeople)] + " when we heard a loud commotion. I'm still not sure what it was all about..",
    "I was at the food table getting some snacks.",
    "I was getting some punch.",
    "I was talking to the birthday girl.",
    "I was talking to the sound crew.",
    "I was complimenting the chef."
    ]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.birthdayGirl, function (sprite, otherSprite) {
    sprite.sayText("Hi.", 500, false)
    pause(100)
    otherSprite.sayText("*sob sob*")
    pause(500)
    game.showLongText("You recognise this girl as being the birthday girl, Cadence.", DialogLayout.Full)
    points = 0
    while (points == 0) {
        decision = game.askForString("Would you like to ask her what is wrong", 3)
        if (decision == "yes") {
            otherSprite.sayText("Some other lady wore a dress to my party and now my cake is gone.")
            pause(2500)
            while (points == 0) {
                decision = game.askForString("Would you like to ask her about the cake?", 3)
                if (decision == "yes") {
                    otherSprite.sayText("Well I was talking to my mom, and I was keeping an eye on the other lady wearing a dress")
                    pause(3500)
                    otherSprite.sayText("And I lost track of her for a minute and then I realized that the cake was gone")
                    pause(4000)
                    points = 1
                } else if (decision == "no") {
                    pause(5)
                    points = 1
                } else {
                    game.splash("That is not a valid answer.")
                    points = 0
                }
            }
        } else if (decision == "no") {
            while (points == 0) {
                decision = game.askForString("Would you like to ask her about the cake?", 3)
                if (decision == "yes") {
                    otherSprite.sayText("Well I was talking to my mom, and I was keeping an eye on the other lady wearing a dress")
                    pause(3500)
                    otherSprite.sayText("And I lost track of her for a minute and then I realized that the cake was gone")
                    pause(4000)
                    points = 1
                } else if (decision == "no") {
                    pause(5)
                    points = 1
                } else {
                    game.splash("That is not a valid answer.")
                    points = 0
                }
            }
        } else {
            game.splash("That is not a valid answer.")
            points = 0
        }
    }
    game.showLongText("Cadence runs out of the room, clearly still upset about how her party turned out.", DialogLayout.Full)
    sprites.destroy(otherSprite)
})
function thisORThat () {
    scene.setBackgroundColor(3)
    Cats = game.askForString("Do you prefer Cats or Dogs?", 4)
    if (Cats == "Cats") {
        game.splash("41% of people prefer cats.")
        pause(500)
    } else if (Cats == "Dogs") {
        game.splash("59% of people prefer dogs.")
        pause(500)
    } else {
        game.splash("That is not a valid answer.")
        game.splash("Moving to next question.")
    }
    red = game.askForString("Do you like Red or Blue better", 4)
    if (red == "Red") {
        game.splash("22% of people like red better. ")
        pause(500)
    } else if (red == "Blue") {
        game.splash("78% like blue better.")
        pause(500)
    } else {
        game.splash("That is not a valid answer.")
        game.splash("Moving to next question.")
    }
    travel = game.askForString("Would you prefer to go to Japan or London", 6)
    if (travel == "London") {
        game.splash("40% of people would prefer to go to London.")
        pause(500)
    } else if (travel == "Japan") {
        game.splash("60% of people would prefer to go to Japan.")
        pause(500)
    } else {
        game.splash("That is not a valid answer.")
        game.splash("Moving to next question")
    }
    books = game.askForString("Do you prefer Books or Movies", 6)
    if (books == "Books") {
        game.splash("67% of people prefer books.")
        pause(500)
        game.splash("GAME OVER")
    } else if (books == "Movies") {
        game.splash("33% of people prefer movies.")
        pause(500)
        game.splash("GAME OVER")
    } else {
        game.splash("That is not a valid answer.")
        game.splash("GAME OVER")
    }
}
function wordUnscramble () {
    info.setScore(0)
    game.showLongText("The purpose of this game is to unscramble the given word.", DialogLayout.Full)
    game.showLongText("A word will be given with mixed up letters. ", DialogLayout.Full)
    game.showLongText("Convert ten scrambled words to the right word to win the game!", DialogLayout.Full)
    wordList = [
    "eohsu",
    "lepna",
    "iacplta",
    "esphosle",
    "pltinfap",
    "iyledfiten",
    "nrclaeda",
    "ihecaev",
    "inlubibydat",
    "mtnuestirn"
    ]
    correctWords = [
    "house",
    "plane",
    "capital",
    "hopeless",
    "flippant",
    "definitely",
    "calendar",
    "achieve",
    "indubitably",
    "instrument"
    ]
    for (let index2 = 0; index2 < 10; index2++) {
        answer = game.askForString(wordList.pop())
        for (let value of correctWords) {
            if (value == answer) {
                info.changeScoreBy(1)
            }
        }
    }
    if (info.score() >= 5) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    } else {
        game.splash("Try Again!")
    }
}
function whoDidIt () {
    music.play(music.stringPlayable("D E D E D E D C ", 200), music.PlaybackMode.LoopingInBackground)
    game3 = true
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
    instructions()
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
    tiles.placeOnTile(Investigator, tiles.getTileLocation(14, 14))
    controller.moveSprite(Investigator)
    scene.cameraFollowSprite(Investigator)
    createFourArrays()
    numberOfPeople = 14
    for (let index2 = 0; index2 < 6; index2++) {
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
    }
    for (let index2 = 0; index2 < 6; index2++) {
        Person = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f f e 9 e 9 e f f . . . . 
            . . . f f e e e e e f f . . . . 
            . . f f f e 2 2 2 e f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . . f 1 1 f 1 1 f . . . . . 
            . . e e f 1 1 1 1 1 f e e . . . 
            . . e e f 1 1 f 1 1 f e e . . . 
            . . . . f 1 1 1 1 1 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 1 f . f 1 f . . . . . 
            . . . . f 1 f . f 1 f . . . . . 
            . . . . f f f . f f f . . . . . 
            `, SpriteKind.Suspect)
        tiles.placeOnRandomTile(Person, sprites.dungeon.darkGroundCenter)
    }
    Fanny = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 4 9 4 9 4 f f . . . . 
        . . . f f 4 4 4 4 4 f f . . . . 
        . . f f f 4 2 2 2 4 f f f . . . 
        . . f f f c 7 c 7 c f f f . . . 
        . . . . . 7 c 7 c 7 . . . . . . 
        . 4 4 4 7 c 7 c 7 c 7 4 4 4 . . 
        . 4 4 4 c 7 c 7 c 7 c 4 4 4 . . 
        . . . c 7 c 7 c 7 c 7 c . . . . 
        . . . 7 c 7 c 7 c 7 c 7 . . . . 
        . . 7 c 7 c 7 c 7 c 7 c 7 . . . 
        . . c 7 c 7 c 7 c 7 c 7 c . . . 
        . 7 7 c 7 c 7 c 7 c 7 c 7 c . . 
        . . . . 4 4 . . . 4 4 . . . . . 
        `, SpriteKind.guilty)
    tiles.placeOnTile(Fanny, tiles.getTileLocation(8, 8))
    Jane = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 3 3 4 f 4 f 4 3 3 . . . . 
        . . . 3 3 4 4 4 4 4 3 3 . . . . 
        . . 3 3 3 4 2 2 2 4 3 3 3 . . . 
        . . 3 3 3 6 a 6 a 6 3 3 3 . . . 
        . . . . . a 6 a 6 a . . . . . . 
        . 4 4 4 a 6 a 6 a 6 a 4 4 4 . . 
        . 4 4 4 6 a 6 a 6 a 6 4 4 4 . . 
        . . . 6 a 6 a 6 a 6 a 6 . . . . 
        . . . a 6 a 6 a 6 a 6 a . . . . 
        . . a 6 a 6 a 6 a 6 a 6 a . . . 
        . . 6 a 6 a 6 a 6 a 6 a 6 . . . 
        . 6 a 6 a 6 a 6 a 6 a 6 a 6 . . 
        . . . . 4 4 . . . 4 4 . . . . . 
        `, SpriteKind.birthdayGirl)
    tiles.placeOnTile(Jane, tiles.getTileLocation(8, 10))
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game3 == true) {
        guess = game.askForString("Who is the suspect?")
        isItRight(guess)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.guilty, function (sprite, otherSprite) {
    points = 0
    while (points == 0) {
        points = 1
        decision = game.askForString("Would you like to ask for her name?", 3)
        if (decision == "yes") {
            otherSprite.sayText("Uh... Fanny")
            pause(1000)
            while (points == 1) {
                points = 0
                decision = game.askForString("Would you like to ask for an alibi?", 3)
                if (decision == "yes") {
                    otherSprite.sayText("Uh... I don't remember... definitly...")
                    pause(1500)
                    otherSprite.sayText("...Yeah...")
                    pause(1000)
                } else if (decision == "no") {
                    pause(100)
                } else {
                    points = 1
                    game.splash("That is not a valid answer.")
                }
            }
            points = 1
        } else if (decision == "no") {
            while (points == 1) {
                points = 0
                decision = game.askForString("Would you like to ask for an alibi?", 3)
                if (decision == "yes") {
                    otherSprite.sayText("Uh... I don't remember... definitly...")
                    pause(1500)
                    otherSprite.sayText("...Yeah...")
                    pause(1000)
                } else if (decision == "no") {
                    pause(100)
                } else {
                    points = 1
                    game.splash("That is not a valid answer.")
                }
            }
            points = 1
        } else {
            points = 0
            game.splash("That is not a valid answer.")
        }
    }
    game.showLongText("Fanny quickly goes away, clearly uncomfortable", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Suspect, function (sprite, otherSprite) {
    points = 0
    while (points == 0) {
        index = randint(0, numberOfPeople)
        decision = game.askForString("yes or no, would you like to ask for their name?", 3)
        if (decision == "yes") {
            otherSprite.sayText("My name is " + SuspectList[index])
            SuspectList.removeAt(0)
            numberOfPeople += -1
            pause(1000)
            while (points == 0) {
                decision = game.askForString("yes or no, would you like to ask what their job is?", 3)
                if (decision == "yes") {
                    otherSprite.sayText("I work as a " + job[randint(0, 5)])
                    pause(2000)
                    while (points == 0) {
                        decision = game.askForString("Would you like to ask why they went to the party", 3)
                        if (decision == "yes") {
                            otherSprite.sayText(relation[randint(0, 3)])
                            pause(2000)
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else if (decision == "no") {
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else {
                            game.splash("That's not a valid answer.")
                        }
                    }
                } else if (decision == "no") {
                    while (points == 0) {
                        decision = game.askForString("Would you like to ask why they went to the party", 3)
                        if (decision == "yes") {
                            otherSprite.sayText(relation[randint(0, 3)])
                            pause(2000)
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else if (decision == "no") {
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else {
                            game.splash("That's not a valid answer.")
                        }
                    }
                } else {
                    game.splash("That's not a valid answer.")
                }
            }
        } else if (decision == "no") {
            while (points == 0) {
                decision = game.askForString("yes or no, would you like to ask what their job is?", 3)
                if (decision == "yes") {
                    otherSprite.sayText("I work as a " + job[randint(0, 5)])
                    pause(2000)
                    while (points == 0) {
                        decision = game.askForString("Would you like to ask why they went to the party", 3)
                        if (decision == "yes") {
                            otherSprite.sayText(relation[randint(0, 3)])
                            pause(2000)
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else if (decision == "no") {
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(2000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else {
                            game.splash("That's not a valid answer.")
                        }
                    }
                } else if (decision == "no") {
                    while (points == 0) {
                        decision = game.askForString("Would you like to ask why they went to the party", 3)
                        if (decision == "yes") {
                            otherSprite.sayText(relation[randint(0, 3)])
                            pause(2000)
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else if (decision == "no") {
                            while (points == 0) {
                                decision = game.askForString("yes or no, would you like to ask for an alibi?", 3)
                                if (decision == "yes") {
                                    otherSprite.sayText(alibi[randint(0, 5)])
                                    pause(3000)
                                    otherSprite.sayText(":)")
                                    pause(2000)
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else if (decision == "no") {
                                    sprites.destroy(otherSprite)
                                    points = 1
                                } else {
                                    game.splash("That's not a valid answer.")
                                }
                            }
                        } else {
                            game.splash("That's not a valid answer.")
                        }
                    }
                } else {
                    game.splash("That's not a valid answer.")
                }
            }
        } else {
            game.splash("That's not a valid answer.")
        }
    }
    sprites.destroy(otherSprite)
})
let index = 0
let guess = ""
let Jane: Sprite = null
let Fanny: Sprite = null
let Person: Sprite = null
let Investigator: Sprite = null
let game3 = false
let answer = ""
let correctWords: string[] = []
let wordList: string[] = []
let books = ""
let travel = ""
let red = ""
let Cats = ""
let decision = ""
let points = 0
let numberOfPeople = 0
let alibi: string[] = []
let job: string[] = []
let SuspectList: string[] = []
let relation: string[] = []
let chances = 0
let options = 0
let optionTwo = ""
let optionOne = ""
let choice = ""
let game2 = 0
while (game2 == 0) {
    game2 = 0
    choice = game.askForString("Do you want to play \"This or that? Yes or no?", 3)
    if (choice == "yes") {
        game2 = 1
    } else if (choice == "no") {
        choice = game.askForString("Do you want to play \"Unscramble?\" Yes or no?", 3)
        if (choice == "yes") {
            game2 = 2
        } else if (choice == "no") {
            choice = game.askForString("Do you want to play \"Who did it? Yes or no?", 3)
            if (choice == "yes") {
                game2 = 3
            } else {
                game.splash("You MUST pick a game.")
            }
        } else {
            game.splash("That is not a valid answer.")
        }
    } else {
        game.splash("That is not a valid answer.")
    }
    if (game2 == 1) {
        thisORThat()
    }
    if (game2 == 2) {
        wordUnscramble()
    }
    if (game2 == 3) {
        whoDidIt()
    }
}
