import React, { Component } from 'react';
import styled from 'styled-components';

import Countdown from './Countdown';
import Settings from './Settings';

const TimerWrapper = styled.div`
	display: flex;
	align-items: center;
`;

class Timer extends Component {
	/**
	 * state
	 *
	 * @type {obj}
	 */
	state = {
		rounds: 0,
		roundTime: '00:00',
		restTime: '00:00',
		warmupTime: '00:00',
		roundEndWarningTime: '00:00',
		currentRound: 0,
	};

	/**
	 * updateSetting
	 *
	 * @param {string} setting
	 * @param {any} value
	 * @returns {void}
	 */
	updateSetting = (setting, value) => {
		this.setState({
			[setting]: value,
		});
	};

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<TimerWrapper>
				<Countdown />
				<Settings updateSetting={this.updateSetting} />
			</TimerWrapper>
		);
	}
}

export default Timer;
