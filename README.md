## Table of Contents

- [App Description](#app-description)
- [Questions, Comments, Concerns](#questions-feedback)
- [Setting Up Cloud Firestore](#setting-up-cloud-firestore)
- [Folder Structure](#folder-structure)
- [Running Example](#running-example)
- [Live Demo](#live-demo)

## App Description

This app showcases React Native authentication and data storage integrations with Firebase and Cloud Firestore. The user can sign in to the app and
if the user doesn't exist an account will be created and authenticated. On the calendar tab, there is a text box where they can input text to 
save to the data store. On the profile tab, there is a logout button which kicks the user back to the sign in page.

## Questions, Comments, Concerns

Please direct any questions, comments, or concerns to the issues section of the repo. Thanks for your feedback. 

## Folder Structure

The project structure is made with going further in mind. Actions and reducers are moved
into their own directories since there would be many of them in a React Native application. A lib
directory has been added for constant variables.


```
react-native-with-firebase-authentication-and-firestore/
  .expo/
  assets/
    icon.png
    splash.png
  README.md
  package.json
  src/
    actions/
      index.js
      types.js
      AuthAction.js
      ProfileAction.js
      NoteAction.js
    components/
      index.js
      Input.js
      Button.js
    lib/
      Constants.js
    navigation/
      AppNavigation.js
      MainNavigation.js
      RootNavigation.js
      SignInNavigation.js
    reducers/
      AuthReducer.js
      index.js
      ProfileReducer.js
      NoteReducer.js
    screens/
      ProfileScreen.js
      NoteScreen.js
      SignInScreen.js
  .babelrc
  .watchmanconfig
  app.json
  App.js
```

## Setting Up Cloud Firestore

Cloud Firestore setup is similar to firebase realtime database setup. 

The main thing that is needed are the initialization keys generated when making a database
on the site so the example app works. 

Go to [firebase.google.com](https://firebase.google.com/). Login or create an account if
you don't already have one. 

Then, go to console. Select the "Add Project" square. 

Name your project anything you like and then on the following page select the option
"Add Firebase to your web app". 

A popup will appear with configuration information. Copy the entire config variable and 
paste it over the placeholder one in ../App.js. 

Then you are good to go. Your app will start using your Cloud Firestore.

## Running Example

To run the project simply clone this repository and navigate into it in terminal. 

Run npm install to acquire dependencies. 

Add in the cloud firestore config object if you haven't already.

Then, simply perform the command `exp start`. If you don't have an expo account, you will be asked to make one to run the program.

The command will run and eventually a QR code will be displayed. For android phones, download the expo application to scan the QR code 
and run this application on your phone. For iOS, `run exp send -s <your-phone-number-or-email>` in another terminal window to
send the URL to your device. These instructions are also available in the terminal after running `exp start`. 