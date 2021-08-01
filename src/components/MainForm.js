import React, { Component } from 'react';
import config from '../config';
import Moment from 'moment';

import SchoolInfo from './FormSteps/SchoolInfo';
import StudentInfo from './FormSteps/StudentInfo';
import GuardianInfo from './FormSteps/GuardianInfo';
import AddressInfo from './FormSteps/AddressInfo';
import TransportationInfo from './FormSteps/TransportationInfo';
import Success from './FormSteps/Success';
import Confirm from './FormSteps/Confirm';
import Agreement from './FormSteps/Agreement';
import FormError from './FormSteps/FormError';

class MainForm extends Component {
    state = {
        step: 1,

        schoolCode:"Bishops Conservatory Primary Gozo",
        schoolLevelCode:"KinderGarden1",
        studentReagionName:"Fontana",

        studentIdCard: "",
        studentFirstName: "",
        studentLastName: "",
        studentEmail: "",

        parentIdCard: "",
        parentFullName: "",
        
        parentMobile: "",
        parentEmail: "",
        
        houseName:"",
        houseNumber:"",
        streetAddress:"",
        zipCode:"",

        notes:"",
        consent:"",

        scheduleType: "",

        scheduleValidFrom: "",
        scheduleValidTo:"",

        scheduleAciveDays:"",

        scheduleRoutePlannedName:"",
        scheduleStudentAddress:"True",

        regionName:"",
        current_date: moment().format("DD-MMM")
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
        const { schoolCode, schoolLevelCode, studentReagionName, studentIdCard, studentFirstName, studentLastName, studentEmail, parentIdCard, parentFullName, parentMobile, parentEmail, houseName, houseNumber, streetAddress, zipCode, notes, consent, scheduleType, scheduleValidFrom, scheduleValidTo, scheduleAciveDays, scheduleStudentAddress, regionName} = this.state;
        const values = { schoolCode, schoolLevelCode, studentReagionName, studentIdCard, studentFirstName, studentLastName, studentEmail, parentIdCard, parentFullName, parentMobile, parentEmail, houseName, houseNumber, streetAddress, zipCode, notes, consent, scheduleType, scheduleValidFrom, scheduleValidTo, scheduleAciveDays, scheduleStudentAddress, regionName };
        
        switch (step) {
            default:{
                return <FormError />
            }
            case 1:
                return <SchoolInfo 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
            
            case 2:
                 return <StudentInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                 />
                
            case 3:
                return <GuardianInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 4:
                return <AddressInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 5:
                return <TransportationInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 6:
                return <Agreement
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 7:
                return <Confirm confirm={this.confirm}
                    prevStep={this.prevStep}
                    values={values} 
                />
            case 8:
                return <Success 
                values = { values } />
        }
    }
}

export default MainForm;