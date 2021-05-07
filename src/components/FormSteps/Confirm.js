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
							<label>ID: {values.studentid}</label><br/>
							<label>First name: {values.sfirstname}</label><br />
							<label>Last name: {values.slastname}</label><br />
							<label>Address: {values.saddress}</label><br />

							<h2>Guardian Information</h2>
							<label>ID: {values.gnationalid}</label><br />
							<label>First name: {values.gfirstname}</label><br />
							<label>Last name: {values.glastname}</label><br />
							<label>Address: {values.gaddress}</label><br />
							<label>E-mail: {values.gemail}</label><br />
							<label>Tel Number: {values.gtelno}</label><br />
							<label>Mobile Number: {values.gmobno}</label><br />

							<h2>Transport information</h2>
							<label>Pickup address: {values.pickupadd}</label><br />
							<label>School name: {values.schoolname}</label><br />
							<label>Class name: {values.classname}</label><br />
							<label>Transport Required : {values.pickupways}</label><br />
							<label>Additional Info : {values.additionalinfo}</label><br />

							<h2>Agreements </h2>
							<label>Free School Transport Agreement: {values.fsta}</label><br />
							<label>School Transporation Section Agreement: {values.stsa}</label><br />
							<label>Godnic Garage Agreement: {values.agreement}</label><br />
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