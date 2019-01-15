import React, { Component } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
	background: #f00;
	flex: 2;
`;

class Timer extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<TimerContainer>
				Timer
			</TimerContainer>
		);
	}
}

export default Timer;
