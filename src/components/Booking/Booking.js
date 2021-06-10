import React, { Component } from 'react';

export default class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentid: props.booking.studentid,
            sfirstname: props.booking.sfirstname,
            slastname: props.booking.slastname,
            saddress: props.booking.slastname,
            gnationalid: props.booking.gnationalid,
            gfirstname: props.booking.gfirstname,
            glastname: props.booking.glastname,
            gaddress: props.booking.gaddress,
            gemail: props.booking.gemail,
            gtelno: props.booking.gtelno,
            gmobno: props.booking.gmobno,
            pickupadd: props.booking.pickupadd,
            schoolname: props.booking.schoolname,
            classname: props.booking.classname,
            pickupways: props.booking.pickupways,
            additionalinfo: props.booking.additionalinfo,
            fsta: props.booking.fsta,
            stsa: props.booking.stsa,
            agreement: props.booking.agreement,
            current_date: props.booking.current_date,
            state: props.booking.state
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
                    <td>{this.state.studentid}</td>
                    <td>{this.state.sfirstname}</td>
                    <td>{this.state.slastname}</td>
                    <td>{this.state.gnationalid}</td>
                    <td>{this.state.gfirstname}</td>
                    <td>{this.state.glastname}</td>
                    <td>{this.state.gaddress}</td>
                    <td>{this.state.gemail}</td>
                    <td>{this.state.gtelno}</td>
                    <td>{this.state.gmobno}</td>
                    <td>{this.state.pickupadd}</td>
                    <td>{this.state.schoolname}</td>
                    <td>{this.state.classname}</td>
                    <td>{this.state.pickupways}</td>
                    <td>{this.state.additionalinfo}</td>
                    <td>{this.state.fsta}</td>
                    <td>{this.state.stsa}</td>
                    <td>{this.state.agreement}</td>
                    <td>{this.state.current_date}</td>
                </tr>
            )
        }
    }
}