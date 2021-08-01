import React, { Component } from 'react';

export default class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentIdCard: props.booking.studentIdCard,
            studentFirstName: props.booking.studentFirstName,
            studentLastName: props.booking.studentLastName,
            studentEmail: props.booking.studentEmail,
            parentIdCard: props.booking.parentIdCard,
            parentFullName: props.booking.parentFullName,
            gaddress: props.booking.gaddress,
            parentEmail: props.booking.parentEmail,
            gtelno: props.booking.gtelno,
            parentMobile: props.booking.parentMobile,
            pickupadd: props.booking.pickupadd,
            schoolCode: props.booking.schoolCode,
            schoolLevelCode: props.booking.schoolLevelCode,
            scheduleType: props.booking.scheduleType,
            notes: props.booking.notes,
            fsta: props.booking.fsta,
            stsa: props.booking.stsa,
            consent: props.booking.consent,
            current_date: props.booking.current_date,
            regionName: props.booking.regionName,
            current_date: props.booking.current_date
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <p>Loading Form</p>
            );
        }
        else {
            return (
                <tr>
                    <td>{this.state.studentIdCard}</td>
                    <td>{this.state.studentFirstName}</td>
                    <td>{this.state.studentLastName}</td>
                    <td>{this.state.parentIdCard}</td>
                    <td>{this.state.parentFullName}</td>
                    <td>{this.state.gaddress}</td>
                    <td>{this.state.parentEmail}</td>
                    <td>{this.state.gtelno}</td>
                    <td>{this.state.parentMobile}</td>
                    <td>{this.state.pickupadd}</td>
                    <td>{this.state.schoolCode}</td>
                    <td>{this.state.schoolLevelCode}</td>
                    <td>{this.state.scheduleType}</td>
                    <td>{this.state.notes}</td>
                    <td>{this.state.fsta}</td>
                    <td>{this.state.stsa}</td>
                    <td>{this.state.consent}</td>
                    <td>{this.state.current_date}</td>
                </tr>
            )
        }
    }
}