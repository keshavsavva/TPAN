import React, { Component } from 'react'
import "../../styles/output.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import "./style.css"
export class Contact extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }
    
    
      submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
    render() {
        const { status } = this.state
        return (
            <section class="container">
                <div className="row">
                    <div className="col-md-8">
                        
                        <form
                            className="contact-form"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xjvaedpo"
                            method="POST">
                            <div className="form-group">
                            <label style={{float: "left"}}>Name:</label>
                            <input type="text" className="form-control" id="exampleInputName1" name="name" placeholder="John Deer" />

                            </div>

                            <div className="form-group">
                            <label style={{float: "left"}}>Email Address:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="example@email.com" />
                            </div>

                            <div className="form-group">
                            <label style={{float: "left"}}>Message:</label>
                            <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="6" />
                            </div>

                            {status === "SUCCESS" ? <p className="success">Thank you for sending me a message!</p> : <button class="btn btn-primary waves-light finish">Submit</button>}
                            {status === "ERROR" && <p className="failure">Ooops! There was an error. Please fill out all the fields and try again!</p>}
                        </form>
                    </div>
                    <div className="col-md-4 text-center">
                        <LocationOnIcon className="icon1"/>
                        <p>Greensboro, NC</p>
                        <hr />
                        <PhoneIcon className="icon1"/>
                        <p>+1 234 567 8901</p>
                        <hr />
                        <EmailIcon className="icon1"/>
                        <br></br>
                        <a href="mailto:keshav.s.avva@gmail.com" className="email">
                            email@email.com
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact
