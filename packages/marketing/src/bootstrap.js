import React from "react";
import ReactDom from "react-dom";

import App from "./app";

console.log("Marketing Bootstrap");

// Mount Function to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};

// Case 1 if we are in development and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// we are runing throught container
// and we should export rhe mount function
export { mount };
