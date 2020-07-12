import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends React.Component{

  render(){
    return (

      <BrowserRouter>
        <div className="App">
            <Main />
        </div>
      </BrowserRouter>
    );
  }

}



export default App;
