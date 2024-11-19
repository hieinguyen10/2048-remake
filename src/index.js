import React from "react";
import { createRoot } from 'react-dom/client'; // Use createRoot in React 18
import App from "./App"



const app = document.getElementById("root");
const root = createRoot(app); // Create root with React 18
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);