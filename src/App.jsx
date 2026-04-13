import React from "react";
import ThemeProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Switcher App</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;