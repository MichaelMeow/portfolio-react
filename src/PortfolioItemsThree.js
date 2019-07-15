import React, { Component } from 'react';
import styled from 'styled-components';
import cowork1 from './assets/cowork1.png';
import cowork2 from './assets/cowork2.png';
import cowork3 from './assets/cowork3.png';



const Div = styled.div `
  padding-top: 5400px;
  width: 564px;
  height: 8000px;
  margin-left: 50%;
  top: 200px;
  transform: translateX(-272px);
  background: #f8dbca;
`
const Img = styled.img `
  width: 500px;
  margin-left: 50%;
  transform: translateX(-250px);
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

class PortfolioItemsThree extends Component {
  render() {
    return (
      <Div>
        <H1>
          III.
        </H1>
        <H2>
          Work Lovely
        </H2>
        <Text>
          This is a website for the fictional coworking space Work Lovely.  I practiced mobile first design, and used the design program Sketch to create prototypes for the Phone, Tablet, and Desktop versions of the site.  This is similar to what I've done many times before in Photoshop.
        </Text>
        <H3>
          Phone Prototype
        </H3>
        <Text>
          This is a the Sketch prototype for the Phone version of the website.
        </Text>
        <Img src={cowork1} onClick={()=> window.open(cowork1, "_blank")}/>
        <H3>
          Tablet
        </H3>
        <Text>
        This is a the Sketch prototype for the Tablet version of the website.
        </Text>
        <Img src={cowork2} onClick={()=> window.open(cowork2, "_blank")}/>
        <Text>
        This is a the Sketch prototype for the Desktop version of the website.
        </Text>
        <Img src={cowork3} onClick={()=> window.open(cowork3, "_blank")}/>
        <Text>
        I completed this project in a single 8 hour day.
        </Text>
      </Div>
    );
  }
}

export default PortfolioItemsThree;
