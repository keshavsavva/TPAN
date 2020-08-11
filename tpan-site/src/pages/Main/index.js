import React, { Component } from 'react'
import './style.css'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import About from '../About';
import Contact from '../Contact';
import Footer from '../../components/Footer';


export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='container text-center' id="home">
                    <div className="homeInfo py-5">
                        <h1 className='mt-2 display-3'>TPAAN <span class='font-weight-bold greenText'>Greensboro</span></h1>
                        <h4 className='mb-5'>Triad Pan Asian American Network</h4>
                        <a 
                            href="#about"
                        >
                            <ArrowDropDownCircleIcon className="icon" fontSize='large'></ArrowDropDownCircleIcon>
                        </a>    
                    </div>
                </div>
                <About />
                
                <div className='parallax'>

                </div>
                <section className='text-center section feature-box py-5 ' id="contact">
                    <div className='container'>
                        <h2 className="my-4 display-4">Contact <span class='font-weight-bold greenText'>Us</span></h2>
                        <Contact />
                    </div>
                </section>
                <section className='text-center section feature-box py-5 ' id="footer">
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Main
