import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
import Header from "./components/Header/Header";
import AppRouter from "./UI/AppRouter";

function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
