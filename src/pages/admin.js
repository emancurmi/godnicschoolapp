import React, { Component } from 'react';
import Bookings from '../components/Bookings/Bookings';

export default class Admin extends Component {

	render() {
		return (
			<div className="page-content">
				<div className="content-wrapper">
					<div className="content">
						<Bookings/>
					</div>
				</div>
			</div>

		)
	}
} 
