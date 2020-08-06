import React from 'react'

export default class StaticInput extends React.Component {
    state = {word:""}

    changeHandler = (e) => {
        if (e.target.value.includes(" ") && this.state.word.length > 1) {
            const newWord = e.target.value.replace(/\s/g, '')
            this.setState({word:""})
            this.props.spaceHandler(newWord)
        }
        else {
            this.setState({word: e.target.value})
        }
    }
    
    render(){
        return (
            <input onChange={this.changeHandler} value={this.state.word} />
        )
    }
} 