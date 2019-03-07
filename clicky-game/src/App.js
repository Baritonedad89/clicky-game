import React, { Component } from "react";
import Header from "./components/Header"
import { Card } from "./components/Card"
import Wrapper from './components/Wrapper'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      donuts: [
        {
          id: 1,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Cinnamon-Sugar-Cake.jpg',


        },
        {
          id: 2,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Glazed-Overhead.jpg',


        },
        {
          id: 3,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Maple-Cinnamon-Roll.jpg',


        },
        {
          id: 4,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/10/Cherry-Old-Fashioned.jpg',


        },
        {
          id: 5,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Toffee-Cake.jpg',


        },
        {
          id: 6,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Chocolate-Orange-Old-Fashioned.jpg',


        },
        {
          id: 7,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Chocolate-Sprinkled-Glazed.jpg',


        },
        {
          id: 8,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Vanilla-Sprinkled-Cake.jpg',


        },
        {
          id: 9,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Chocolate-Cake.jpg',


        },
        {
          id: 10,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/10/Red-Velvet.jpg',


        },
        {
          id: 11,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/10/Strawberry-Glazed.jpg',


        },
        {
          id: 12,
          url: 'https://stansdonuts.com/wp-content/uploads/2018/07/Powdered-Sugar-Cake.jpg',


        }
      ],
      topScore: 0,
      clickedDonuts: [],
    }
  }

  handleClick = id => {
    const newShuffle = this.state.donuts.sort(function () { return 0.5 - Math.random() });
    // filter this.state.donuts for donuts with an id not equal to the id being removed
    const donutsFound = this.state.clickedDonuts.filter(donut => donut === id)


    let topScore = this.state.topScore;
    if (donutsFound.length === 0) {
      
     let newClickedDonuts = this.state.clickedDonuts.concat(id);
      if (newClickedDonuts.length > topScore) {
        topScore = newClickedDonuts.length;
      }
      this.setState({ donuts: newShuffle, clickedDonuts: newClickedDonuts, topScore: topScore });
    } else {
      this.setState({
        clickedDonuts: []
      })
    }

  }


  render() {
    return (
      <div>
        <Header
          score={this.state.clickedDonuts.length}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.donuts.map((donut) =>
            <Card
              key={donut.id}
              id={donut.id}
              url={donut.url}
              handleClick={this.handleClick}
            />
          )}

        </Wrapper>
      </div>

    )
  }
}




export default App;
