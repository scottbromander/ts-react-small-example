import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

class App extends Component<any> {


  render() {
    // BASIC TYPES
    // let firstValue: string = 'Scott'; // String
    // let firstValue: number = 34; // Number
    // let firstValue: boolean = true; // Boolean
    // let firstValue: number[] = [3, 4]; // Array creation 1
    // let firstValue: Array<string> = ['S', 'c', 'o', 't', 't']; // Array creation 2

    // Complex Types
    // Tuple
    // let aTuple: [string, number] = ['Scott', 37];
    // Enums
    // enum Codes { first = 1, second = 2 };
    // Any - Sort of defeats the purpose of TS
    // let firstName: any = 'Scott'
    // Voids
    // const warning = (): void => console.log('warn');

    return (
      <div className="App">
        <Message name='Scott' message='This is a simple message'/>
      </div>
    );
  }
}

export default App;
