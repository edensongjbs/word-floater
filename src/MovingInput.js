import React from 'react'

export default class MovingInput extends React.Component {
    constructor() {
        super()
        this.state = {left: "0px", top: "0px", 
            interval: setInterval(() => this.updatePosition( Math.floor(Math.random()*5+1), Math.floor(Math.random()*5+1)), 100)}
    }

    updatePosition = (x, y) => {
        let xNum=parseInt(this.state.left.replace("px",""))
        let yNum=parseInt(this.state.top.replace("px",""))
        if (xNum > window.innerWidth || yNum > window.innerHeight) {
            clearInterval(this.state.interval)
            return
        }
        xNum+=x
        yNum+=y
        this.setState({left: `${xNum}px`, top: `${yNum}px`})
    }

    render() {
        return (
            <p style={{position: "absolute", left:this.state.left, top: this.state.top }}>{this.props.theString}</p>
        )
    }
}