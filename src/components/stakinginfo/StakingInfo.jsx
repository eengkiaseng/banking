import React from 'react'
import './StakingInfo.css'
import {Link} from 'react-router-dom'

function StakingInfo() {
  return (
    <div className="stakinginfo">
        <div className="container flex-row aic jcsb">
            <span>Are You Looking for High Return on Investment Rate?</span>
            <Link to='/services' className='rewardinfo'>Staking Reward</Link>
        </div>
    </div>
  )
}

export default StakingInfo