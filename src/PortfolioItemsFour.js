import React, { Component } from 'react';
import styled from 'styled-components';
import momo0 from './assets/momo0.png';
import momo1 from './assets/momo1.png';
import momo2 from './assets/momo2.png';
import momo3 from './assets/momo3.png';



const Div = styled.div `
  padding-top: 7800px;
  width: 564px;
  height: 3400px;
  margin-left: 50%;
  top: 200px;
  transform: translateX(-272px);
  background: #f8e9ca;
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
const End = styled.h1 `
  margin-top: 20px;
  margin-bottom: 12px;
  padding-top: 600px;
  font-size: 66px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
`

class PortfolioItemsFour extends Component {
  render() {
    return (
      <Div>
        <H1>
          III.
        </H1>
        <H2>
          Momo's Artist Website
        </H2>
        <Text>
          This is a website for the artist Momo Meow.  This was a quick idea I had that shows my ability to make something cool and casual very quickly.  An more complex website would feel overworked for this application.
        </Text>
        <H3>
          Brick Wall
        </H3>
        <Text>
          The home page presents you with a brick wall.
        </Text>
        <Img src={momo0} onClick={()=> window.open(momo0, "_blank")}/>
        <H3>
          Break The Bricks
        </H3>
        <Text>
        A little fist curser breaks each brick as you mouse over the page.
        </Text>
        <Img src={momo1} onClick={()=> window.open(momo1, "_blank")}/>
        <Text>
        You can create your own frame to view the content behind the wall.
        </Text>
        <Img src={momo2} onClick={()=> window.open(momo2, "_blank")}/>
        <Text>
        Scrolling reveals the content while the hole you've made stays fixed.
        </Text>
        <Img src={momo3} onClick={()=> window.open(momo3, "_blank")}/>
        <Text>
        The artist loves the website and gets complemented frequently.  I'm proud of this simple and unique idea that I had never seen before.
        </Text>
        <Text>
        The website can be seen <a href='https://momomeowwebsite.firebaseapp.com/'>here</a>.
        </Text>
        <H3>
          Thank you for viewing my portfolio.  This website was made using Create React App, React Router, and Styled Components.
        </H3>
        <H3>
          You can contact me at: DearMichaelMeow@gmail.com
        </H3>
        <End>
        THE END.
        </End>
      </Div>
    );
  }
}

export default PortfolioItemsFour;
