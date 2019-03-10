import React, { Component } from "react";
import Header from "./components/Header"
import { Donut } from "./components/Donut"
import Wrapper from './components/Wrapper'
import Sprinkles from './components/Sprinkles'
import Footer from './components/Footer'

import {Button, Icon, Toast} from 'react-materialize'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      donuts: [
        {
          id: 1,
          url: '../images/donuts/Cherry-Old-Fashioned.png',


        },
        {
          id: 2,
          url: '../images/donuts/Chocolate-Cake.png',


        },
        {
          id: 3,
          url: '../images/donuts/Chocolate-Orange-Old-Fashioned.png',


        },
        {
          id: 4,
          url: '../images/donuts/Chocolate-Sprinkled-Glazed.png',


        },
        {
          id: 5,
          url: '../images/donuts/Cinnamon-Sugar-Cake.png',


        },
        {
          id: 6,
          url: '../images/donuts/Glazed-Overhead.png',


        },
        {
          id: 7,
          url: '../images/donuts/Maple-Cinnamon-Roll.png',


        },
        {
          id: 8,
          url: '../images/donuts/Powdered-Sugar-Cake.png',


        },
        {
          id: 9,
          url: '../images/donuts/Red-Velvet.png',


        },
        {
          id: 10,
          url: '../images/donuts/Strawberry-Glazed.png',


        },
        {
          id: 11,
          url: '../images/donuts/Toffee-Cake.png',


        },
        {
          id: 12,
          url: '../images/donuts/Vanilla-Sprinkled-Cake.png',


        }
      ],
      topScore: 0,
      clickedDonuts: [],
      message: "Click a donut to start.",
      // this state decides whether the shake animation happens 
      style: null,
      // dynamically changes the message 
      messageStyle: null,
      // the message blinking animation
      blinkerStyle: null,

    }
  }
  handleClick = id => {
    const newShuffle = this.state.donuts.sort(function () { return 0.5 - Math.random() });
    // filter this.state.donuts to get all donuts that match the id passed in the onclick 
    // I referenced Jon's example for parts of this 'algorithm' 
    const donutsFound = this.state.clickedDonuts.filter(donut => donut === id);
    let topScore = this.state.topScore;

    //  when donut clicked, if this donut doesn't match any of the donuts in the array then it hasn't been clicked yet
    if (donutsFound.length === 0) {
      // but now add this donut to the clickedDonuts array 
      let newClickedDonuts = this.state.clickedDonuts.concat(id);


      if (newClickedDonuts.length > topScore) {
        topScore = newClickedDonuts.length;
      }
      this.setState({ donuts: newShuffle, clickedDonuts: newClickedDonuts, topScore: topScore, message: "You guessed correctly", style: null, messageStyle: "correctColor", blinkerStyle: "blinker"});

    } else {
      
      // if the clicked donuts id is in the clickedDonuts array, set array back to 0
      this.setState({
        clickedDonuts: [],
        message: "You guessed incorrectly",
        style: "shake",
        messageStyle: "incorrectColor",
        blinkerStyle: "blinker"
      })
    }

  }
// this function resets the blinking animation on the mouse up so that on each click the animation is fired 
  handleMouseUp =()=> {
    this.setState({
      blinkerStyle: null
    })
  }


  render() {
    return (
      <div>
        <Header
          score={this.state.clickedDonuts.length}
          topScore={this.state.topScore}
          message={this.state.message}
          messageStyle={this.state.messageStyle}
          blinkerStyle={this.state.blinkerStyle}
        />
        <Sprinkles /> 
        <Wrapper style={this.state.style}>
          {this.state.donuts.map((donut) =>
            <Donut
              key={donut.id}
              id={donut.id}
              url={donut.url}
              handleClick={this.handleClick}
              handleMouseUp={this.handleMouseUp}
            />
          )}
        </Wrapper>
        <Footer /> 
      </div>

    )
  }
}




export default App;
