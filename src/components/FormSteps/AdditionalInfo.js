import React, { Component } from 'react';

class AdditionalInfo extends Component {

	saveAndContinue = (e) => {
		e.preventDefault()
		this.props.nextStep()
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
					<h6 className="card-title">Additional Information</h6>
					<div className="header-elements"><div class="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">
				<fieldset>

					<div className="row">
						<div className="col-md-12">
							<div className="form-group">
								<label>Additional information:</label>
										<textarea name="additionalinfo" rows="5" cols="5" placeholder="If you want to add any info, do it here." className="form-control" onChange={this.props.handleChange('additionalinfo')} defaultValue={values.additionalinfo}></textarea>
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

export default AdditionalInfo;