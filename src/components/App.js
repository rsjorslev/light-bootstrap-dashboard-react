var React = require('react');

import { Nav, Navbar, NavItem, NavDropdown, MenuItem, CollapsibleNav, DropdownButton } from 'react-bootstrap'

var App = React.createClass({

    getInitialState: function () {
        return {
            count: 0
        }
    },

    componentDidMount: function () {
        setInterval(this.tick, 1000);
    },

    tick: function() {
        this.setState({count: this.state.count + 1});
    },

  render: function() {

    return (
      <div>
          <div className="wrapper">
              <div className="sidebar" data-color="orange">
                  <div className="sidebar-wrapper">
                      <div className="logo">
                          <a href="http://www.creative-tim.com" className="simple-text">
                              Creative Tim
                          </a>
                      </div>

                      <ul className="nav">
                          <li className="active">
                              <a href="dashboard.html">
                                  <i className="pe-7s-graph"></i>
                                  <p>Dashboard</p>
                              </a>
                          </li>
                          <li>
                              <a href="user.html">
                                  <i className="pe-7s-user"></i>
                                  <p>User Profile</p>
                              </a>
                          </li>
                          <li>
                              <a href="table.html">
                                  <i className="pe-7s-note2"></i>
                                  <p>Table List</p>
                              </a>
                          </li>
                          <li>
                              <a href="typography.html">
                                  <i className="pe-7s-news-paper"></i>
                                  <p>Typography</p>
                              </a>
                          </li>
                          <li>
                              <a href="icons.html">
                                  <i className="pe-7s-science"></i>
                                  <p>Icons</p>
                              </a>
                          </li>
                          <li>
                              <a href="maps.html">
                                  <i className="pe-7s-map-marker"></i>
                                  <p>Maps</p>
                              </a>
                          </li>
                          <li>
                              <a href="notifications.html">
                                  <i className="pe-7s-bell"></i>
                                  <p>Notifications</p>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="main-panel">
                  <Navbar>
                      <Navbar.Header>
                          <Navbar.Brand>
                              <a href="#">Dashboard</a>
                          </Navbar.Brand>
                          <Navbar.Toggle />
                      </Navbar.Header>
                      <Navbar.Collapse>
                          <Nav>
                          </Nav>
                          <Nav pullRight>
                              <NavItem eventKey={1} href="#">Account</NavItem>
                              <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                                  <MenuItem eventKey={2.1}>Action</MenuItem>
                                  <MenuItem eventKey={2.2}>Another action</MenuItem>
                                  <MenuItem eventKey={2.3}>Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem eventKey={2.4}>Separated link</MenuItem>
                              </NavDropdown>
                              <NavItem eventKey={3} href="#">Log out</NavItem>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>

                  <div className="content">
                      <div className="container-fluid">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="card">
                                      <div className="header">
                                          <h4 className="title">Striped Table with Hover</h4>
                                          <p className="category">Here is a subtitle for this table</p>
                                      </div>
                                      <div className="content">
                                          <i className="fa fa-globe fa-5x"></i>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="card">
                                      <div className="header">
                                          <h4 className="title">Striped Table with Hover</h4>
                                          <p className="category">Here is a subtitle for this table</p>
                                      </div>
                                      <div className="content">
                                          Count (to check HMR): {this.state.count}
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="card">
                                      <div className="header">
                                          <h4 className="title">Striped Table with Hover</h4>
                                          <p className="category">Here is a subtitle for this table</p>
                                      </div>
                                      <div className="content">
                                          place some content here
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }

});

module.exports = App;
