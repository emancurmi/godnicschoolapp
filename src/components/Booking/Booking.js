import React, { Component } from 'react';

export default class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolCode: props.booking.schoolCode,
            schoolLevelCode: props.booking.schoolLevelCode,
            regionName: props.booking.regionName,

            studentIdCard: props.booking.studentIdCard,
            studentFirstName: props.booking.studentFirstName,
            studentLastName: props.booking.studentLastName,
            studentEmail: props.booking.studentEmail,
            
            parentIdCard: props.booking.parentIdCard,
            parentFullName: props.booking.parentFullName,
            parentEmail: props.booking.parentEmail,
            parentMobile: props.booking.parentMobile,
            
            houseName: props.booking.houseName,
            houseNumber: props.booking.houseNumber,
            streetAddress: props.booking.streetAddress,
            zipCode: props.booking.zipCode,

            notes: props.booking.notes,
            consent: props.booking.consent,

            scheduleType: props.booking.scheduleType,
            scheduleValidFrom: props.booking.scheduleValidFrom,
            scheduleValidTo: props.booking.scheduleValidTo,

            scheduleActiveDays: props.booking.scheduleActiveDays,

            scheduleRoutePlannedName: props.booking.scheduleRoutePlannedName,
            schdeuleStudentAddress: props.booking.schdeuleStudentAddress,

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
                    <td>{this.state.schoolCode}</td>
                    <td>{this.state.schoolLevelCode}</td>
                    <td>{this.state.regionName}</td>

                    <td>{this.state.studentIdCard}</td>
                    <td>{this.state.studentFirstName}</td>
                    <td>{this.state.studentLastName}</td>
                    <td>{this.state.parentIdCard}</td>
                    <td>{this.state.parentFullName}</td>
                    <td>{this.state.parentEmail}</td>
                    <td>{this.state.parentMobile}</td>

                    <td>{this.state.houseName}</td>
                    <td>{this.state.houseNumber}</td>
                    <td>{this.state.streetAddress}</td>
                    <td>{this.state.zipCode}</td>

                    <td>{this.state.notes}</td>
                    <td>{this.state.consent}</td>
                    
                    <td>{this.state.scheduleType}</td>
                    <td>{this.state.scheduleActiveDays}</td>
                    <td>{this.state.scheduleValidFrom}</td>
                    <td>{this.state.scheduleValidTo}</td>

                    <td>{this.state.scheduleRoutePlannedName}</td>
                    <td>{this.state.pickupadd}</td>
                    
                    <td>{this.state.current_date}</td>
                </tr>
            )
        }
    }
}