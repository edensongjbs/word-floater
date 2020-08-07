import React from 'react';
import './App.css';
import MovingInput from './MovingInput'
import StaticInput from './StaticInput'


class App extends React.Component {
  state = { arrayOfMovingInputs: []}
  counter = 0

  destroyWord = (id) => {
    const newArray = [this.state.arrayOfMovingInputs].filter(e => e.id!==id)
    this.setState({arrayOfMovingInputs: newArray}) 
  }
  
  spaceHandler = (word) => {
    console.log(word)
    const newWord = {word: word, id: this.counter++}
    console.log(newWord)
    const newAr = [...this.state.arrayOfMovingInputs, newWord]
    // console.log(newAr)
    this.setState({arrayOfMovingInputs: newAr})
  }

  arrayOfMovingInputs = () => {
    return this.state.arrayOfMovingInputs.map( mi => <MovingInput destroyWord={this.destroyWord} key={mi.id} theString={mi}/>)
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
