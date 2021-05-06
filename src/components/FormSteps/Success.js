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
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Success</h6>
					<div className="header-elements"><div class="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">
						<fieldset>
							<p>Student information has been sent suceesful a member of our company will get in contact with you to confirm information</p>

						</fieldset>
					</div>
				</form >
			</div >
		)
	}
}

export default Success;