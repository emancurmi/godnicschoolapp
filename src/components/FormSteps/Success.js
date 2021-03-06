import React, { Component } from 'react';

class Success extends Component {

	confirm = (e) => {
		e.preventDefault()
		this.props.confirm()
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render() {
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Success</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">
						<fieldset>
							<p>We got your information successfully! A member of our team will get in contact with you to confirm the transfer. </p>

						</fieldset>
					</div>
				</form >
			</div >
		)
	}
}

export default Success;