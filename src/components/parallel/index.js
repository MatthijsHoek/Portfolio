import React, { Component } from 'react'
import './parallel.scss';

export default class Parallel extends Component {
    render () {
        return (
            <>
                <div className={`parallel ${this.props.parallelClass}`}>
                    <p className="parallel__title">{this.props.parallelTitle}</p>
                    <p className="parallel__text">{this.props.parallelText}</p>
                </div>
            </>
        )
    }
}

