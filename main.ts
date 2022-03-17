input.onButtonPressed(Button.A, function () {
    hand += 1
    CallSamuel()
})
function CallSamuel () {
    if (hand == 1) {
        basic.showString("S")
    } else if (hand == 2) {
        basic.showString("A")
    } else if (hand == 3) {
        basic.showString("M")
    } else if (hand == 4) {
        basic.showString("U")
    } else if (hand == 5) {
        basic.showString("E")
    } else if (hand == 6) {
        basic.showString("L")
    } else {
        basic.showIcon(IconNames.Scissors)
    }
}
input.onButtonPressed(Button.B, function () {
    hand += 0 - 1
    CallSamuel()
})
let hand = 0
hand = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
