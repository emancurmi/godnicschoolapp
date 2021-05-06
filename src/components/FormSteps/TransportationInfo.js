import React, { Component } from 'react';

class TransportationInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}

	saveAndContinue = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	checkrequirements = () => {
		let checks = 0;
		if (this.props.values.studentid !== "") { checks += 1; }
		if (this.props.values.sfirstname !== "") { checks += 1; }
		if (this.props.values.slastname !== "") { checks += 1; }
		if (this.props.values.saddress !== "") { checks += 1; }

		return (checks === 4) ? true : false;

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
					<h6 className="card-title">Transportation Information</h6>
					<div className="header-elements"><div class="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Pick Up Address: <span className="text-danger">*</span></label>
										<input type="text" name="pickupaddress" className="form-control required" placeholder="Pick Up Address" onChange={this.props.handleChange('pickupadd')} defaultValue={values.pickupadd} />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>School Name:<span className="text-danger">*</span></label>
										<input type="text" name="schoolname" className="form-control required" placeholder="School Name" onChange={this.props.handleChange('schoolname')} defaultValue={values.schoolname} />
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Class Name:</label>
										<input type="text" name="classname" className="form-control required" placeholder="Class Name" onChange={this.props.handleChange('classname')} defaultValue={values.classname} />
									</div>
								</div>
							</div>


							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Transportation needed:<span className="text-danger">*</span></label><br />
										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="pickupways" className="form-input-styled" value="both" onChange={this.props.handleChange('pickupways')} defaultValue={values.pickupways} />
										2 ways
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="pickupways" className="form-input-styled" value="mornings" onChange={this.props.handleChange('pickupways')} defaultValue={values.pickupways} />
											Monings Only
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="pickupways" className="form-input-styled" value="evenings" onChange={this.props.handleChange('pickupways')} defaultValue={values.pickupways} />
											Afternoons Only
											</label>
										</div>


									</div>
								</div>
							</div>
						</fieldset>
						{this.showerror()}
					</div>
					<div className="actions clearfix">
						<a className="btn btn-light" onClick={this.back}><i class="icon-arrow-left13 mr-2"></i> Back</a>
						<a className="btn btn-light" onClick={this.saveAndContinue}>Save and Continue <i class="icon-arrow-right14 ml-2"></i></a>
					</div>
				</form >
			</div >
		)
	}
}

export default TransportationInfo;