import React from 'react'
import MainLayout from '../../layout/mainlayout/MainLayout'
import {Link} from 'react-router-dom'
import './Homepage.css'
import StakingInfo from '../../components/stakinginfo/StakingInfo'

function Homepage() {
  return (
    <MainLayout>
        <div className="homepage">

          <div className="homebanner">
            <div className="container banner-info">
              <span className='title'>Staking & Daily Earning</span>
              <span className="subtitle">Start earning daily with our staking platform.<br/>Join now and watch your crypto work for you!</span>
            </div>            
          </div>
          <StakingInfo></StakingInfo>
          

            <p>This is homepage website</p>
        </div>
    </MainLayout>
  )
}

export default Homepage