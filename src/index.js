import App from "./App";
import { createRoot } from "react-dom/client"
import React from "react";
import { AuthProvider } from "./context/AuthProvider";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
 <React.StrictMode>
   <AuthProvider>
   <App />
   </AuthProvider>
 </React.StrictMode>
);