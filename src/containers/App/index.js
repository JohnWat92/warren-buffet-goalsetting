import React, { Component } from 'react';
import './App.css';

const GoalItem = ({item, toggleComplete, removeGoal}) => (
  <li>
    {item.title}
    <div>
      <input
        type="checkbox"
        id={item.id}
        checked={item.complete}
        onChange={toggleComplete}
      />
      <label htmlFor={item.id}></label>
      <button onClick={removeGoal}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </li>
);

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
      inputValue:'',
      selected: false,
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
  removeGoal(item){
    let newGoals = this.state.goals.filter((goal) => {
      return goal.id !== item.id;
    });
    this.setState({ goals: newGoals})
  }
  onInputChange(e){
    this.setState({ inputValue: e.target.value })
  }
  componentDidMount(){
    this.goalInput.focus();
  }
  render() {
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
              <GoalItem
                key={i}
                item={goal}
                toggleComplete={this.toggleComplete.bind(this, goal)}
                removeGoal={() => this.removeGoal(goal)}
              />
            ))}
          </ul>
      </div>
    );
  }
}

export default App;
