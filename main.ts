input.onButtonPressed(Button.A, function () {
    led.unplot(Servo_angle / 10, 0)
    Servo_angle += -5
    servos.P0.setAngle(Servo_angle)
    led.plot(Servo_angle / 10, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(Servo_angle / 10, 0)
    Servo_angle += 5
    servos.P0.setAngle(Servo_angle)
    led.plot(Servo_angle / 10, 0)
})
let Servo_angle = 0
Servo_angle = 20
