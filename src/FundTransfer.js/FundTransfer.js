import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Modal } from 'react-bootstrap';

var valueofotp = 'rakesh';
var otp = localStorage.setItem('otp',valueofotp);

class TransferFund extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fundTransfer: {
                balance: ''
            }
        }
    }

    handleChange = (event) => {
        const { fundTransfer } = this.state;
        fundTransfer[event.target.name] = event.target.value;
        this.setState({ fundTransfer });
    }


    redirect = () => {
        this.getData().then(response => {
            console.log(response);
            this.setState({ disabled: !this.state.disabled })
            swal("transfer successful");
            // this.props.history.push('/productgroup');
        })
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/accountdetails').then((response) => {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    goback = () => {
        this.props.history.push('/productgroup');
    }

    render() {
        return (
            <div className="pt-4">
                <button className="btn btn-info" onClick={this.goback}>Back</button>
                <form >
                    <div className="row pt-3">
                        <div className="col-md-12 pb-2">
                            <input className="col-md-4" style={{ height: "47px" }}
                                placeholder="Enter Origin Account " type="number"
                                name="oaccno" required disabled={(this.state.disabled) ? "disabled" : ""}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-12 pb-3">
                            <input className="col-md-4" style={{ height: "47px" }}
                                placeholder="Enter Destination Account" type="number"
                                name="daccno" required disabled={(this.state.disabled) ? "disabled" : ""}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-12 pb-3">
                            <input className="col-md-4" style={{ height: "47px" }}
                                placeholder="Enter Amount to transfer" type="number"
                                name="balance" required disabled={(this.state.disabled) ? "disabled" : ""}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-12 pb-3">
                            <input className="col-md-4" style={{ height: "47px" }}
                                placeholder="Enter your comments" type="text"
                                name="text" required disabled={(this.state.disabled) ? "disabled" : ""}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-12 pb-3">
                            <input className="col-md-4" style={{ height: "47px" }} type="date"
                                name="date" required disabled={(this.state.disabled) ? "disabled" : ""}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-12 pb-3">
                            <button className="btn btn-info" style={{ width: "160px" }} onClick={this.redirect}>Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TransferFund;