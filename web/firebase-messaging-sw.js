importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAOR19DXEvPrV9N2o2n66gMD2arnYqE9lM",
  authDomain: "mcchris-food-app.appspot.com",
  projectId: "mcchris-food-app",
  storageBucket: "mcchris-food-app.appspot.com",
  messagingSenderId: "133188875849",
  appId: "1:133188875849:ios:805f741cce6f62d946f198",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});