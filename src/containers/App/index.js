import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      goals: [{}],
      inputValue:''
    };
  }
  addGoal(e){
    e.preventDefault();
    if(this.state.inputValue){
      const newGoals = this.state.goals.concat({
      })
    }
  }
  onInputChange(e){
    this.setState({ inputValue: e.target.value })
  }
  componentDidMount(){
    this.goalInput.focus();
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
          <h2>Welcome Warren Buffet's Two List Strategy!</h2>
          <div>
            <form>
              <input type="text" value={this.state.inputValue} ref={(input) => (this.goalInput = input)} onChange={(e) => this.onInputChange(e)} />
              <span>(press enter to add)</span>
            </form>
          </div>
          <ol>

          </ol>
      </div>
    );
  }
}

export default App;
