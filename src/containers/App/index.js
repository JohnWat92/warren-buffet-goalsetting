import React, { Component } from 'react';
import './App.css';
import GoalItem from "../../components/goalItem"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class App extends Component {
  constructor(){
    super();
    this.state = {
      goals: [],
      lastId: 0,
      inputValue: '',
      selected: false,
    };
    this.addGoal = this.addGoal.bind(this);
  }

  isSelected(){
    let selectedGoals = this.state.goals.filter((goal) => goal.checked);
    let numberSelected = selectedGoals.length
    if(numberSelected < 5){
      alert(`Please Select ${ 5 - numberSelected} more goals!`)
    }else if(numberSelected === 5){
      alert(`Here's your goals`)
    }
  }

  toggleComplete(item){
    let newGoals = this.state.goals.map((goal) => {
      if(item.id === goal.id){
        goal.checked = !goal.checked;
      }
      return goal;
    });
    this.setState({
      goals: newGoals
    });
    let selectedGoals = this.state.goals.filter((goal) => goal.checked);
    let numberSelected = selectedGoals.length
    if(numberSelected > 5){
      alert(`Please Select 5 goals, you have ${numberSelected} goals at the moment`)
    }else if(numberSelected === 5){
      alert(`Here's how Warren would do it!`)
      this.setState({
        selected: !selected
      })
    }
    let selected = this.state.goals.filter((goal) => goal.selected);
  }

  addGoal(e){
    e.preventDefault();
    if(this.state.inputValue){
      const id = this.state.lastId + 1;
      if(id <= 10){
        const newGoals = this.state.goals.concat({
          id,
          title: this.state.inputValue,
          checked: false
        })
        this.setState({
          goals: newGoals,
          lastId: id
        });
        this.setState({ inputValue: '' })
      }else{
        alert(`You have enough goals!, select 5 goals that means the most to you`)
      }
    }
  }

  removeGoal(item){
    const id = this.state.lastId  - 1;
    this.setState({
      lastId: id
    });
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
    // console.log(this.state)
    return (
      <div className="App">
          <h2>Welcome Warren Buffet's Two List Strategy!</h2>
          <div>
            <form name="addGoal" onSubmit={this.addGoal}>
              <input type="text" value={this.state.inputValue} ref={(input) => (this.goalInput = input)} onChange={(e) => this.onInputChange(e)} />
              <span>(press enter to add)</span>
            </form>
          </div>

          {this.state.selected ?
            <div className="seperated">
              <p> see dis, only focus on dis</p>
              <ul>
                  {this.state.goals.filter((goal) => goal.checked).map((goal, i) => (
                    <GoalItem
                      key={i}
                      item={goal}
                      toggleComplete={this.toggleComplete.bind(this, goal)}
                      removeGoal={() => this.removeGoal(goal)}
                    />
                  ))}
              </ul>
              <p> see dis, ignore dis</p>
              <ul>
                  {this.state.goals.filter((goal) => !goal.checked).map((goal, i) => (
                    <GoalItem
                      key={i}
                      item={goal}
                      toggleComplete={this.toggleComplete.bind(this, goal)}
                      removeGoal={() => this.removeGoal(goal)}
                    />
                  ))}
              </ul>
            </div>
          :
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
          }
      </div>
    );
  }
}

export default App;
