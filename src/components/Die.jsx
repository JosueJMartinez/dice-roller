import React, { Component } from 'react';
import '../css/Die.css';

export default class Die extends Component {
	render() {
		const props = this.props;

		return (
			<div className="Die">
				<i class={`fas fa-dice-${this.props.number}`} />
			</div>
		);
	}
}
