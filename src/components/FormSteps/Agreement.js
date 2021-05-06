import React, { Component } from 'react';

class Agreement extends Component {

	saveAndContinue = (e) => {
		e.preventDefault()
		this.checkrequirements() ?
			this.props.nextStep() :
			console.log("error")
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	checkrequirements = () => {
		console.log(this.props.values.agreement)
		return this.props.values.agreement;
	}

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Godnic Garage Agreement</h6>
					<div className="header-elements"><div class="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">
						<fieldset>
							<div className="row">
								<div className="col-md-12">
									<p>We will process the data provided in this Application Form and any other data which you subsequently give to us in any manner, in line with our Privacy Notice. We advise that you read our full Privacy Policy and Terms & Conditions.</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<div className="form-check">
											<label className="form-check-label">
												<input type="checkbox" value="true" name="cbxagreement" className="form-check-input" onChange={this.props.handleChange('agreement')} checked={values.agreement} />
									I confirm that I have read and accept the Privacy Notice & - Terms & conditions <span className="text-danger">*</span>
										</label>
										</div>
									</div>
								</div>
							</div>

						</fieldset>
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

export default Agreement;