import React, { Component } from 'react';
import Die from './Die';
import '../css/RollDice.css';

export default class RollDice extends Component {
	state = { die1: 'one', die2: 'one', isClicked: false };

	static defaultProps = {
		nums: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	handleClick = e => {
		const die1 = Math.floor(Math.random() * 6);
		const die2 = Math.floor(Math.random() * 6);
		this.setState({
			die1: this.props.nums[die1],
			die2: this.props.nums[die2],
			isClicked: true
		});
		setTimeout(() => {
			this.setState({ isClicked: false });
		}, 820);
	};
	render() {
		return (
			<div className="RollDice">
				<div className="RollDice-flexbox">
					<Die number={this.state.die1} isClicked={this.state.isClicked} />
					<Die number={this.state.die2} isClicked={this.state.isClicked} />
				</div>
				<button
					onClick={this.handleClick}
					className="RollDice-myButton"
					disabled={this.state.isClicked}
				>
					{this.state.isClicked ? 'Rolling Dice' : 'Click to Roll Dice'}
				</button>
			</div>
		);
	}
}
