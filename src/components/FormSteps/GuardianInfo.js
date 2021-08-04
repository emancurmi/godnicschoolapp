import React, { Component } from 'react';

class GuardianInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}

	saveAndContinue = (e) => {
		e.preventDefault()
		if (this.checkrequirements() === true){ 
			console.log(this.checkrequirements);
			
			var phone = "+356" + this.props.values.parentMobile; 
			this.props.values.parentMobile = phone;
			this.props.nextStep() 
		} 
		else
		{ 
			this.setState({ error: true })
		
		}
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	validateEmail = (email) => {
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(email);
	}

	validatePhone = (phone) => {
		// Get the value of the input field with id="numb"
		let x = phone;
		// If x is Not a Number or less than one or greater than 10
		let text;
		if (isNaN(x) || x < 21550000 || x > 99999999) {
		  text = false;
		} else {
		  text = true;
		}
		return text;
	  }

	checkrequirements = () => {
		let checks = 0;
		if (this.props.values.parentIdCard !== "") { checks += 1; }
		if (this.props.values.parentFullName !== "") { checks += 1; }
		if (this.props.values.parentMobile !== "") { checks += 1; }
		if (this.validatePhone(this.props.values.parentMobile) !== true) { checks -= 1 }
		if (this.props.values.parentEmail !== "") { checks += 1; }
		if(this.validateEmail(this.props.values.parentEmail) === true) { checks += 1; }
		
		return (checks === 5) ? true : false;

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

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Guardian Information</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>National ID: <span className="text-danger">*</span></label>
										<input type="text" name="parentIdCard" className="form-control required" placeholder="National ID" onChange={this.props.handleChange('parentIdCard')} defaultValue={values.parentIdCard}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Full Name: <span className="text-danger">*</span></label>
										<input type="text" name="parentFullName" className="form-control required" placeholder="Full Name" onChange={this.props.handleChange('parentFullName')} defaultValue={values.parentFullName}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-8">
									<div className="form-group">
										<label>E-mail: <span className="text-danger">*</span></label>
										<input type="email" name="gemail" className="form-control required" placeholder="E-mail" onChange={this.props.handleChange('parentEmail')} defaultValue={values.parentEmail}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Mobile Number: <span className="text-danger">*</span></label>
										<input type="tel" name="parentMobile" className="form-control required" placeholder="99887700" onChange={this.props.handleChange('parentMobile')} defaultValue={values.parentMobile}/>
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

export default GuardianInfo;