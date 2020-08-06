import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = { arrayOfMovingInputs: []}

  spaceHandler(word) {
    const newAr = [...this.state.arrayOfMovingInputs, word]
    this.ListeningStateChangedEvent({arrayOfMovingInputs: newAr})
  }

  arrayOfMovingInputs() {
    this.state.arrayOfMovingInputs.map( (mi, index) => <MovingInput key={index} theString={mi}/>)
  }
  
  render() {
    return (
    <div>
      <StaticInput spaceHandler={this.spaceHandler}/>
      {this.state.arrayOfMovingInputs()}
    </div>
    );
  }
}

export default App;
