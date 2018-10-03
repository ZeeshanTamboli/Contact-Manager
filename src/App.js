import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Zeeshan';
    const sayHello = false;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if (showMath) {
      math = (
        <h4>
          {num1} + {num2} = {num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }

    return (
      <div className="App">
        <h1>The App Component</h1>
        {sayHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math}
      </div>
    );
  }
}

export default App;
