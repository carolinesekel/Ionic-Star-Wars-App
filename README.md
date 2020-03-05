# Ionic-Star-Wars-App
Ionic app using the SWAPI

## Background
This project was an effort to learn the ionic framework and was made with the help of the Ionic Academy's Ionic Crash Course. 
I developed the pages not included in the crash course on my own but they still need a little more love!

## Installation
Install cordova (make sure you have node.js)
```bash
sudo npm install -g cordova
```
Install ionic
```bash
sudo npm install -g ionic
```

## Testing/Usage
```bash
ionic cordova build ios
ionic cordova emulate ios
```
## Project Structure
File/Folder | Content
------------ | -------------
angular.json | configuration values for Ionic/Angular project
config.xml | used once the native project is built from this project (If special permissions are needed in the native app it will be set inside this file)
e2e | holds the configuration for our testing setup that’s already included
ionic.config.json | contains some basic information about the project and is used if app is uploaded to the Ionic Pro platform
resources | app icon and splash screen
src | actual Angular code for project
platforms | native projects (added to folder when built)
plugins | Cordova plugins that are installed
www | auto generated and contains your current build (Don’t change code here, only in the src/app folder)
