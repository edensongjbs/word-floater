import React from 'react'

export default class MovingInput extends React.Component {
    constructor() {
        super()
        this.state = {left: "0px", top: "0px"}
    }

    updatePosition = (x, y) => {
        let xNum=parseInt(this.state.left.replace("px",""))
        let yNum=parseInt(this.state.top.replace("px",""))
        if (xNum > window.innerWidth || yNum > window.innerHeight) {
            clearInterval(this.state.interval)
            this.props.destroyWord(this.props.theString.id)
            return
        }
        xNum+=x
        yNum+=y
        this.setState({left: `${xNum}px`, top: `${yNum}px`})
    }

    componentDidMount() {
        this.setState({interval: setInterval(() => this.updatePosition( Math.floor(Math.random()*5+1), Math.floor(Math.random()*5+1)), 100)})
    }

    render() {
        // console.log(this.props)
        return (
            <p style={{position: "absolute", left:this.state.left, top: this.state.top }}>{this.props.theString.word}</p>
        )
    }
}