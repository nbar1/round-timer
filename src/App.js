import React, { Component } from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';
import Settings from './components/Settings';

const AppContainer = styled.div`
	display: flex;
	align-items: center;
`;

class App extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<AppContainer className="App">
				<Timer />
				<Settings />
			</AppContainer>
		);
	}
}

export default App;
