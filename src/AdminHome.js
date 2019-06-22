import React, { Component } from 'react';
import HeaderHome from './Header/HeaderHome';
import swal from 'sweetalert';
import axios from 'axios';

class AdminHome extends Component {

    constructor() {
        super();
        this.state = {
            userDataForAdmin: []
        }
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.79:6677/ingbanking/api/approval/1`, this.state.userRegistration).then((response) => {
                resolve(response);
                this.setState({ userDataForAdmin: response.data });
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    approve = () => {
        axios.get(`http://10.117.189.117:6677/ingbanking/api/approval/${this.props.data.accountId}`).then((response) => {
            console.log('create account',response);
        }).catch(function (error) {
        });
    }

    reject = () => {
        swal('Rejecting the User Registration');
    }

    render() {
        console.log("hihi")
        return (
            <div>
                <div className="row">
                    <HeaderHome />
                    <h2 className="col-md-12 text-success">Admin Approval</h2>
                    {
                        this.state.userDataForAdmin.map((item, i) => {
                            return (
                                <div className="row col-md-12">
                                    <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">First Name:</div>
                                        <div className="col-md-3"> {item.firstname} </div></div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Last Name:</div>
                                        <div className="col-md-3 pt-3"> {item.lastName}  </div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Address:</div>
                                        <div className="col-md-3 pt-3"> {item.address}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Age:</div>
                                        <div className="col-md-3 pt-3"> {item.age}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Purpose:</div>
                                        <div className="col-md-3 pt-3"> {item.purpose}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Email:</div>
                                        <div className="col-md-3 pt-3"> {item.email}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">City:</div>
                                        <div className="col-md-3 pt-3"> {item.city}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Phone Number:</div>
                                        <div className="col-md-3 pt-3"> {item.phNum}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Gender:</div>
                                        <div className="col-md-3 pt-3"> {item.gender}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Account Type:</div>
                                        <div className="col-md-3 pt-3"> {item.accountType}</div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-2"></div><button className="col-md-4" onClick={this.approve}>Approve</button>
                                        <button className="col-md-4" onClick={this.reject}>Reject</button><div className="col-md-2"></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default AdminHome;