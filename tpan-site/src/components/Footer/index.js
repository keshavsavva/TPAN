import React, { Component } from 'react'
import "./style.css"
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';



export class Footer extends Component {
    render() {
        return (
                <section className="container text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                        </div>
                    </div>
                    <br />
                    <div className="text-center">
                        <a
                            class="nav-link waves-effect waves-light"
                            href="#"
                            >
                                <button style= {{float: "none"}} className="btn btn-primary waves-light finish">Support TPAAN<AccessibilityNewIcon /></button>
                            </a>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12">Copyright &copy; Keshav Avva</div>
                    </div>
                </section>
        )
    }
}

export default Footer


