ESP8266ThingSpeak.connectWifi(
SerialPin.P16,
SerialPin.P2,
BaudRate.BaudRate115200,
"enter wifi SSI",
"enter wifi password"
)
basic.forever(function () {
    if (ESP8266ThingSpeak.isWifiConnected()) {
        if (ESP8266ThingSpeak.isLastUploadSuccessful()) {
            basic.showString("Hello!")
        } else {
            basic.showString("No upload")
        }
        // Verbinding maken met ThingSpeak en gegevens versturen
        ESP8266ThingSpeak.connectThingSpeak(
        "api.thingspeak.com",
        "enter API write key",
        input.temperature(),
        0,
        0,
        0,
        0,
        0,
        0,
        0
        )
        // Wachten voordat je opnieuw gegevens verzendt
        // 20 seconden wachten (meer dan de aanbevolen 15 seconden)
        basic.pause(20000)
    } else {
        basic.showString("No wifi")
    }
})
