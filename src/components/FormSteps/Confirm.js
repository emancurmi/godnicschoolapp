import React, { Component } from 'react';

class Confirm extends Component {

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
					<h6 className="card-title">Confirm Information</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">
						<fieldset>
							<h2>Student's Information</h2>
							<label>ID: {values.studentIdCard}</label><br/>
							<label>First name: {values.studentFirstName}</label><br />
							<label>Last name: {values.studentLastName}</label><br />
							<label>Email: {values.studentEmail}</label><br />

							<h2>Guardian Information</h2>
							<label>ID: {values.parentIdCard}</label><br />
							<label>Full name: {values.parentFullName}</label><br />
							<label>E-mail: {values.parentEmail}</label><br />
							<label>Mobile Number: {values.parentMobile}</label><br />

							<h2>Address Information</h2>
							<label>House Name: {values.houseName}</label><br/>
							<label>House Number: {values.houseName}</label><br/>
							<label>Street Address: {values.houseName}</label><br/>
							<label>Zip Code: {values.houseName}</label><br/>
							<label>Region: {values.regionName}</label>

							<h2>Transport information</h2>
							<label>School name: {values.schoolCode}</label><br />
							<label>Class name: {values.schoolLevelCode}</label><br />
							<label>Start Date: {values.scheduleValidFrom}</label><br />
							<label>End Date: {values.scheduleValidTo}</label><br />
							<label>Transport Required : {values.scheduleType}</label><br />
							<label>Days Required: {values.scheduleActiveDays}</label>

							<h2>Other Notes</h2>
							<label>Notes: {values.notes}</label>

							<h2>Agreements </h2>
							<label>Godnic Garage Agreement: {values.consent}</label><br />
				</fieldset>
			</div>
					<div className="actions clearfix">

						<button className="btn btn-light" onClick={this.back}><i className="icon-arrow-left13 mr-2"></i> Back</button>
							
							
						<button className="btn btn-light" onClick={this.confirm}>Confirm Information <i className="icon-arrow-right14 ml-2"></i></button>

					</div>
				</form >
			</div >
		)
	}
}

export default Confirm;