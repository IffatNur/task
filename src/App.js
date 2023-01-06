import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import Featurs from './components/Features/Featurs';
import Courses from './components/Courses/Courses';
import Trainer from './components/Trainer/Trainer';

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Featurs></Featurs>
      <Courses></Courses>
      <Trainer></Trainer>
    </div>
  );
}

export default App;
