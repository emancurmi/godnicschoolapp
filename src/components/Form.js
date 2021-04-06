import React, { Component } from 'react';


export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			student: {
				id: 0,
				firstname: "",
				lastname: "",
				address: ""
			},
			guardian: {
				id: 0,
				firstname: "",
				lastname: "",
				address: "",
				email: "",
				telno: 0,
				mobno: 0
			},
			trasnsportation: {
				pickupadd: "",
				dropoffadd: "",
				schoolname: "",
				classname: "",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: ""
			},
			additionalinfo: "",
			fsta: "",
			stsa: "",
			aggreement: ""
		}
	}

	fieldsetstudentinfo = () => {
		return (
			<fieldset>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>Student ID: <span className="text-danger">*</span></label>
							<input type="text" name="studentid" className="form-control required" placeholder="Student ID" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>First name: <span className="text-danger">*</span></label>
							<input type="text" name="firstname" className="form-control required" placeholder="First Name" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label>Last name: <span className="text-danger">*</span></label>
							<input type="text" name="lastname" className="form-control required" placeholder="Last Name" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>Address:</label>
							<input type="text" name="address" className="form-control required" placeholder="Address" />
						</div>
					</div>
				</div>

			</fieldset>
		)
	}

	fieldsetguardiansinfo = () => {
		return (
			<fieldset>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>National ID: <span className="text-danger">*</span></label>
							<input type="text" name="nationalid" className="form-control required" placeholder="National ID" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>First name: <span className="text-danger">*</span></label>
							<input type="text" name="firstname" className="form-control required" placeholder="First Name" />
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label>Last name: <span className="text-danger">*</span></label>
							<input type="text" name="lastname" className="form-control required" placeholder="Last Name" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>Address:</label>
							<input type="text" name="address" className="form-control required" placeholder="Address" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>E-mail:</label>
							<input type="email" name="email" className="form-control required" placeholder="E-mail" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>Telephone Number:</label>
							<input type="tel" name="telno" className="form-control required" placeholder="21550000" />
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label>Mobile Number:</label>
							<input type="tel" name="mobileno" className="form-control required" placeholder="99887700" />
						</div>
					</div>
				</div>

			</fieldset>
		)
	}

	fieldsettransportationinfo = () => {
		return (
			<fieldset>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>Pick Up Address:</label>
							<input type="text" name="pickupaddress" className="form-control required" placeholder="Pick Up Address" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>School Name:</label>
							<input type="text" name="schoolname" className="form-control required" placeholder="School Name" />
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label>Class Name:</label>
							<input type="text" name="classname" className="form-control required" placeholder="Class Name" />
						</div>
					</div>
				</div>


				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label>Transportation needed:</label><br/>
							<div class="form-check form-check-inline">
								<label class="form-check-label">
									<input type="radio" name="availability" class="form-input-styled" />
										2 ways
											</label>
							</div>

							<div class="form-check form-check-inline">
								<label class="form-check-label">
									<input type="radio" name="availability" class="form-input-styled" />
											Monings Only
											</label>
							</div>

							<div class="form-check form-check-inline">
								<label class="form-check-label">
									<input type="radio" name="availability" class="form-input-styled" />
											Afternoons Only
											</label>
							</div>


						</div>
					</div>
				</div>

			</fieldset>
		)
	}

	fieldsetadditionalinfo = () => {
		return (
			<fieldset>

				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label>Additional information:</label>
							<textarea name="additional-info" rows="5" cols="5" placeholder="If you want to add any info, do it here." className="form-control"></textarea>
						</div>
					</div>
				</div>

			</fieldset>
		)
	}

	fsta = () => {
		return (
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
								<br/>
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
						<div class="form-group">
							<div class="form-check">
								<label class="form-check-label">
									<input type="checkbox" class="form-check-input" />
											Form A: Disclaimer By signing this agreement you are confirming that you have read the above and that you are agreeing to the data processing by the Provider and MEDE for scholastic year 2020/2021 for the purposes of making use of the free school transport scheme provided by MEDE. This agreement is valid for the entire duration of the scholastic year and you are not authorised to change service provider for the scholastic year once this form is signed. Should this service provider fail in providing safe and professional school transport services, you are to contact the School Transport Section at MEDE (t. 2598 1888 / e. schooltransport@gov.mt) to request a change in service provider. We thank you for your kind cooperation. *
										</label>
							</div>
						</div>
					</div>
				</div>
			</fieldset>
		)
	}

	stsa = () => {
		return (
			<fieldset>

				<div className="row">
					<div className="col-md-12">
						<h5>Form B: Agreement between the School Transport Section (MEDE) and Parents/Legal Guardians (Non-State Schools)</h5>

						<p>Godnic Garage and Paul Borge are an approved School Tansport Service provider (further referred to as
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
							<li>Student details include ID Number, Name, Surname, Address, School Name, School Year and
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
						<div class="form-group">
							<div class="form-check">
								<label class="form-check-label">
									<input type="checkbox" class="form-check-input" />
											Form B: Disclaimer By signing this agreement you are agreeing to the data processing by the Provider and MEDE for scholastic year 2020/2021 for the purposes of making use of the free school transport scheme provided by MEDE. *
										</label>
							</div>
						</div>
					</div>
				</div>

			</fieldset>
		)
	}

	agreement = () => {
		return (
			<fieldset>

				<div className="row">
					<div className="col-md-12">
						<p>We will process the data provided in this Application Form and any other data which you subsequently give to us in any manner, in line with our Privacy Notice. We advise that you read our full Privacy Policy and Terms & Conditions.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div class="form-group">
							<div class="form-check">
								<label class="form-check-label">
									<input type="checkbox" class="form-check-input" />
									I confirm that I have read and accept the Privacy Notice & - Terms & conditions *
										</label>
							</div>
						</div>
					</div>
				</div>

			</fieldset>
			)
    }

	studentregistrationcard = () => {
		return (

			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">School Transport Application</h6>
					<div className="header-elements">
						<div className="list-icons">
							{/*<a className="list-icons-item" data-action="collapse"></a>
							<a className="list-icons-item" data-action="reload"></a>
							<a className="list-icons-item" data-action="remove"></a>*/}
						</div>
					</div>
				</div>

				<form className="wizard-form steps-validation" onSubmit={this.handleSubmit} data-fouc>
					
					<h6>Student's Infromation</h6>
					{this.fieldsetstudentinfo()}

					<h6>Parents Inforamtion</h6>
					{this.fieldsetguardiansinfo()}

					<h6>Transprtation Information</h6>
					{this.fieldsettransportationinfo()}

					<h6>Additional info</h6>
					{this.fieldsetadditionalinfo()}

					<h6>Free School Transport Agreement<br/>(Non-State Schools)</h6>
					{this.fsta()}

					<h6>School Transport Section Agreement</h6>
					{this.stsa()}

					<h6>Godnic Garage Agreement</h6>
					{this.agreement()}
				</form>
			</div>
		)
	}

	handleSubmit = e => {
		{/*e.preventDefault();
		const { orderbox } = e.target;
		const order = {
			ordershopid: this.state.selectedshop.shopid,
			orderuserid: parseInt(this.state.userid),
			orderdata: orderbox.value,
		}

		if (order.ordershopid === 0) {
			this.setState({ error: "Select Shop" });
		}
		else {
			fetch(config.API_ENDPOINT + 'order/', {
				method: 'POST',
				body: JSON.stringify(order),
				headers: {
					'content-type': 'application/json',
					'authorization': `bearer ${config.API_TOKEN}`
				}
			})

				.then(res => {
					if (!res.ok) {
						return res.json().then(error => Promise.reject(error));
					}
					return res.json();
				})

				.then(data => {
					orderbox.value = "";
				})

				.catch(error => {
					this.setState({ error })
				})
		}*/}
	}

	render() {
		return (
			<div>
				{this.studentregistrationcard()}
			</div>)
	}
}