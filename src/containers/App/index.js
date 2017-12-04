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
        { id: 0, title: 'Read lots', complete: false, selected: false },
        { id: 1, title: 'code everyday', complete: true, selected: false },
        { id: 2, title: 'follow my routines', complete: false, selected: false }
      ],
      lastId: 2,
      inputValue: '',
      selected: false,
    };
    this.addGoal = this.addGoal.bind(this);
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
  isSelected(){
    let selectedGoals = this.state.goals.filter((goal) => goal.selected);
    let numberSelected = selectedGoals.length
    if(numberSelected < 5){
      alert(`Please Select ${ 5 - numberSelected} more goals!`)
    }else if(numberSelected === 5){
      alert(`Here's your goals`)
    }
  }


  addGoal(e){
    e.preventDefault();
    if(this.state.inputValue){
      const id = this.state.lastId + 1;
      const newGoals = this.state.goals.concat({
        id,
        title: this.state.inputValue,
        complete: false
      })
      this.setState({
        goals: newGoals,
        lastId: id
      });
      this.setState({ inputValue: '' })
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
            <form name="addGoal" onSubmit={this.addGoal}>
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
