import React, { Component } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import NavBar from './NavBar/NavBar';
import TitleComponent from './TitleComponent/TitleComponent';
import './TitleComponent/TitleComponent.css';
import ImageComponent from './ImageComponent/ImageComponent';
import images from './ImageComponent/images.json'

class App extends Component {
  state = {
    images,
    score: 0,
    message: 'Click a picture to score points but never under any circumstance click the same picture twice or your computer will self destruct Inspector Gadget style!',
    imagesThatWereClicked: []
  };

  imageClickHandler = event => {
    const arrayOfImagesThatWereAlreadyClicked = this.state.imagesThatWereClicked;
    const theImageThatJustGotClicked = event.target.alt;
    // const currentScore = this.state.score;

    console.log(this.state.score)
    if (arrayOfImagesThatWereAlreadyClicked.includes(theImageThatJustGotClicked)) {
      this.setState({
        score: 0,
        imagesThatWereClicked: [],
        message: `Sorry but you already clicked on that one.  Your computer will now self destruct.  Click a picture to play again`
        
      })
    }
    // else if (currentScore === 12) {
    //   this.setState({
    //     score: 0,
    //     message: `I am in awe, of the power of your mind.  You win!`,
    //     imagesThatWereClicked: []
    //   })
    // }
    else {
      arrayOfImagesThatWereAlreadyClicked.push(theImageThatJustGotClicked);
      this.setState({
        score: this.state.score + 1,
        message: `You have not yet clicked that image, way to go.  You may click again.`,
        images: this.state.images.sort((a,b) => {
          return 0.5-Math.random();
        }),
      });
    }
  }
  render() {
    return (
      <div className="App">

        <Row>
          <NavBar
            score={this.state.score}
            message={this.state.message}
          />

        </Row>

        <Row>
          <TitleComponent />
        </Row>

        <Row className='image-container'>
          {this.state.images.map(images => (
            <ImageComponent
              key={images.id}
              name={images.name}
              image={images.image}
              imageClickHandler={this.imageClickHandler}
            />
          ))}
        </Row>

      </div>
    )
  }
}

export default App;
