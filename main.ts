input.onGesture(Gesture.TiltRight, function () {
	
})
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 140)
    basic.showString("Pakphum")
    basic.pause(1000)
    basic.showString("M.3/1")
    basic.pause(1000)
    basic.showString("9")
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
})
