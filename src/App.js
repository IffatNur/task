import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import Featurs from './components/Features/Featurs';
import Courses from './components/Courses/Courses';
import Trainer from './components/Trainer/Trainer';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Featurs></Featurs>
      <Register></Register>
      <Courses></Courses>
      <Trainer></Trainer>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  );
}

export default App;
