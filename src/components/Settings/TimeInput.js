import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimeInputWrapper = styled.div`
	> label {
		color: #000;
	}
`;

class TimeInput extends Component {
	/**
	 * validateInput
	 *
	 * @param {event} event
	 * @returns {void}
	 */
	validateInput = event => {
		let input = event.target.value;

		if (/^[0-9]:[0-5][0-9]$/.test(input) === true) {
			event.target.value = `0${input}`;
		}
		else if (/^[0-5][0-9]$/.test(input) === true) {
			event.target.value = `00:${input}`;
		}
		else if (/^[1-9]$/.test(input) === true) {
			event.target.value = `0${input}:00`;
		}
		else if (/^[0-5][0-9]:[0-5][0-9]$/.test(input) === false) {
			event.target.value = '00:00';
		}

		this.props.onChange(event.target.value);
	}

	/**
	 * onFocus
	 *
	 * @param {event} event
	 * @returns {void}
	 */
	onFocus = event => {
		if (event.target.value === '00:00') {
			event.target.value = '';
		}
	}

	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<TimeInputWrapper>
				<label>{this.props.label}</label>
				<input type="text" defaultValue={'00:00'} onBlur={this.validateInput} onFocus={this.onFocus} />
			</TimeInputWrapper>
		);
	}
}

TimeInput.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default TimeInput;
