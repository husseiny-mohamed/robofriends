import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { searchUser } from '../redux/search/search.actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  render() {
    const { robots } = this.state;
    const { searchText, onSearchChange } = this.props;

    console.log('searchText: ', searchText);

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchText.toLocaleLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={(event) => {
            onSearchChange(event.target.value);
          }}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (searchText) => dispatch(searchUser(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
