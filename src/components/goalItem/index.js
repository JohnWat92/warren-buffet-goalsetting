import React from 'react'

const GoalItem = ({item, toggleComplete, removeGoal}) => (
  <li>
    {item.title}
    <div>
      <input
        type="checkbox"
        id={item.id}
        checked={item.selected}
        onChange={toggleComplete}
      />
      <label htmlFor={item.id}></label>
      <button onClick={removeGoal}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </li>
);

export default GoalItem;
