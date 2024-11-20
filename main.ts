// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
    if (esp8266.isESP8266Initialized()) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    esp8266.connectWiFi("REDMI", "qwertyui")
    if (esp8266.isWifiConnected()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Rollerskate)
    }
    if (SerialData == "Baby Noise 1") {
        esp8266.sendTelegramMessage("7556620551:AAFrgjj9yWPZzzfPE1_8QsfpfTmHvvxcOeM", "-4537034579", "Hi, Your baby is crying")
        basic.showIcon(IconNames.TShirt)
        control.waitMicros(1000)
        control.reset()
    } else if (SerialData == "Baby Noise 2") {
        esp8266.sendTelegramMessage("7556620551:AAFrgjj9yWPZzzfPE1_8QsfpfTmHvvxcOeM", "-4537034579", "Hi, Your baby is crying")
        basic.showIcon(IconNames.TShirt)
        control.waitMicros(1000)
        control.reset()
    } else if (SerialData == "Baby Noise 3") {
        esp8266.sendTelegramMessage("7556620551:AAFrgjj9yWPZzzfPE1_8QsfpfTmHvvxcOeM", "-4537034579", "Hi, Your baby is crying")
        basic.showIcon(IconNames.Chessboard)
        control.waitMicros(1000)
        control.reset()
    } else if (SerialData == "Background Noise") {
        basic.showIcon(IconNames.Skull)
        control.waitMicros(5000)
        control.reset()
    } else if (SerialData == "Snapping Noise") {
        basic.showIcon(IconNames.House)
        control.waitMicros(5000)
        control.reset()
    } else if (SerialData == "Environment Noise") {
        basic.showIcon(IconNames.Sword)
        control.waitMicros(5000)
        control.reset()
    } else {
        basic.showIcon(IconNames.No)
        control.waitMicros(5000)
        control.reset()
    }
})
let SerialData = ""
serial.redirectToUSB()
basic.showIcon(IconNames.Umbrella)
