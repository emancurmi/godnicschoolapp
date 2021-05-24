import React, { Component } from 'react';
import Booking from '../Booking/Booking';
import config from '../../config';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  

class Bookings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userid: 0,
            bookings: [],
            error: null,
            isLoading: true,
            showModal: false
        }
    }

    setIsLoading = data => {
        this.setState({
            isLoading: data
        })
    }

    setBookingData = data => {
        this.setState({
            bookings: data
        })
    }

    fetchbookings = () => {
        this.setIsLoading(true);

        fetch(config.API_ENDPOINT + 'booking', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(data => {
                this.setBookingData(data)
            })
            .catch(error => {
                this.setState({ error })
            })

        this.setIsLoading(false);
    }


    componentDidMount() {
        this.fetchbookings();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <p>Loading Form</p>
            );
        }
        else {
            return (
                <table class="table" id="t01">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student First Name</th>
                            <th>Student Last Name</th>
                            <th>Guardian ID</th>
                            <th>Guardian First Name</th>
                            <th>Guardian Last Name</th>
                            <th>Guardian Address</th>
                            <th>Guardian Email</th>
                            <th>Guardian Tel No</th>
                            <th>Guardian Mob No</th>
                            <th>Pickup Address</th>
                            <th>School Name</th>
                            <th>Class Name</th>
                            <th>Pickup Days</th>
                            <th>Additional Info</th>
                            <th>FSTA</th>
                            <th>STSA</th>
                            <th>Agreement</th>
                            <th>Date Signed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bookings.map((booking, key) => (
                            <Booking key={key} booking={booking}/>
                            ))}
                    </tbody>
                    <tfoot>
                        <ReactHTMLTableToExcel className="btn btn-info" table="t01" filename="ReportExcel" sheet="Sheet" buttonText="Export excel" />
                    </tfoot>
                </table>
            )
        }
    }
} 

export default Bookings;