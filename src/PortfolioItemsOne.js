import React, { Component } from 'react';
import styled from 'styled-components';
import survivor1 from './assets/survivor1.png';
import survivor2 from './assets/survivor2.png';

const Div = styled.div `
  padding-top: 200px;
  width: 564px;
  height: 4000px;
  margin-left: 50%;
  top: 200px;
  transform: translateX(-272px);
  background: #f8cacd;
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

class PortfolioItemsOne extends Component {

  render() {
    return (
      <Div>
        <H1>
          I.
        </H1>
        <H2>
          Fantasy Survivor
        </H2>
        <Text>
          This is a website for a Fantasy Survivor league with over 40 weekly users.
        </Text>
        <H3>
          Submit Your Move
        </H3>
        <Text>
          This is the page where moves are made.  Contestants names can be dragged and reordered.  All data about the Survivor contestants is shown on this page.
        </Text>
        <Img src={survivor1} onClick={()=> window.open(survivor1, "_blank")}/>
        <H3>
          Scoreboard
        </H3>
        <Text>
        This is the page where scores are compared.  There are three different scoring systems, and one table that averages all three for an overall rank of fantasy league players.  Clicking on a league player's name brings down a comparison of your moves to their moves throughout the season.
        </Text>
        <Img src={survivor2} onClick={()=> window.open(survivor2, "_blank")}/>
        <Text>
        This website also contains a login page, an episode blog, and an extroadinary admin page where information is put into a large detailed form.
        </Text>
        <Text>
        As well as consultation with a 10 season long Fantasy Survivor moderator, users reported bugs and requested new features over a year of fine tuning and development to bring out a sophisticated and intuitive design.
        </Text>
        <Text>
        I also built a working proof of concept to remake this page using React, Apollo, and GraphQL.
        </Text>
      </Div>
    );
  }
}

export default PortfolioItemsOne;
