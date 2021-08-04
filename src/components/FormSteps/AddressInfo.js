import React, { Component } from 'react';
import {localities} from '../../data/Localities';

class AddressInfo extends Component {
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
		if (this.props.values.zipCode !== "") { checks += 1; }
		if (this.props.values.houseNumber !== "") { checks += 1; }
		if (this.props.values.streetAddress !== "") { checks += 1; }

		return (checks === 3) ? true : false;
		 
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
					<h6 className="card-title">Address Information</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>
							<div className="row">
                                <div className="col-md-6">
									<div className="form-group">
                                        <label>House Name:</label>
                                        <input type="text" name="houseName" className="form-control required" placeholder="ABC Flats" onChange={this.props.handleChange('houseName')} defaultValue={values.houseName}/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>House Number: <span className="text-danger">*</span></label>
                                        <input type="text" name="houseNumber" className="form-control required" placeholder="12 B" onChange={this.props.handleChange('houseNumber')} defaultValue={values.houseNumber}/>
									</div>
								</div>
							</div>
                            <div className="row">
                                <div className="col-md-12">
									<div className="form-group">
                                        <label>Street Address: <span className="text-danger">*</span></label>
                                        <input type="text" name="streetAddress" className="form-control required" placeholder="Main Street 22" onChange={this.props.handleChange('streetAddress')} defaultValue={values.streetAddress}/>
									</div>
								</div>
							</div>
                            <div className="row">
                                <div className="col-md-6">
									<div className="form-group">
                                        <label>Zip Code: <span className="text-danger">*</span></label>
                                        <input type="text" name="zipCode" className="form-control required" placeholder="ABC123" onChange={this.props.handleChange('zipCode')} defaultValue={values.zipCode}/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Locality: <span className="text-danger">*</span></label>
                                        <select {...this.props.values.regionName} className="form-control required" onChange={this.props.handleChange('regionName')}>
                                            {localities &&
                                                localities.map(loc =>
                                                    <option key={loc.key} value={loc.key}>
                                                        {loc.text}</option>)
                                            }
                                        </select>
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

export default AddressInfo;