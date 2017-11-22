import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state={}
  componentWillMount () {
    fetch('/hello')
    .then((res) => res.json())
    .then((res) => this.setState(res))
    .catch(console.error)
  }

  render() {

    return (
      <div style={{flex: 1, marginTop: 20}} className="App">
        <h1>Awesome Gimi Project</h1>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

export default App;
