import React, { Component } from 'react';
import LoginForm from '../components/Login/LoginForm';

export default class Index extends Component {

	render() {
		return (
			<div className="page-content">
				<div className="content-wrapper">
					<div className="content">
						<LoginForm />
					</div>
				</div>
			</div>

		)
	}
} 
