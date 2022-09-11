import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import { HomeContainer, HomeWrapper } from './homeStyles';
import sim2 from '../../assets/images/sim2.png'
import sim3 from '../../assets/images/sim3.png'
import dcb from '../../assets/images/dcb.png'

const Home = () => {
  return (
    <HomeContainer>
      <NavBar/>
      <HomeWrapper>
        <div className='hero-section'>
          <div className='text-content'>
            <h1>Stay financially connected with the best-in-class core banking system</h1>
            <p>Esse culpa non officia sint exercitation eu qui id sint ad aute.Ea consequat pariatMagna cupidatat excepteur culpa eu tempor cupidatat anim aliqua cupidatat proident commodo.ur irure cillum nisi sint est aliqua velit tempor est et sit.</p>
          </div>
          <div className='img-wrapper'>
            <img className="sim2" src={sim2} alt="sim2"/>
            <img className="sim3" src={sim3} alt="sim3"/>
          </div>
        </div>
      </HomeWrapper>
        <div className='black-section'>
          <div className='content'>
            <h1>Exceptional banking app functionality</h1>
            <p>Differentiate yourself from competitors, launch products and services faster and compose your bank operations based on your needs.</p>
            <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <h2 class="animate-charcter"> Denukan Core Banking Solution</h2>
                    </div>
                  </div>
              </div>
            <img src={dcb} alt="chip" />
          </div>
        </div>

        <h1 className='h1'>
          <span>make</span>
          <div class="message">
            <div class="word1">Transfers</div>
            <div class="word2">statement request</div>
            <div class="word3">loan application</div>
          </div>
        </h1>
        <div className='footer-wrapper'>
        <div class="heading-frame">
          <h2 >DENUKAN<br/>CORE BANKING SOLUTION</h2>
        </div>
        </div>
        <p className='end'>
          &copy; Denukan Network Limited
        </p>
    </HomeContainer>
  )
}

export default Home;