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
		this.checkrequirements() ? this.props.nextStep() : this.setState({ error: true })
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	checkrequirements = () => {
		let checks = 0;
		if (this.props.values.gnationalid !== "") { checks += 1; }
		if (this.props.values.gfirstname !== "") { checks += 1; }
		if (this.props.values.glastname !== "") { checks += 1; }
		if (this.props.values.gaddress !== "") { checks += 1; }
		if (this.props.values.gemail !== "") { checks += 1; }
		if (this.props.values.gtelno !== "" || this.props.values.gmobno !== "") { checks += 1; }

		return (checks === 6) ? true : false;

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
										<input type="text" name="gnationalid" className="form-control required" placeholder="National ID" onChange={this.props.handleChange('gnationalid')} defaultValue={values.gnationalid}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>First name: <span className="text-danger">*</span></label>
										<input type="text" name="gfirstname" className="form-control required" placeholder="First Name" onChange={this.props.handleChange('gfirstname')} defaultValue={values.gfirstname}/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Last name: <span className="text-danger">*</span></label>
										<input type="text" name="glastname" className="form-control required" placeholder="Last Name" onChange={this.props.handleChange('glastname')} defaultValue={values.glastname}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Address: <span className="text-danger">*</span></label>
										<input type="text" name="gaddress" className="form-control required" placeholder="Address" onChange={this.props.handleChange('gaddress')} defaultValue={values.gaddress}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>E-mail: <span className="text-danger">*</span></label>
										<input type="email" name="gemail" className="form-control required" placeholder="E-mail" onChange={this.props.handleChange('gemail')} defaultValue={values.gemail}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Telephone Number: <span className="text-danger">*</span></label>
										<input type="tel" name="gtelno" className="form-control required" placeholder="21550000" onChange={this.props.handleChange('gtelno')} defaultValue={values.gtelno}/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Mobile Number: <span className="text-danger">*</span></label>
										<input type="tel" name="gmobileno" className="form-control required" placeholder="99887700" onChange={this.props.handleChange('gmobno')} defaultValue={values.gmobno}/>
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