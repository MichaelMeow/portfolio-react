import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Div = styled.div `
  height: 10000px;
`




class App extends Component {
  render() {
    return (
      <Div>
        <Switch>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <Route exact path='/' component={PageOne} />
            <Route path='/admin' component={PageTwo} />
          </ReactCSSTransitionGroup>
        </Switch>
      </Div>
    );
  }
}

export default App;
