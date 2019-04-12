### Front-end App

This project is reflecting only the Front-end requirements 

### Run App excute command `npm start` at the root folder

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### App Set Up

There are Three main component: Header.js, MessagerViewer.js and MessageItem.js

## Header.js: 

This component shows the logo and name of the view port
## MessagerViewer.js:

This component takes care of the amount of starred messages, Search field, toggle view between trashed and non-trashed messages and renders the MessageItem.js. It also makes sure the MessageItem.js is updated on how to display its state
## MessageItem.js

This component displays all messages and its content. It can trashed and star ad message

### Folder Structure

The index.js file inside the src folder renders the entire App

## app folder

The App.js is directly under this folder. The App.js file is the main component parent to all other components

## app -> components folder

This folder contains all of the components mentioned above. The components are separeted by appropiate folders. There is also a folder for images for the logo provided by the assessment

## app -> localDate folder

This folder simple contains the json file provide in the assessment and it is acting as local data

## app -> redux folder

This folder contains everything implement about redux. There are three folders inside: actions, actionTypes, and reducers. This folder contain appropiate file implementing redux relate actions

## app -> utilities folder

This folder contains a Constant.js file where all constants variables are stored except for redux constants. Also a Helper.js file where various functions are implemented to help mainly the react components

#Note: the folder named referenceImageOnlyPurpose at the root

This folder is only there to refenrence the image I was provided with to match to my best of ability