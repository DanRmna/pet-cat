pins.servoWritePin(AnalogPin.P14, 180)
basic.forever(function () {
    music.play(music.stringPlayable("B C5 B C5 B C5 B C5 ", 500), music.PlaybackMode.UntilDone)
})
