import React, { Component } from 'react'
import './parallel.scss';

export default class Parallel extends Component {
    render () {
        return (
            <>
                <div class={`parallel ${this.props.parallelClass}`}>
                    <p class="parallel__title">{this.props.parallelTitle}</p>
                    <p class="parallel__text">{this.props.parallelText}</p>
                </div>
            </>
        )
    }
}

