import React, { Component } from 'react'
import './onGoing.css'
import IntervalBadge from './IntervalBadge'
export default class EnchereGoing extends Component {
render() {
return (
<div className="enchere-item mb-3">
    <div className="ion-text-wrap">
        <button className="btn btn-light  text w-100 position-relative">
            <h2>{this.props.enchere.refEnchere}</h2>
            <span className="date">
                <IntervalBadge interval={this.props.enchere.duree} color="warning"></IntervalBadge>
            </span>
            <h3 className="text-center">
        Mise Max: <span className="badge bg-success">{this.props.enchere.prixDeMisEnEnchere} {this.props.devise}</span>
        </h3>
        </button>
    </div>
    
</div>
)
}
}