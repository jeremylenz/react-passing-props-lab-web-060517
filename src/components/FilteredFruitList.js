import React, { Component } from 'react';

const FilteredFruitList = (props) => {

  const list = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);

  console.log('filtering by ', props.filter)
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: '',
  filter: '',
  items: []
}





function blah() {
  fetch('/api/fruit')
    .then(response => response.json())
    .then(items => this.setState({ items }));
}

export default FilteredFruitList;
