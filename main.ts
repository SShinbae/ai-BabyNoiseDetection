/**
 * Change the "Class 1" bubbles in the if statements to the same names as the classes you made on Teachable Machine. 
 * 
 * Spaces, spelling and capitalization matters! 
 * 
 * Class names can't be longer than 12 characters.
 */
/**
 * Anything you put inside these if statements will be activated when the micro:bit receives that class name from the https://microbitai.inventor.city 
 * 
 *  vision recognition website
 */
/**
 * Click on the + to add more classes, and the - to delete them
 * 
 * Just duplicate this <SerialData = " "> hexagon and place it into the  new else if statement
 */
input.onSound(DetectedSound.Loud, function () {
	
})
// This block listens to the website for your class names, and saves them as a variable
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readLine()
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
    if (esp8266.isESP8266Initialized()) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    esp8266.connectWiFi("YNWA", "liverpool")
    if (esp8266.isWifiConnected()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    if (SerialData == "Class 3") {
        esp8266.sendTelegramMessage("7556620551:AAFrgjj9yWPZzzfPE1_8QsfpfTmHvvxcOeM", "-4537034579", "Hi, Your Baby is car")
        basic.showIcon(IconNames.TShirt)
        control.reset()
    } else {
        basic.showIcon(IconNames.No)
    }
})
let SerialData = ""
serial.redirectToUSB()
