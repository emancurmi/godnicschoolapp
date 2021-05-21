import React, { Component } from 'react';
import config from '../config';
import StudentInfo from './FormSteps/StudentInfo';
import GuardianInfo from './FormSteps/GuardianInfo';
import TransportationInfo from './FormSteps/TransportationInfo';
import AdditionalInfo from './FormSteps/AdditionalInfo';
import FSTA from './FormSteps/FSTA';
import STSA from './FormSteps/STSA';
import Agreement from './FormSteps/Agreement';
import Success from './FormSteps/Success';
import Confirm from './FormSteps/Confirm';

class MainForm extends Component {
    state = {
        step: 1,

        studentid: "",
        sfirstname: "",
        slastname: "",
        saddress: "",

        gnationalid: "",
        gfirstname: "",
        glastname: "",
        gaddress: "",
        gemail: "",
        gtelno: "",
        gmobno: "",

        pickupadd: "",
        schoolname: "",
        classname: "",
        pickupways: "",

        additionalinfo: "",

        fsta: "",
        stsa: "",
        agreement: ""
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
        console.log(this.state);
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    confirm = () => {
        console.log(this.state);
        console.log(config.API_ENDPOINT + 'booking/');

        fetch(config.API_ENDPOINT + 'booking/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${config.API_TOKEN}`
            }
        })
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { step } = this.state;
        const { studentid, sfirstname, slastname, saddress, gnationalid, gfirstname, glastname, gaddress, gemail, gtelno, gmobno, pickupadd, schoolname, classname, pickupways, additionalinfo, fsta, stsa, agreement } = this.state;
        const values = { studentid, sfirstname, slastname, saddress, gnationalid, gfirstname, glastname, gaddress, gemail, gtelno, gmobno, pickupadd, schoolname, classname, pickupways, additionalinfo, fsta, stsa, agreement };
        switch (step) {
            case 1:
                return <StudentInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 2:
                return <GuardianInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <TransportationInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 4:
                return <AdditionalInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 5:
                return <FSTA
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 6:
                return <STSA
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 7:
                return <Agreement
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 8:
                return <Confirm confirm={this.confirm}
                    prevStep={this.prevStep}
                    values={values} />
            case 9:
                return <Success 
                values = { values } />
        }
    }
}

export default MainForm;