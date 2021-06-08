import React, { Component } from 'react';

class STSA extends Component {

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
		return this.props.values.stsa;
	}

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">School Transporation Section Agreement</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="steps clearfix"></div>
					<div className="content clearfix">

						<fieldset>

							<div className="row">
								<div className="col-md-12">
									<h5>Form B: Agreement between the School Transport Section (MEDE) and Parents/Legal Guardians (Non-State Schools)</h5>

									<p>Godnic Garage and Paul Borg are an approved School Tansport Service provider (further referred to as
									"Provider" in this Agreement) entrusted with the transportation of children attending Church and
						Independent Schools from home to school and back.</p>

									<p>As you are aware the Government hasintroduced Free School Transport for students attending Church
						and Independent Schools.</p>

									<p>In order to be able to offer this service for free, the Ministry for Education and Employment
									(hereinafter MEDE), will process the Data as agreed in this Agreement for the purpose of Free School
						Transport in order to be able to:</p>

									<ol>
										<li>plan transport routes;</li>
										<li>formulate transport schedules;</li>
										<li>communicate with parents/legal guardians;</li>
										<li>monitor the number of times the particular student makes use of the free transport;</li>
										<li>other tasks strictly in connection with the Free School Transport Initiative.
										The personal data submitted by the Parents/Legal Guardians to the Provider is forwarded to the MEDE
										for the provision of free transportation services to the student concerned, to implement the Free
							School Transport Initiative.</li>
									</ol>

									<p>All personal data will be used exclusively for the purpose of School Transport and will be shared and
									processed at all stages in full confidentiality and in accordance with GDPR and pertinent data
						protection legislation.</p>

									<p>The personal data will not be used for any other purpose without the consent of the parents / legal
									guardians or unless specifically provided by law. The personal data will be retained for not more than
						two (2) months after the end of the scholastic year.</p>

									<p>Kindly also note that MEDE has contracted third party providers to process personal data on its behalf,
									and for which MEDE will also be responsible. Contractual safeguards as required under the GDPR have
						been provided to secure such processing.</p>

									<p>Data Processsing</p>

									<p>The data you submitted to the Provider that will be processed by both the Provider and MEDE are the
						following:</p>

									<ol>
										<li>Parent / Legal guardian details including ID Number, Name, Surname, Address, Email address,
							Mobile Number</li>
										<li>Student details include ID Number, Name, Surname, Address, School Name, School Year andSs
							preferred pickup/drop off point</li>
										<li>In cases where provided, details requiring specific transportation is also processed, depending
							on the information submitted by the parent / legal guardian.</li>
									</ol>
									<p>The School Transport Bus used by the provider may be equipped with apparata in connection with the
									parent/guardian notification system. This apparatus will carry no personal data or images. Should the
									free School Transport Mobile App be introduced, the data captured through the device will be
							processed as follows:</p>
									<ol>
										<li>Using a contracted third party systems, notifications will be issued to parents in order to notify
							when their respective child has embarked / disembarked from a vehicle.</li>
										<li>Once the data is processed and the contact details of the respective parent / legal guardian
							are identified, a notification is issued through our third party supplier.</li>
										<li>The registered Parent / Legal guardian will receive a notification through the mobile app
							notifying them that the respective child has embarked / disembarked from the vehicle.</li>
									</ol>
									<p>You may also wish to consult the Data Protection policy on the MEDE website</p>

								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<div className="form-check">
											<label className="form-check-label">
												<input type="checkbox" name="cbxstsa" className="form-check-input" value="true" onChange={this.props.handleChange('stsa')} checked={values.stsa} />
											Form B: Disclaimer By signing this agreement you are agreeing to the data processing by the Provider and MEDE for scholastic year 2021/2022 for the purposes of making use of the free school transport scheme provided by MEDE. <span className="text-danger">*</span>
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

export default STSA;