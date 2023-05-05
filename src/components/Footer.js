import React from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <a className='logo-exactas' href='https://exa.unicen.edu.ar/' target='_blank'>
          <img src={require('../images/LogoExaBlanco.png')}/>
        </a>
        <a className='logo-unicen' href='https://www.unicen.edu.ar/' target='_blank'>
          <img src={require('../images/LogoUniBlanco.png')}/>
        </a>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <a href='/'>Home</a>
          </div>
          <div className='sb__footer-links_div'>
            <a href='/demo'>Demo</a>
          </div>
          <div className='sb__footer-links_div'>
            <a href='/about'>About</a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Contact</h4>
            <div className='socialmedia'>
              <a href='https://accounts.google.com/v3/signin/identifier?dsh=S-771659743%3A1683310761116339&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hl=es&ifkv=Af_xneEmWNYWjAb7X21ewANoIsmuU9gtzBHYhnqeK3IXtjipXRgDg33cDbT1EkjpP_NFsHwtKmqg&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin#__utma=29003808.1283692909.1683310747.1683310747.1683310747.1&__utmb=29003808.0.10.1683310749274&__utmc=29003808&__utmx=-&__utmz=29003808.1683310747.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=85937626' target='_blank'> <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}}/> DCU@gmail.com</a>
              <p> <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}}/> Tandil, Buenos Aires, Argentina.</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
