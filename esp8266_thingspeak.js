basic.showIcon(IconNames.No)
grove.setupWifi(
SerialPin.P16,
SerialPin.P2,
BaudRate.BaudRate115200,
"WIFI SSI",
"WIFI PASSWORD"
)
if (grove.wifiOK()) {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    grove.sendToThinkSpeak(
    "API KEY",
    input.temperature(),
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
    basic.pause(2000)
})

