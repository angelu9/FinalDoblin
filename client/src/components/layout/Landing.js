import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {

   


    render() {
        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            Welcome 
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Please sign in or register!
                        </p>
                        <br />
                        <div className="col s6">
                            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}>
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" className="btn btn-large btn-flat waves-effect  red white-text" style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                                
                            }}>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;