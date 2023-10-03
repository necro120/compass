input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showNumber(input.compassHeading())
        basic.showString("N")
    } else if (input.compassHeading() == 20) {
        basic.showNumber(input.compassHeading())
        basic.showString("NNE")
    } else if (input.compassHeading() == 45) {
        basic.showNumber(input.compassHeading())
        basic.showString("NE")
    } else if (input.compassHeading() == 65) {
        basic.showNumber(input.compassHeading())
        basic.showString("ENE")
    } else {
    	
    }
})
