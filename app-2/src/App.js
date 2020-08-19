import React, { Component } from 'react'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      array: ['Marry', 'Poppins']
    }
  }
  render() {
    let phrase = this.state.array.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return <div className="App">{phrase}</div>
  }
}

export default App