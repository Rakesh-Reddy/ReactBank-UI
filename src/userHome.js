import React, { Component } from 'react';
import axios from 'axios';
import HeaderHome from './Header/HeaderHome';

class userHome extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userData: []
    //     }
    // }

    constructor() {
        super();
        this.state = {
            userData: []
        }
    }
    componentDidMount() {
        this.getData().then(response=> {
            this.setState({ userData: response.data });
        }).catch(error=> {
            alert(error.message);
        })
    }
    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.33:8080/ingbanking/api/summary/1`).then((response) => {
                resolve(response);               
            }).catch(function (error) {
                reject(error);
            });
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <HeaderHome />
                    <h2 className="col-md-12 text-success">Your Account Summary</h2>
                    {
                        this.state.userData.map((item, i) => {
                            return (
                                <div className="row col-md-12 pt-5" key={i} style={{ color: "#ff6200"}}>
                                    <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Account Number:</div>
                                        <div className="col-md-3"> {item.accountNumber}  </div></div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Balance:</div>
                                        <div className="col-md-3 pt-3">  {item.balance} </div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Account Type:</div>
                                        <div className="col-md-3 pt-3"> {item.accountType} </div>
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

export default userHome;