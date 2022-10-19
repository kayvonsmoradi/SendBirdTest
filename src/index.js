import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const firebaseConfig = {
  apiKey: "AIzaSyCewT7NlAv6asTDWCEH10qC9P5ViXAkv5s",
  authDomain: "kayvontest-f4769.firebaseapp.com",
  projectId: "kayvontest-f4769",
  storageBucket: "kayvontest-f4769.appspot.com",
  messagingSenderId: "476549495192",
  appId: "1:476549495192:web:a7bffe3df94ce9268b93ed"
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(new URL("../firebase-messaging-sw.js", import.meta.url), {
      type: "module"
    })
    .then(
      function (response) {
        // Service worker registration done
        console.log("Registration Successful", response);
      },
      function (error) {
        // Service worker registration failed
        console.log("Registration Failed", error);
      }
    );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
