import React, { Component } from 'react';
import Dashboard from '../Dashboard';
import Report from '../Report';
import History from '../History';
import News from '../News';
import Reimbursement from '../Reimbursement';

class Tab extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
                    <ul className="nav nav-tabs" style={{backgroundColor:"#EEE7E7", width:"100%"}}>
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#report">Report</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#history">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#reimbursement">Reimbursement</a>
                        </li>
                    </ul>


                    <div className="tab-content">
                        <Dashboard/>
                        <Report/>
                        <History/>
                        <News/>
                        <Reimbursement/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Tab;
