import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './components/Die';

function App() {
	return (
		<div className="App">
			<Die number="two" />
			<Die number="five" />
		</div>
	);
}

export default App;
