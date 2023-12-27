input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(162)
    music.setBuiltInSpeakerEnabled(false)
    record.playAudio(record.BlockingState.Blocking)
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
