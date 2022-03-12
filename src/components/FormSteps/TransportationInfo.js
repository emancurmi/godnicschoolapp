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
		if (this.props.values.scheduleType !== "") { checks += 1; }
		if (this.props.values.scheduleValidFrom !== "") { checks += 1; }
		if (this.props.values.scheduleValidTo !== "") { checks += 1; }
		if (this.props.values.scheduleActiveDays !== "") { checks += 1; }

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
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>
						<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Schedule Type: <span className="text-danger">*</span></label><br />
										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="scheduleType" className="form-input-styled" value="both" onChange={this.props.handleChange('scheduleType')} defaultValue={values.scheduleType} />
										2 ways
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="scheduleType" className="form-input-styled" value="mornings" onChange={this.props.handleChange('scheduleType')} defaultValue={values.scheduleType} />
											Monings Only
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="scheduleType" className="form-input-styled" value="evenings" onChange={this.props.handleChange('scheduleType')} defaultValue={values.scheduleType} />
											Afternoons Only
											</label>
										</div>


									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Start Date: <span className="text-danger">*</span></label>
										<input type="date" name="scheduleValidFrom" className="form-control required" placeholder="" onChange={this.props.handleChange('scheduleValidFrom')} defaultValue={values.scheduleValidFrom} />
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>End Date: <span className="text-danger">*</span></label>
										<input type="date" name="scheduleValidTo" className="form-control required" placeholder="" onChange={this.props.handleChange('scheduleValidTo')} defaultValue={values.scheduleValidTo} />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Schedule Type: <span className="text-danger">*</span></label><br />
										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="checkbox" name="scheduleActiveDays" className="form-input-styled" value="mon" onChange={this.props.handleChange('scheduleActiveDays')} defaultValue={values.scheduleActiveDays} />
											Monday
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="checkbox" name="scheduleActiveDays" className="form-input-styled" value="tue" onChange={this.props.handleChange('scheduleActiveDays')} defaultValue={values.scheduleActiveDays} />
											Tuesday
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="checkbox" name="scheduleActiveDays" className="form-input-styled" value="wed" onChange={this.props.handleChange('scheduleActiveDays')} defaultValue={values.scheduleActiveDays} />
											Wednesday
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="checkbox" name="scheduleActiveDays" className="form-input-styled" value="thu" onChange={this.props.handleChange('scheduleActiveDays')} defaultValue={values.scheduleActiveDays} />
											Thursday
											</label>
										</div>

										<div className="form-check form-check-inline">
											<label className="form-check-label">
												<input type="checkbox" name="scheduleActiveDays" className="form-input-styled" value="fri" onChange={this.props.handleChange('scheduleActiveDays')} defaultValue={values.scheduleActiveDays} />
											Friday
											</label>
										</div>
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
				</form >
			</div >
		)
	}
}

export default TransportationInfo;