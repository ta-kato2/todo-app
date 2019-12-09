import React from 'react';
import logo from './logo.svg';
import Person from "./Person"
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Person
        name={"のぐりん"}
        age={28}
        height={167}
      />
      <Person
        name={"ぷるぷる"}
        age={21}
        height={153}
      />
      </header>
    </div>
  );
}

export default App;
