import React, { Component } from 'react';

class FormError extends Component {

	confirm = (e) => {
		e.preventDefault()
		this.props.confirm()
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render() {
		
		return (
			<div className="card">
				<div className="card-header bg-white header-elements-inline">
					<h6 className="card-title">Form Error</h6>
					<div className="header-elements"><div className="list-icons"></div>
					</div>
				</div>
                <p>The Form has Encountered an Error. Please wait a few seconds and refresh form. 
                    We are sorry for the inconvinence. 
                </p>
            </div>
        )
    }
}

export default FormError;
