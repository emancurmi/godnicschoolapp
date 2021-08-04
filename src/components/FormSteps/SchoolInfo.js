import React, { Component } from 'react';
import {localities} from '../../data/Localities';
import {schools} from '../../data/Schools';
import {levels} from '../../data/Levels';

class SchoolInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}

	saveAndContinue = (e) => {
		e.preventDefault();
		this.props.nextStep();
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
					<h6 className="card-title">School Information</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
				<form className="wizard-form wizard clearfix">
					<div className="content clearfix">

						<fieldset>
							<div className="row">
                            <div className="col-md-4">
									<div className="form-group">
                                        <label>School: <span className="text-danger">*</span></label>
                                        <select {...values.schoolCode} className="form-control required" onChange={this.props.handleChange('schoolCode')}>
                                            {schools &&
                                                schools.map(o =>
                                                    <option key={o.key} value={o.key}>
                                                        {o.text}</option>)
                                            }
                                        </select>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label>Class: <span className="text-danger">*</span></label>
                                        <select {...values.schoolLevelCode} className="form-control required" onChange={this.props.handleChange('schoolLevelCode')}>
                                            {levels &&
                                                levels.map(lvl =>
                                                    <option key={lvl.key} value={lvl.key}>
                                                        {lvl.text}</option>)
                                            }
                                        </select>
									</div>
								</div>
                                <div className="col-md-4">
									<div className="form-group">
										<label>Region: <span className="text-danger">*</span></label>
                                        <select {...values.studentRegionName} className="form-control required" onChange={this.props.handleChange('studentRegionName')}>
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
							
						<button className="btn btn-light" onClick={this.saveAndContinue}>Save and Continue <i className="icon-arrow-right14 ml-2"></i></button>

					</div>
				</form>
			</div>
		)
	}
}

export default SchoolInfo;