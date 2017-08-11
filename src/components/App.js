import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters()
  }

  render () {
    return (
      <FruitBasket updateFilterCallback={this.updateFilterCallback} filters={this.state.filters} fruit={this.state.fruit} selectedFilter={this.state.currentFilter}/>
    )
  }



  updateFilterCallback = (filter) => {

    if(filter === 'all') {
      filter = null
    }
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({
        fruit: items,
        currentFilter: filter
      }))
  }



  fetchFilters () {
    console.log('fetching filters..')
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
      .then(this.updateFilterCallback(null));
  }


}

export default App;
