import React, { Component } from 'react';
import styled from 'styled-components';


const Div = styled.div `
  height: calc(100vh - 240px);
  z-index: 4;
  position: fixed;
  top: 140px;
  left: 50%;
  width: 600px;
  transform: translateX(-300px);
  pointer-events: none;
`

class PrintGraphic extends Component {
  render() {
    return (
      <Div >
        <svg width="600" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <rect x="25" y="5" width="560" height="40"  fill="white" />
          <circle cx="575" cy="25" r="20" stroke="white" fill="black" stroke-width="4"/>
          <line x1="20" x2="580" y1="5" y2="5" stroke="white" stroke-width="4"/>
          <line x1="25" x2="580" y1="45" y2="45" stroke="white" stroke-width="4"/>
          <line x1="595" x2="595" y1="25" y2="1000" stroke="white" stroke-width="4"/>
          <line x1="25" x2="25" y1="45" y2="1000" stroke="white" stroke-width="4"/>
          <circle cx="25" cy="25" r="20" stroke="white" fill="white" stroke-width="4"/>
        </svg>
      </Div>
    );
  }
}

export default PrintGraphic;
