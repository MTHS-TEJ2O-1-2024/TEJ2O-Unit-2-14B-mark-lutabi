/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mark lutabi
 * Created on: November, 2024
 * This program move the Sprite and the pixels making a square
*/


// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// When "A" is pressed
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        pause(500)
    }

    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        pause(500)
    }

    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        pause(500)
    }

    loopCounter = 5
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        pause(500)
    }

    loopCounter = 5
    while (loopCounter > 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

