input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 4; index++) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(500)
    }
    servos.P0.stop()
})
