import React, { Component } from 'react';
import './App.css';
import goalItem from '../../components/goalItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      goals: [
        { id: 0, title: 'Learn React', complete: false },
        { id: 1, title: 'Learn Redux', complete: true },
        { id: 2, title: 'Learn Havascript', complete: false }
      ],
      lastId: 2,
      inputValue:''
    };
  }
  toggleComplete(item){
    let newGoals = this.state.goals.map((goal) => {
      if(item.id === goal.id){
        goal.complete = !goal.complete;
      }
      return goal;
    });
    this.setState({
      goals: newGoals
    });
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
          <ul>
            {this.state.goals.map((goal, i) => (
              <goalItem
                key={i}
                item={goal}
                toggleComplete={this.toggleComplete.bind(this, goal)}
              />
            ))}
          </ul>
      </div>
    );
  }
}

export default App;
