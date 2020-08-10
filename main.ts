input.onButtonPressed(Button.A, function () {
    basic.showString("" + (list))
})
let list: number[] = []
list = [0, 0, 0, 0, 0, 0, 0, 0, 0]
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 100) {
        list.unshift(1)
    } else {
        list.unshift(0)
    }
})
