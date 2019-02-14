import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimeInputWrapper = styled.div`
	> label {
		color: #000;
	}
`;

class NumberInput extends Component {
	/**
	 * render
	 *
	 * @returns {jsx}
	 */
	render() {
		return (
			<TimeInputWrapper>
				<label>{this.props.label}</label>
				<input type={'number'} defaultValue={'0'} onChange={this.props.onChange} min={'0'} max={'99'} />
			</TimeInputWrapper>
		);
	}
}

NumberInput.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default NumberInput;
