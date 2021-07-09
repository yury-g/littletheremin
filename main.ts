let note = 0
input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(true)
})
basic.forever(function () {
    note = 0
    music.ringTone(input.acceleration(Dimension.X))
})
