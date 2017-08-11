import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  console.log('filtering fruitbasket ', props.selectedFilter)

  return (
    <div className="fruit-basket">
      <Filter handleChange={(event) => {props.updateFilterCallback(event.target.value)}} filters={props.filters}/>
      <FilteredFruitList
        filter={props.selectedFilter} fruit={props.fruit}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: '',
  filters: [],
  currentFilter: '',
  updateFilterCallback: null
}




export default FruitBasket;
