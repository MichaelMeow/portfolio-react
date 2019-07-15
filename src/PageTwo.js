import React, { Component } from 'react';
import PortfolioItemsTwo from './PortfolioItemsTwo'
import styled from 'styled-components';
import katakana from './assets/katakana.gif';


const Name = styled.div `
  height: 20vh;
  position: fixed;
  left: 30px;
  top: 50%;
  margin-top: -150px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Z = styled.div `
  z-index: 1;
  position: relative;
  /* background-color: #f8cacd; */
`
const Background = styled.div `
  width: 100vw;
  height: 100vh;
  position: fixed;
`
const RightSVG = styled.svg `
  width: calc(50vw - 293px);
  height: 100vh;
  position: fixed;
  right: 0px;
`
const LeftSVG = styled.svg `
  width: calc(50vw - 274px);
  height: 100vh;
  position: fixed;
  left: 0px;
`
const PageTwoDiv = styled.div `
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 3;
  pointer-events: none;
`
const Flex = styled.div `
  position:fixed;
  left:0px;
  bottom:0px;
  width:100%;
  align-items: center;
  left: 50%;
  margin-left: -400px;
`
const ProjectSpaceTwo = styled.div `
  height: 100px;
  width: 800px;
  z-index: 3;
  background: url("http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=000000&density=100&opacity=100");
`
const Dots = styled.div `
  height: 20vh;
  position: fixed;
  right: 30px;
  top: 45%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Dot = styled.div `
  transform: scale(.8);
`


class PageTwo extends Component {


  render() {
    return (
      <div>
        <PageTwoDiv pointerEvents={'box-none'}>
          <Background>
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">\
              <rect x="0" y="0" width="100%" height="155"  fill="#caf3f8" />
            </svg>
            <RightSVG width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">\
              <rect x="0" y="0" width="100%" height="100%"  fill="#caf3f8" />
            </RightSVG>
            <LeftSVG width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">\
              <rect x="0" y="0" width="100%" height="100%"  fill="#caf3f8" />
            </LeftSVG>
          </Background>
          <Name>
            <img src={katakana} />
          </Name>
          <Flex>
            <ProjectSpaceTwo />
          </Flex>
          <Dots>
            <Dot >
            <svg version="1.1"
            x="0px" y="0px" width="20px" height="20px" viewBox="-7 -4.5 96 93" overflow="visible" enable-background="new -7 -4.5 96 93">
            <defs>
            </defs>
            <circle fill="none" stroke="#0095ff" stroke-width="10" stroke-miterlimit="10" cx="41.748" cy="41.749" r="36.748"/>
            </svg>
            </Dot>
            <Dot>
            <svg version="1.1"
            x="0px" y="0px" width="20px" height="20px" viewBox="-7 -4.5 96 93" overflow="visible" enable-background="new -7 -4.5 96 93">
            <defs>
            </defs>
            <circle fill="#0095ff" stroke="#0095ff" stroke-width="10" stroke-miterlimit="10" cx="41.748" cy="41.749" r="36.748"/>
            </svg>
            </Dot>
            <Dot>
            <svg version="1.1"
            x="0px" y="0px" width="20px" height="20px" viewBox="-7 -4.5 96 93" overflow="visible" enable-background="new -7 -4.5 96 93">
            <defs>
            </defs>
            <circle fill="none" stroke="#0095ff" stroke-width="10" stroke-miterlimit="10" cx="41.748" cy="41.749" r="36.748"/>
            </svg>
            </Dot>
            <Dot>
            <svg version="1.1"
            x="0px" y="0px" width="20px" height="20px" viewBox="-7 -4.5 96 93" overflow="visible" enable-background="new -7 -4.5 96 93">
            <defs>
            </defs>
            <circle fill="none" stroke="#0095ff" stroke-width="10" stroke-miterlimit="10" cx="41.748" cy="41.749" r="36.748"/>
            </svg>
            </Dot>
          </Dots>
        </PageTwoDiv>
        <Z>
          <PortfolioItemsTwo />
        </Z>
      </div>
    );
  }
}

export default PageTwo;
