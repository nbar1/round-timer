import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountdownWrapper = styled.div`
	background: #f00;
	flex: 2;
`;

class Countdown extends Component {
	render() {
		return (
			<CountdownWrapper>
				Countdown
			</CountdownWrapper>
		);
	}
}

Countdown.propTypes = {

};

export default Countdown;
