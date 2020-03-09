import React, { Component } from 'react'
import exerciseImg from '../images/exercise.png'

export class Card extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={exerciseImg} alt=""/>
                </div>
                <div>
                    <h1>Technique guides</h1>
                    <p>Learn somethinge else dude.</p>
                </div>
            </div>
        )
    }
}

export default Card
