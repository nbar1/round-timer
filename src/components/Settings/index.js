import React, { Component } from 'react';
import styled from 'styled-components';

import TimeInput from './TimeInput';
import NumberInput from './NumberInput';

const SettingsContainer = styled.div`
	background: grey;
	flex: 1;
`;

class Settings extends Component {
	/**
	 * updateNumberOfRounds
	 *
	 * @param {event} event
	 */
	updateNumberOfRounds(event) {
		console.log(`rounds ${event.target.value}`);
	};

	/**
	 * updateRoundTime
	 *
	 * @param {string} value
	 */
	updateRoundTime(value) {
		console.log(`round time ${value}`);
	};

	/**
	 * updateRestTime
	 *
	 * @param {string} value
	 */
	updateRestTime(value) {
		console.log(`rest time ${value}`);
	};

	/**
	 * updateWarmUpTime
	 *
	 * @param {string} value
	 */
	updateWarmUpTime(value) {
		console.log(`warm up ${value}`);
	};

	/**
	 * updateRoundEndWarning
	 *
	 * @param {string} value
	 */
	updateRoundEndWarning(value) {
		console.log(`round end warning ${value}`);
	};

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<SettingsContainer>
				<NumberInput label={'Rounds'} onChange={this.updateNumberOfRounds} />
				<TimeInput label={'Round Time'} min={'00:00:00'} max={'00:60:00'} onChange={this.updateRoundTime} />
				<TimeInput label={'Rest Time'} min={'00:00:00'} max={'00:60:00'} onChange={this.updateRestTime} />
				<TimeInput label={'Warm Up'} min={'00:00:00'} max={'00:60:00'} onChange={this.updateWarmUpTime} />
				<TimeInput label={'Round End Warning'} min={'00:00:00'} max={'00:60:00'} onChange={this.updateRoundEndWarning} />
			</SettingsContainer>
		);
	}
}

export default Settings;
