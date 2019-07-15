import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PrintGraphic from './PrintGraphic';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Redirect } from 'react-router';

const Div = styled.div `
  height: 10000px;
  z-index: 5;
  position: relative;
`

class App extends Component {


    state = {
      currentPage: 'one'
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    // checkScrollPosition = () => {
    //   console.log(window.pageYOffset);
    //
    // }

    handleScroll = (event) => {
      if (window.pageYOffset < 2500 && this.state.currentPage !== 'one') {
        this.setState({
          currentPage: 'one'
        });
      }
      if (window.pageYOffset > 2499 && window.pageYOffset < 5000 && this.state.currentPage !== 'two') {
        this.setState({
          currentPage: 'two'
        });
      }
      if (window.pageYOffset > 4999 && window.pageYOffset < 7500 && this.state.currentPage !== 'three') {
        this.setState({
          currentPage: 'three'
        });
      }
      if (window.pageYOffset > 7499 && window.pageYOffset < 10000 && this.state.currentPage !== 'four') {
        this.setState({
          currentPage: 'four'
        });
      }
    }

  render() {
    if (this.state.currentPage === 'one' && (window.location.href.includes('two') === true || window.location.href.includes('three') === true || window.location.href.includes('four') === true)) {
      return <Redirect to='/' />
    }
    if (this.state.currentPage === 'two' && window.location.href.includes('two') === false) {
      return <Redirect to='/two' />
    }
    if (this.state.currentPage === 'three' && window.location.href.includes('three') === false) {
      return <Redirect to='/three' />
    }
    if (this.state.currentPage === 'four' && window.location.href.includes('four') === false) {
      return <Redirect to='/four' />
    }

    return (
      <div>
        <Div>
        <PrintGraphic />
          <Switch>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
              <Route exact path='/' component={PageOne} />
              <Route path='/two' component={PageTwo} />
              <Route path='/three' component={PageThree} />
              <Route path='/four' component={PageFour} />
            </ReactCSSTransitionGroup>
          </Switch>
        </Div>
      </div>
    );
  }
}

export default App;
