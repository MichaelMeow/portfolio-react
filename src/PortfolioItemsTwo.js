import React, { Component } from 'react';
import styled from 'styled-components';
import go1 from './assets/go1.png';
import go2 from './assets/go2.png';
import go3 from './assets/go3.png';
import go4 from './assets/go4.png';



const Div = styled.div `
  padding-top: 2750px;
  width: 564px;
  height: 8000px;
  margin-left: 50%;
  top: 200px;
  transform: translateX(-272px);
  background: #caf3f8;
`
const Img = styled.img `
  width: 500px;
  margin-left: 50%;
  transform: translateX(-250px);
  padding-bottom: 40px;
`
const SmallImg = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`
const Text = styled.p `
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 12px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 40px;
`
const H1 = styled.p `
  margin-top: 0px;
  margin-bottom: 12px;
  padding-top: 150px;
  padding-bottom: 100px;
  text-align: center;
  font-size: 52px;
  color: black;
  margin-left: 12px;
  margin-right: 12px;
`
const H2 = styled.p `
  margin-top: 0px;
  margin-bottom: 12px;
  padding-top: 150px;
  padding-bottom: 40px;
  text-align: center;
  font-size: 36px;
  color: black;
  margin-left: 12px;
  margin-right: 12px;
`
const H3 = styled.p `
  margin-top: 0px;
  margin-bottom: 12px;
  padding-bottom: 16px;
  font-size: 24px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
`

class PortfolioItemsTwo extends Component {
  render() {
    return (
      <Div>
        <H1>
          II.
        </H1>
        <H2>
          Go
        </H2>
        <Text>
          This is a website for the game of Go. It was built with Angular 6 and stores game room and move data with Firebase.  The game can be played across two computers, or together at one screen.  This game was created with me and three other classmates.  I helped with the visual design and some of the Angular architecture.
        </Text>
        <H3>
          Start Screen
        </H3>
        <Text>
          This page slowly fades in and allows you to name players and select a board size.
        </Text>
        <Img src={go1} onClick={()=> window.open(go1, "_blank")}/>
        <H3>
          Scoreboard
        </H3>
        <Text>
        This is the in game screen.
        </Text>
        <Img src={go2} onClick={()=> window.open(go2, "_blank")}/>
        <Text>
        This button wipes from black to white and back after a piece is placed, and this elegant visual shows which player is next.
        </Text>
        <SmallImg src={go3} onClick={()=> window.open(go3, "_blank")}/>
        <Text>
        This is the end screen which calculates scores and shows the winner.
        </Text>
        <Img src={go4} onClick={()=> window.open(go4, "_blank")}/>
        <Text>
        I have yet to find a Go application with as much style.
        </Text>
        <Text>
        You can see for yourself <a href='https://go-server-for-the-boys.firebaseapp.com/'>here</a>.
        </Text>
      </Div>
    );
  }
}

export default PortfolioItemsTwo;
