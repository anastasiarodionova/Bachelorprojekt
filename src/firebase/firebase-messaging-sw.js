importScripts("/__/firebase/9.2.0/firebase-app-compat.js");
importScripts("/__/firebase/9.2.0/firebase-messaging-compat.js");
importScripts("/__/firebase/init.js");

const messaging = firebase.messaging();

//Um Nachrichten an ein Gerät zu senden, wird dafür das FCM-Token benötigen
messaging
        .requestPermission()
        .then(function(){
          MsgElem.innerHTML = 'Notification permission granted';
          console.log ('Notification permission granted');

          return messaging.getToken();
        })
        .then(function(token){
          TokenElem.innerHTML = 'Device token is : <br>' + token;
        })
        .catch(function(err){
          ErrElem.innerHTML = ErrElem.innerHTML + ';' + err;
          console.log('Unable to get permission to notify', err);
        })


messaging.usePublicVapidKey(
  "BKJbLk19bZEvF5G3lhaEeIu1w_KkXa5-gN487sfvB_smxuJ_ZH0d3JmEdXNSg_7l3LMz22gAlUNSsrwpjuZCL68"
);

// IDs of divs that display registration token UI or request permission UI.
const tokenDivId = "token_div";
const permissionDivId = "permission_div";

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
  // Update the UI to include the received message.
  appendMessage(payload);
});

function resetUI() {
  clearMessages();
  showToken("loading...");
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging
    .getToken({ vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
    .then((currentToken) => {
      if (currentToken) {
        sendTokenToServer(currentToken);
        updateUIForPushEnabled(currentToken);
      } else {
        // Show permission request.
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // Show permission UI.
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      showToken("Error retrieving registration token. ", err);
      setTokenSentToServer(false);
    });
}

function showToken(currentToken) {
  // Show token in console and UI.
  const tokenElement = document.querySelector("#token");
  tokenElement.textContent = currentToken;
}

// Send the registration token your application server, so that it can:
// - send messages back to this app
// - subscribe/unsubscribe the token from topics
function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    console.log("Sending token to server...");
    // TODO(developer): Send the current token to your server.
    setTokenSentToServer(true);
  } else {
    console.log(
      "Token already sent to server so won't send it again " +
        "unless it changes"
    );
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem("sentToServer") === "1";
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem("sentToServer", sent ? "1" : "0");
}

function showHideDiv(divId, show) {
  const div = document.querySelector("#" + divId);
  if (show) {
    div.style = "display: visible";
  } else {
    div.style = "display: none";
  }
}

function deleteToken() {
  // Delete registration token.
  messaging
    .getToken()
    .then((currentToken) => {
      messaging
        .deleteToken(currentToken)
        .then(() => {
          console.log("Token deleted.");
          setTokenSentToServer(false);
          // Once token is deleted update UI.
          resetUI();
        })
        .catch((err) => {
          console.log("Unable to delete token. ", err);
        });
    })
    .catch((err) => {
      console.log("Error retrieving registration token. ", err);
      showToken("Error retrieving registration token. ", err);
    });
}

// Add a message to the messages element.
function appendMessage(payload) {
  const messagesElement = document.querySelector("#messages");
  const dataHeaderElement = document.createElement("h5");
  const dataElement = document.createElement("pre");
  dataElement.style = "overflow-x:hidden;";
  dataHeaderElement.textContent = "Received message:";
  dataElement.textContent = JSON.stringify(payload, null, 2);
  messagesElement.appendChild(dataHeaderElement);
  messagesElement.appendChild(dataElement);
}

// Clear the messages element of all children.
function clearMessages() {
  const messagesElement = document.querySelector("#messages");
  while (messagesElement.hasChildNodes()) {
    messagesElement.removeChild(messagesElement.lastChild);
  }
}

function updateUIForPushEnabled(currentToken) {
  showHideDiv(tokenDivId, true);
  showHideDiv(permissionDivId, false);
  showToken(currentToken);
}

function updateUIForPushPermissionRequired() {
  showHideDiv(tokenDivId, false);
  showHideDiv(permissionDivId, true);
}

resetUI();

firebase.initializeApp({
  apiKey: "AIzaSyCERaAm4V9B7LT8gLox3_yYVL6vpUf1SVY",
  authDomain: "webshop-24e2d.firebaseapp.com",
  projectId: "webshop-24e2d",
  storageBucket: "webshop-24e2d.appspot.com",
  messagingSenderId: "452516455480",
  appId: "1:452516455480:web:2e7a0f42235aeb019eb2cd",
});

messaging.setBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/assets/icons/icon-512x512.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
