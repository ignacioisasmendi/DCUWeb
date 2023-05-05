import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Demo.css'

const Demo = () => {
  return (
    <>
      <body>
        <h1>Esta es la pagina demo de DCU!</h1>
        <Container>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/KQ_xtBn4r94" title="YouTube video" allowFullScreen></iframe>
          </div>
        </Container>
      </body>
    </>
  )
}

export default Demo;
