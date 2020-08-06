import React from 'react';
import './App.css';
import MovingInput from './MovingInput'
import StaticInput from './StaticInput'


class App extends React.Component {
  state = { arrayOfMovingInputs: []}

  spaceHandler = (word) => {
    const newAr = [...this.state.arrayOfMovingInputs, word]
    this.setState({arrayOfMovingInputs: newAr})
  }

  arrayOfMovingInputs = () => {
    return this.state.arrayOfMovingInputs.map( (mi, index) => <MovingInput key={index} theString={mi}/>)
  }
  
  render() {
    return (
    <div>
      <StaticInput spaceHandler={this.spaceHandler}/>
      {this.arrayOfMovingInputs()}
    </div>
    );
  }
}

export default App;
