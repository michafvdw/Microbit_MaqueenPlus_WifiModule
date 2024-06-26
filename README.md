<img height="200" width="200" src="WhatsApp Image 2024-06-11 at 14.22.34.jpeg">

# Microbit_MaqueenPlus_WifiModule
In this project, you will use a micro
connected to a Maqueen Plus robot and an ESP8266 WiFi module. The micro
will control the robot's movements and send sensor data (like temperature or distance) to a remote server. Additionally, commands can be sent to the robot from a web interface or another remote source.

# About this project
This code is for a project called Medialab 2 at the Hogeschool Rotterdam. This project is made for firefighters in the region Rijnmond. The research question is as follows: *How can we help residents of Rijnmond (20-40) who live in a densely populated area to act correctly during dangerous situations before emergency responders arrive?* The robot helps people who have a fire in their home to get to safety. For this prototype it only detects and dodges objects. The robot has a temperature sensor and send this data to an App where the user can see this data. 

# Components required 

- 1.Micro: The main microcontroller board. 
- 2.Maqueen Plus Robot: An educational robot that can be controlled via a micro.
- 3.ESP8266 WiFi Module: To enable WiFi connectivity for sending and receiving data.
- 4.Jumper Wires: For connecting the ESP8266 to the micro.
- 5.Power Supply: Batteries for the Maqueen Plus robot and the micro
- 6. Huskylens: For recognizing objects
- 7. Groove kit: for the connection to the ESP2866

# Files 
Here the two different javascript files will be described

## recognise_objects_huskylens.js

In this code the maqueen plus drives forward until it encounters a object, then it turns left. It works with an ultrasonic sensor which detecters how far away an object is. If the distance is less than 10 cm it turns left. Now, it also works with the huskylens. As seen in the above picture, a QR code is printed out and put on a mug. The huskylens scans this code and turns left if the QR code is detected. This way the maqueen plus is able to detect and dodge objects. An extra feature could be face recognization. You are  able to use face recognization with the husky lens and this way you can drive to the person that needs to abandon the building. 

## esp8266_thingspeak.js

In this code the microbit uses the wifi module ESP8266 to connect to the internet. It communicates with Thingspeak, an IoT platform. The data of the temperature is send there and it makes a graph of this data. What you will need to make this work is a thingspeak account, a thingspeak channel and a write API key. You'll also need the groove extension instead of the ESP2866 extension. 
Website for thingspeak --> https://thingspeak.com/channels/public?tag=esp8266 

## Recognise_face.js
This is a prototype where the Maqueen plus drives towards a recognized face. The huskylens is trained with a face and given an ID of 1. This is not used for our final product but a useful prototype nonetheless. 
