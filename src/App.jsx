import { createContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css'
import MyTabs from './MyTabs';
import Footer from './Footer';
import LanguageToggler from './LanguageToggler';

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <div className='px-3'>
        <Row className='header'>
          <Col sm={4} md={2}>
            <img className='profile' src='/profilePic.jpg' alt="Mark's profile picture" />
          </Col>
          <Col sm={8}>
            <Row className='titleRow'>
              <h1>Mark Syphus</h1>
            </Row>
            <Row className='text-center'>
              {language === 'en' ? 
                <h3>Full Stack Web Developer</h3>
                :
                <h3>Desarrollador de Pila Completa</h3>
              }
            </Row>
            <Row className='text-center'>
              <Col className='px-0'>
                <div>
                  <a href='tel:+13856667626'>
                    +1 385-666-7626
                  </a>
                </div>
                <div>
                  <a href='mailto:mark.syphus@gmail.com'>
                    mark.syphus@gmail.com
                  </a>
                </div>
              </Col>
            </Row>
            <Row className='text-center mt-1'>
              <Col>
                <a 
                  href='https://www.linkedin.com/in/mark-syphus/' 
                  target='_blank' 
                  title='https://www.linkedin.com/in/mark-syphus/'
                >
                  <i className="fab fa-linkedin icon" />
                </a>
                <a 
                  href='https://github.com/msyphus' 
                  target='_blank' 
                  title='https://github.com/msyphus'
                >
                  <i className="fab fa-github icon" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={2}>
            <LanguageToggler />
          </Col>
        </Row>
          <Row>
            <MyTabs />
          </Row>
        <Row>
          <Footer />
        </Row>
      </div>
    </LanguageContext.Provider>
  )
}

export default App
