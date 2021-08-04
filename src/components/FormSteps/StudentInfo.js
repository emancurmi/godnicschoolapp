import React, { Component } from 'react';

class StudentInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}

	saveAndContinue = (e) => {
		e.preventDefault()
		this.checkrequirements() ? this.props.nextStep() : this.setState({ error: true })
	}

	validateEmail = (email) => {
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(email);
	}

	checkrequirements = () => {
		let checks = 0;
		if (this.props.values.studentIdCard !== "") { checks += 1; }
		if (this.props.values.studentFirstName !== "") { checks += 1; }
		if (this.props.values.studentLastName !== "") { checks += 1; }
		if (this.props.values.studentEmail !== "") {  
			if(this.validateEmail(this.props.values.studentEmail) !== true) { checks -= 1; }
		}
		return (checks === 3) ? true : false;
		 
	}

	showerror = () => {
		if (this.state.error != null) {
			return (
				<div className="row">
					<div className="col-md-12">
						<p className="bg-danger">Please fill in all information required</p>
					</div>
				</div>
			);
		}
	}

	componentDidMount() {
		
    }

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Student Information</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Student ID: <span className="text-danger">*</span></label>
										<input type="text" name="studentIdCard" className="form-control required" placeholder="Student ID" onChange={this.props.handleChange('studentIdCard')} defaultValue={values.studentIdCard} />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>First name: <span className="text-danger">*</span></label>
										<input type="text" name="studentFirstName" className="form-control required" placeholder="First Name" onChange={this.props.handleChange('studentFirstName')} defaultValue={values.studentFirstName}/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Last name: <span className="text-danger">*</span></label>
										<input type="text" name="studentLastName" className="form-control required" placeholder="Last Name" onChange={this.props.handleChange('studentLastName')} defaultValue={values.studentLastName}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Student E-mail:</label>
										<input type="email" name="studentEmail" className="form-control required" placeholder="Student Email" onChange={this.props.handleChange('studentEmail')} defaultValue={values.studentEmail} />
									</div>
								</div>
							</div>

						</fieldset>
						{this.showerror()}
					</div>
					<div className="actions clearfix">							
					<button className="btn btn-light" onClick={this.back}><i className="icon-arrow-left13 mr-2"></i> Back</button>
						<button className="btn btn-light" onClick={this.saveAndContinue}>Save and Continue <i className="icon-arrow-right14 ml-2"></i></button>

					</div>
				</form>
			</div>
		)
	}
}

export default StudentInfo;