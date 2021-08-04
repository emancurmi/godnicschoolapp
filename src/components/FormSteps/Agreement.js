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
		let checks = 0;
		if(this.props.values.consent === true) {checks += 1; }
		return (checks === 1) ? true : false;
	}

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Godnic Garage Agreement</h6>
					<div className="header-elements"><div className="list-icons"></div>
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
										<label>Additional information:</label>
											<textarea name="notes" rows="5" cols="5" placeholder="If you want to add any info, do it here." className="form-control" onChange={this.props.handleChange('notes')} defaultValue={values.notes}></textarea>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<div className="form-check">
											<label className="form-check-label">
												<input type="checkbox" name="cbxagreement" className="form-check-input" value="true" onChange={this.props.handleChange('consent')} checked={values.consent} />
									I confirm that I have read and accept the Privacy Notice & - Terms & conditions <span className="text-danger">*</span>
										</label>
										</div>
									</div>
								</div>
							</div>
							
						</fieldset>
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

export default Agreement;