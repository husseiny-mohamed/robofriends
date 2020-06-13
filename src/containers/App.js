import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { searchUser } from '../redux/search/search.actions';
import { getRobots } from '../redux/robots/robots.actions';

class App extends Component {
  componentDidMount() {
    this.props.onGetRobots();
  }
  render() {
    const { searchText, onSearchChange, robots, isPending } = this.props;

    console.log('searchText: ', searchText);

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchText.toLocaleLowerCase());
    });

    return isPending ? (
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
    robots: state.robots.robots,
    isPending: state.robots.isPending,
    error: state.robots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (searchText) => dispatch(searchUser(searchText)),
    onGetRobots: () => dispatch(getRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
