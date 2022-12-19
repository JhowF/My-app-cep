import React from 'react';
import { Header } from './Components/Header';
import {Middle} from './Components/Middle';
import {Data} from './Components/Data';
import  {Footer} from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Middle/>
      <Data/>
      <Footer/>
    </div>
  );
}

export default App;
