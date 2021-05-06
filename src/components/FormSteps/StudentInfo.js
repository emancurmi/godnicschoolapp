import React, { Component } from 'react';

class StudentInfo extends Component {
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

	componentDidMount() {
		
    }

	render() {
		const { values } = this.props;
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Student Information</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Student ID: <span className="text-danger">*</span></label>
										<input type="text" name="studentid" className="form-control required" placeholder="Student ID" onChange={this.props.handleChange('studentid')} defaultValue={values.studentid} />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>First name: <span className="text-danger">*</span></label>
										<input type="text" name="sfirstname" className="form-control required" placeholder="First Name" onChange={this.props.handleChange('sfirstname')} defaultValue={values.sfirstname}/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Last name: <span className="text-danger">*</span></label>
										<input type="text" name="slastname" className="form-control required" placeholder="Last Name" onChange={this.props.handleChange('slastname')} defaultValue={values.slastname}/>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Address: <span className="text-danger">*</span></label>
										<input type="text" name="saddress" className="form-control required" placeholder="Address" onChange={this.props.handleChange('saddress')} defaultValue={values.saddress}/>
									</div>
								</div>
							</div>
						</fieldset>
						{this.showerror()}
					</div>
					<div className="actions clearfix">							
							
						<a className="btn btn-light" onClick={this.saveAndContinue}>Save and Continue <i className="icon-arrow-right14 ml-2"></i></a>

					</div>
				</form>
			</div>
		)
	}
}

export default StudentInfo;