import React from 'react'

export default class StaticInput {
    state = {word:""}

    changeHandler = (e) => {
        // Need to tweak these coniditons to not allow words of multiple spaces
        if (this.state.word.includes(" ") && this.state.word.length > 1) {
            const newWord = this.state.word.replace(/\s/g, '')
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