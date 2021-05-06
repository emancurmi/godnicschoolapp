import React, { Component } from 'react';

class FSTA extends Component {

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
		return this.props.values.fsta;
    }

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Free School Transporation Agreement</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">
						<fieldset>

							<div className="row">
								<div className="col-md-12">
									<h5>Form A: Free School Transport Agreement (Non-State Schools) between Parent/Guardian and to Godnic Garage and Paul Borg of Sweet Lord, Triq San Guzepp Labre Victoria, VCT 2533, Malta, approved School Transport Service Provider.</h5>
									<ol>
										<li>The above approved School Transport Provider (further referred to as "Provider" in this
										Agreement) is entrusted by the Minstry for Education and Employment (hereinafter "MEDE")
										with the transportation of children attending Church and Independent Schools from home to
							school and back.</li>

										<li>In order to be able to offer this service, the Provider is required by MEDE to receive
										applications with the data as indicated in this Agreement, for the purpose of the Free School
										Transport scheme as provided by MEDE, in order to be able to:
							<ul>
												<li>plan transport routes;</li>
												<li>formulate transport schedules;</li>
												<li>communicate with parents/legal guardians as necessary;</li>
												<li>share data as may be required with the School Transport Section, within the MEDE
												to deliver free school transport services as provided for in the MEDE free school
							transport scheme.</li>
											</ul>
										</li>

										<li>All personal data is to be used exclusively for the purpose of the provision of School Transport
										services to students attending Church and Independent Schools and will be processed at all
										stages in full confidentiality and in accordance with GDPR and pertinent data protection
							legislation.</li>

										<li>The personal data will not be used for any other purpose without the consent of the parents
										/ legal guardians or unless specifically provided by law. The personal data will be retained for
										not more than two (2) months after the end of the scholastic year.
										The School Transport Bus used by the provider may be equipped with apparata in connection
										with the parent/guardian notification system. This apparatus will carry no personal data or
										images.
								<br />
							Approved School Transport Service Provider: Godnic Garage and Paul Borg
							Address:  Sweet Lord, Triq San Guzepp Labre Victoria, VCT 2533, Malta
							Tel: +356 2155 7711</li>

							Data Processing

							<li>The data submitted with the application to the Provider and that will be processed by both
										the Provider and MEDE are the following:
								<ul>
												<li>Parent / Legal guardian details including ID Number, Name, Surname, Address, Email address,
							Mobile Number</li>
												<li>Student details including ID Number, Name, Surname, Address, School Name, School Year and
							preferred pickup/drop off point</li>
												<li>In cases where provided, details requiring specific transportation is also processed, depending
							on the information submitted by the parent / legal guardian.</li></ul>
							For processing by MEDE you may also wish to consult the Data Protection policy on the MEDE website
							<a href="https://schooltransport.edu.mt/?page_id=657">https://schooltransport.edu.mt/?page_id=657</a>
										</li>
									</ol>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<div className="form-check">
											<label className="form-check-label">
												<input required type="checkbox" name="cbxfsta" className="form-check-input" value="true" onChange={this.props.handleChange('fsta')} checked={values.fsta} />
											Form A: Disclaimer By signing this agreement you are confirming that you have read the above and that you are agreeing to the data processing by the Provider and MEDE for scholastic year 2020/2021 for the purposes of making use of the free school transport scheme provided by MEDE. This agreement is valid for the entire duration of the scholastic year and you are not authorised to change service provider for the scholastic year once this form is signed. Should this service provider fail in providing safe and professional school transport services, you are to contact the School Transport Section at MEDE (t. 2598 1888 / e. schooltransport@gov.mt) to request a change in service provider. We thank you for your kind cooperation. <span className="text-danger">*</span>
										</label>
										</div>
									</div>
								</div>
							</div>
						</fieldset>

					</div>
					<div className="actions clearfix">
						<a className="btn btn-light" onClick={this.back}><i className="icon-arrow-left13 mr-2"></i> Back</a>
						<a className="btn btn-light" onClick={this.saveAndContinue}>Save and Continue <i className="icon-arrow-right14 ml-2"></i></a>
					</div>
				</form >
			</div >
		)
	}
}

export default FSTA;