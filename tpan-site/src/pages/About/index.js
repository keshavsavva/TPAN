import React, { Component } from 'react'
import './style.css'
import Paper from '@material-ui/core/Paper'
import CodeIcon from '@material-ui/icons/Code';



export class About extends Component {
    render() {
        return (
            <div>
                <section className='text-center section feature-box py-5 ' id="about">
                    <div className='container text-center'>
                        <h2 className="my-4 display-4">About <span class='font-weight-bold greenText'>Us</span></h2>
                        <h5 className='mb-5 bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h5>
                        <div className="row">
                            <div className="col-lg-4">
                                <Paper className="paper" elevation={3} style={{width: "100%", height: "370px"}}>
                                    <br />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </Paper>
                                <br />
                            </div>
                            <div className="col-lg-4">
                                
                                <Paper className="paperCenter" elevation={3} style={{width: "100%", height: "370px"}}>
                                    <h3 style={{paddingTop: "10%"}}> Mission:</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </Paper>
                                <br />
                            </div>
                            <div className="col-lg-4">
                                <Paper className="paper" elevation={3} style={{width: "100%", height: "370px"}}>
                                    <br></br>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About
