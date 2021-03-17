import React, { Component } from 'react';
import { Pie, defaults } from 'react-chartjs-2';
import Piechart from './Piechart';
import Piechart2 from './Piechart2';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import AddExpense from './AddExpense';
import Topup from './Topup';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'


class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard" class="tab-pane active">
        <Container>
          <Row xs="1" sm="1" md="2">
            <Col md="8">
              <Row xs="1" sm="1" md="2">
                <Col md="6">
                  <div className="p-3 my-2 rounded">
                    <Toast>
                      <ToastHeader>
                        Expense of the Month
                      </ToastHeader>
                      <ToastBody>
                        <Piechart />
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
                <Col md="6">
                  <div className="p-3 my-2 rounded">
                    <Toast>
                      <ToastHeader>
                        Expense of the Week
                      </ToastHeader>
                      <ToastBody>
                        <Piechart2 />
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <Row xs="1" sm="1" md="1">
                <AddExpense />
              </Row>
              <Row xs="1" sm="1" md="1">
                <Topup />
              </Row>
            </Col>
          </Row>
        </Container>

      </div>

    )
  }
}

export default Dashboard;
