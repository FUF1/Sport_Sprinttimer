let timeStart = 0
let timeDelta = 0
let timeEnd = 0
input.onPinReleased(TouchPin.P0, function () {
    timeStart = input.runningTime()
    basic.showIcon(IconNames.SmallDiamond)
    // Debouncing
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    timeStart = 9999999999999
    timeStart = 9999999999999
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    timeDelta = timeEnd - timeStart
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(timeDelta)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    timeEnd = input.runningTime()
    basic.showIcon(IconNames.Square)
    // Debouncing
    basic.pause(500)
})
basic.forever(function () {
	
})
