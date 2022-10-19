import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import "./styles.css";

const APP_ID = "EC2666FC-B201-4799-9228-96BE9C29D96A";
const USER_ID = "Kayvon";

export default function App() {
  return (
    <div className="App">
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}
