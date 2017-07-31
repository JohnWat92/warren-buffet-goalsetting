import React from 'react'

const goalItem = (props) => (
  <li>
    <p>{props.item}</p>
    <div>
      <input
        type="checkbox"
        id={props.item.id}
        checked={props.item.complete}
        onChange={this.toggleComplete}
      />
      <label htmlFor={props.item.id}></label>
      <button>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  </li>
)

export default goalItem;
