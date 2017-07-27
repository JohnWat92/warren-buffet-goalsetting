import React from 'react'

const goalItem = ({ item, toggleComplete }) => (
  <li>
    <p>{item.title}</p>
    <div>
      <input
        type="checkbox"
        id={item.id}
        checked={item.complete}
        onChange={this.toggleComplete}
      />
      <label htmlFor={item.id}></label>
      <button>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </li>
)

export default goalItem;
