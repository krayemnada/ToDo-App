import React, { Component } from 'react'

export class App extends Component {
  state ={
    
    Task1 : "React",
    Task2: "React props",
    Task3 : "React state",
  
  }
  handleAdd = () =>{
    this.setState({ Add:! this.state.Add});
  }
  render() {
    return (
      <div>
        <h4> {this.state.Task1} </h4>
        <h4> {this.state.Task2} </h4>
        <h4> {this.state.Task3} </h4>
        
        <form onSubmit={this.handleAdd}>
        <label>
          Nom :
          <input type="text" value={this.state.value}  />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      </div>
    )
  }
}

export default App

